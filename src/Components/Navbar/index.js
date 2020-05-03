import React from 'react';
import { NavLink } from 'react-router-dom'
import { NavbarStyle, NavbarLink, NavbarNormalLink } from './style'

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
                            <NavbarNormalLink href='#' className="nav-link">Work</NavbarNormalLink>
                        </li>
                        <li className="nav-item">
                            <NavbarNormalLink href='#' className="nav-link">Portofolio</NavbarNormalLink>
                        </li>
                        <li className="nav-item">
                            <NavbarNormalLink href='#' className="nav-link">Resume</NavbarNormalLink>
                        </li>
                        <li className="nav-item">
                            <NavbarNormalLink href='#' className="nav-link">About</NavbarNormalLink>
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