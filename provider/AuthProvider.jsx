import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const AuthContext = createContext()

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        return onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
    }, [])




    const googleSign = () => {
        return signInWithPopup(auth, provider);
    }
    
    const authSignOut = () => {
        return signOut(auth)
    }


    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateProfile = (userData) => {
        return updateProfile(auth.currentUser, userData);
    }

    const resetPass = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    const authData = {
        a:1,
        b:2000,
        googleSign,
        authSignOut,
        user,
        loading,
    registerUser,
    updateProfile,
    loginUser,
    resetPass

        
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
