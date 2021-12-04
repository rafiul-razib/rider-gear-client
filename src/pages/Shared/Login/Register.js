import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Register = () => {

    const{user, register, setIsLoading} = useAuth();

    const[name, setName] = useState("");
    const[email, setEmail]= useState("");
    const[password, setPassWord]= useState("");

    const handleName = e =>{
        setName(e.target.value)
    }
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassWord(e.target.value)
    }

    const handleRegistration = e =>{
        register(email, password, name)
    
        e.preventDefault();
    }


    return (
        <>
        <Navigation></Navigation>
        <div className="container-fluid bg-light">
             <form onSubmit={handleRegistration} className="w-50 mx-auto pt-5 my-4" >
                 <h3>Register here..</h3>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input onBlur={handleName} type="text" className="form-control"/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
           
            <p>Already signed up? <Link to='/login'>Login here!!</Link></p>
            <div className="d-flex">
            <button type="submit" className="btn btn-primary me-2">Sign up</button>
            </div>
            {
                user.email && <span className="text-success py-3">Registration successful!!</span>
            }
            </form>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Register;