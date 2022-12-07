import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, sendEmailVerification, signInWithEmailAndPassword, signOut, updateEmail } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { setDoc, doc, onSnapshot } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState([]);

    const signUpUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, "users", email), {
            savedMovies: [],
            savedShows: []
        })
    }

    const getUserData = (email) => {
        onSnapshot(doc(db, "users", `${email}`), (doc) => {
            setUserData(doc.data())
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

        getUserData(user?.email)
        return unsubscribe;
    }, [user?.email])

    return (
        <AuthContext.Provider value={{ signUpUser, signInUser, signOutUser, getUserData, user, userData }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}