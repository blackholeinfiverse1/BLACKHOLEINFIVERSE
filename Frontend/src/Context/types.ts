// src/types.ts
export interface User {
    id: string;
    email: string;
    // Add other user properties as needed
  }
  
  export interface AuthState {
    user: User | null;
  }
  
  export type AuthAction =
    | { type: "LOGIN"; payload: User }
    | { type: "LOGOUT" };
  
  export interface AuthContextProps {
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
  }
  