import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../FireBase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
    const[user, setUser] = useState({});
    const[isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = (history, location) =>{
        setIsLoading(true)
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(data =>{
            console.log(data.user)
            const destination = location?.state?.from || '/';
            history.replace(destination)
        })
        .finally(()=>
            setIsLoading(false)
        )
    }

    const register = (email, password, name, history) =>{
        createUserWithEmailAndPassword(auth, email, password)
       
        .then(data =>{
            updateProfile(auth.currentUser, {
                displayName: name
            })
            console.log(data.user)
            history.replace('/')
        })
        .finally(()=>setIsLoading(false))
    }


    const signInWithEmail = (email, password, location, history) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(data =>{
            console.log(data.user)
            const destination = location?.state?.from || '/';
            history.replace(destination)
        })
        .finally(()=>setIsLoading(false))
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{})
        .finally(
            setIsLoading(false)
        )
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return unsubscribe
    },[])
    return {
        user,
        googleSignIn,
        register,
        signInWithEmail,
        logOut,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;