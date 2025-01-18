import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import AuthContext from "./AuthContext";
import { auth } from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    // user signUp
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user signIn
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // signIn google
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //  user update profile
    const updateUserProfile = (updateData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }

    // observation setup
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
            console.log("current user--->", currentUser)
            if(currentUser){
                // get token and store client
                const userInfo = {email: currentUser?.email};
                axiosPublic.post("/jwt", userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
            }



            setLoading(false)
            return () => {
                unSubscriber();
            }


        })
    }, [])



    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        signOutUser,
        signInGoogle,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;