import React from 'react';
import { NavLink } from 'react-router-dom'
import { NavbarStyle } from './style'

const Navbar = () => {
    return (
        <>
            <NavbarStyle className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to='/' className="navbar-brand" >
                    Navbar
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a href='#' className="nav-link">Work</a>
                        </li>
                        <li className="nav-item">
                            <a href='#' className="nav-link">Portofolio</a>
                        </li>
                        <li className="nav-item">
                            <a href='#' className="nav-link">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a href='#' className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className="nav-link">Contact</NavLink>
                        </li>

                    </ul>
                </div>
            </NavbarStyle>
        </>
    );
};

export default Navbar;