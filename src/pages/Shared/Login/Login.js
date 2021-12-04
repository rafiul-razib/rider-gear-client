import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const{user, signInWithEmail, googleSignIn} = useAuth();
    const[email, setEmail]= useState("");
    const[password, setPassWord]= useState("");

    const location = useLocation();
    const history = useHistory();

    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassWord(e.target.value)
    }

    const handleLoginWithPassword = e =>{
        signInWithEmail(email, password, location, history)
        e.preventDefault()
    }
    

    const handleGoogleSignIn = e =>{
        googleSignIn(location, history)
        e.preventDefault()
    }
    return (
        <div className="container-fluid bg-light">
            <form onSubmit={handleLoginWithPassword} className="w-50 mx-auto pt-5 my-4">
                <h3>Login here..</h3>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onBlur={handlePassword}  type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
           
            <p>Need an account? <Link to='/register'>Register now!!</Link></p>
            <div>
            <button type="submit" className="btn btn-primary me-1">Sign In</button>
            <br />
            <p>------------------------------------</p>
            <br />
            <button onClick={handleGoogleSignIn}  className="btn btn-primary">Sign In with Google</button>
            </div>
            
            </form>
        </div>
    );
};

export default Login;