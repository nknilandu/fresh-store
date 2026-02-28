import React, { createContext } from 'react';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext()

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();





const AuthProvider = ({children}) => {

    


    const googleSign = () => {
        return signInWithPopup(auth, provider);
    }
    
    const authSignOut = () => {
        return signOut(auth)
    }

    


    const authData = {
        a:1,
        b:2000,
        googleSign,
        authSignOut
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
