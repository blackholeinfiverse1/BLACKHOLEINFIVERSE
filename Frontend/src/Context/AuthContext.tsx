import React, { createContext, useEffect, useReducer, ReactNode } from "react";
import { toast } from 'react-hot-toast';
import axios from "axios";
import { AuthState, AuthAction, AuthContextProps, User } from './types.ts';

// Create context with type
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const initialState: AuthState = { user: null };

const reducer = (state: AuthState, action: AuthAction): AuthState => { 
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

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Define the checkUserSession function inside useEffect
    const checkUserSession = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.post<{ success: boolean; user?: User }>(
            "http://localhost:8000/verify-token",
            { token }
          );
          if (response.data.success && response.data.user) {
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
