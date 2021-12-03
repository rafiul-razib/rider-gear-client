import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white fixed-top">
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
                    <a className="nav-link" href="/">Login</a>
                    </li>
                   
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navigation;