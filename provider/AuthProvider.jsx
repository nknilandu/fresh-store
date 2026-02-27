import React, { createContext } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const authData = {
        a:1,
        b:2
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
