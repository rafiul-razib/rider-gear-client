import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const{user, logOut} = useAuth();
    const history = useHistory()

    const handleSignOut = () =>{
        logOut(history)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">RiderGear</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/explore">Explore</Link>
                    </li>
                    <li className="nav-item">
                    {
                        user.email &&
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    }
                    </li>
                    <li className="nav-item">
                    {
                        !user.email?
                        <Link className="nav-link" to="/login">Login</Link>
                        :
                        <button onClick={handleSignOut} className="btn btn-info">Log Out</button>
                    }
                    </li>
                    <span className="navbar-text ps-3 text-white">
                    {
                        user.displayName && <span>Signed in as {user.displayName}</span>
                    }
                    </span>
                   
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navigation;