import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

// Access to our created context through this useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // create a current user state to be passed to the Logged in user context
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    // returns a promise, to sign in if successful or throw an error if not
    return auth.createUserWithEmailAndPassword(email, password);
  };

  // when signup is called, fires createUserWithEmailAndPassword, fires auth.onAuthStateChanged, then sets the current user state to the user who just logged in.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    // Cleanup:
    return unsubscribe;
  }, []);

  // The value to pass to provider: the current signed in user, and signup function.
  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
