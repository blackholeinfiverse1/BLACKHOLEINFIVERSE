

import { createContext, useEffect, useReducer } from "react";
import { toast } from 'react-hot-toast';
import axios from "axios";

export const AuthContext = createContext();

const initialState = { user: null };

const reducer = (state, action) => { 
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGOUT":
            localStorage.removeItem("token");
            toast.success("Logout successful.");
            return { ...state, user: null };
        default:
            return state;
    }  
};
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // Define the checkUserSession function inside useEffect
        const checkUserSession = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const response = await axios.post("http://localhost:8000/verify-token", { token });
                    if (response.data.success) {
                        dispatch({
                            type: "LOGIN",
                            payload: response.data.user,
                        });
                    } else {
                        dispatch({ type: "LOGOUT" });
                    }
                } catch (error) {
                    console.error("Error verifying token:", error);
                    dispatch({ type: "LOGOUT" });
                }
            }
        };

        checkUserSession();
    }, []);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
