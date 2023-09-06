import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';
import initializauthentication from '../component/Firebase/firebase.init';

initializauthentication();

const useFirebase = () => {
        const navigate = useNavigate();
        const [user, setUser] = useState({});
        const [isLogin, setIsLogin] = useState(true);
        const [errors, setErrors] = useState({});
        const auth = getAuth();
        const signInUsingGoogle = () => {
                setIsLogin(true);
                const googleProvider = new GoogleAuthProvider();
                signInWithPopup(auth, googleProvider)
                        .then(result => {
                                setUser(result.user);
                        })
                        .finally(() => {
                                setIsLogin(false)
                        })


        }
        const signUpNewUser = (name, email, password) => {
                createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;

                                navigate("/home")
                                // ...
                        })
                        .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                // ..
                        });
                updateProfile(auth.currentUser, {
                        displayName: `name`
                }).then(() => {
                        // Profile updated!
                        // ...
                }).catch((error) => {
                        // An error occurred
                        // ...
                });
        }
        const signInUser = (email, password) => {
                signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                navigate("/home")
                                // ...
                        })
                        .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                        });
        }


        // observe user state change 
        useEffect(() => {
                onAuthStateChanged(auth, user => {
                        if (user)
                                setUser(user);
                        else
                                setUser({});
                })
        }, [auth])

        const logOut = () => {
                signOut(auth).then(() => {
                        setIsLogin(true)
                        setUser({})
                })
                        .catch((error) => {
                                // An error happened.
                        })
                        .finally(() => { setIsLogin(false) })

        }


        return {
                user,
                signInUsingGoogle,
                errors,
                logOut,
                isLogin,
                signUpNewUser,
                signInUser
        }
};

export default useFirebase;