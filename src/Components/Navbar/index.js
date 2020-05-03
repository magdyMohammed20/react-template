import React from 'react';
import { NavLink } from 'react-router-dom'
import { NavbarStyle, NavbarLink } from './style'

const Navbar = () => {
    return (
        <>
            <NavbarStyle className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to='/' className="navbar-brand" >
                    Navbar
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavbarLink to='/' className="nav-link">
                                Home
                            </NavbarLink>
                        </li>
                        <li className="nav-item">
                            <NavbarLink to='/work' className="nav-link">Work</NavbarLink>
                        </li>
                        <li className="nav-item">
                            <NavbarLink to='/portofolio' className="nav-link">Portofolio</NavbarLink>
                        </li>
                        <li className="nav-item">
                            <NavbarLink to='/resume' className="nav-link">Resume</NavbarLink>
                        </li>
                        <li className="nav-item">
                            <NavbarLink to='/about' className="nav-link">About</NavbarLink>
                        </li>
                        <li className="nav-item">
                            <NavbarLink to='/contact' className="nav-link">Contact</NavbarLink>
                        </li>

                    </ul>
                </div>
            </NavbarStyle>
        </>
    );
};

export default Navbar;