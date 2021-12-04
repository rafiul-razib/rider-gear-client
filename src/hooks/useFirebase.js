
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../FireBase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
    const[user, setUser] = useState({});
    const[isLoading, setIsLoading] = useState(true);
    const[admin, setAdmin] = useState(false);
    const[success, setSuccess] = useState(false);
    const[authError, setAuthError]= useState('')
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = (location, history) =>{
        
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(data =>{
            console.log(data.user)
            setAuthError('')
            saveUserToDb(data.user.email, data.user.displayName, "PUT")
            const destination = location?.state?.from || '/';
            history.replace(destination)
        })
        .catch(error =>{
            setAuthError(error.message)
        })
        .finally(()=>
            setIsLoading(false)
        )
    }

    const register = (email, password, name, history) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
       
        .then(data =>{
            // const newUser ={email : email, displayName: name}
            // setUser(newUser)
            setAuthError('')
            saveUserToDb(email, name, "POST")
            updateProfile(auth.currentUser, {
                displayName: name
            })

            setSuccess(true)
            
        
        })
        .catch(error =>{
            setAuthError(error.message)
            
        })
        .finally(()=>setIsLoading(false))
    }


    const signInWithEmail = (email, password, location, history) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(data =>{
            setAuthError('')
            console.log(data.user)
            const destination = location?.state?.from || '/';
            history.replace(destination)
        })
        .catch(error =>{
            setAuthError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }

    const logOut = (history) =>{
        signOut(auth)
        .then(()=>{
            history.replace('/')
        })
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

    const saveUserToDb = (email, displayName, method)=>{
        const user={email, displayName}

        fetch("http://localhost:5000/users",{
            method: method,
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                console.log(data)
            }
        })
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin)
        })
    },[user.email])


    return {
        user,
        admin,
        googleSignIn,
        register,
        signInWithEmail,
        logOut,
        isLoading,
        setIsLoading,
        success,
        setSuccess

     
    }
};

export default useFirebase;