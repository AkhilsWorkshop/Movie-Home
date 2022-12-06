import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, sendEmailVerification, signInWithEmailAndPassword, signOut, updateEmail } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signUpUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, "users", email), {
            savedMovies: [],
            savedShows: []
        })
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return unsubscribe;
    })

    return (
        <AuthContext.Provider value={{ signUpUser, signInUser, signOutUser, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}