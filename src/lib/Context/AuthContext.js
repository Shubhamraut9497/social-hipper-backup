"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs"; // Adjust this import based on your authentication setup

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isSignedIn } = useAuth();
  const [authState, setAuthState] = useState({ isSignedIn });

  useEffect(() => {
    setAuthState({ isSignedIn });
  }, [isSignedIn]);

  return (
    <AuthContext.Provider value={{ authState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
