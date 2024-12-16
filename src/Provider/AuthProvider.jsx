import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './../firebase.config';
import { toast } from 'react-toastify';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    //register authentication
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login authentication
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const manageProfile = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
        .then((res) => {
            toast.success('Profile updated successfully!');
        })
        .catch((err) => {
            toast.error(err.message);
        });

        setUser({
            ...auth.currentUser,
            displayName: name,
            photoURL: image
        });
    }

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const LogOut = () => {
        return signOut(auth);
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth,email)
        
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);

            if (currentUser) setUser(currentUser)
            else setUser(null);

            setLoading(false)

            return () => {
                unsubscribe();
            }
        })
    }, [])

    const authInfo = {

        userRegister,
        userLogin,
        signOut,
        googleLogin,
        user,
        setUser,
        loading,
        LogOut,
        error,
        setError,
        manageProfile,
        forgotPassword,
    }



    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;