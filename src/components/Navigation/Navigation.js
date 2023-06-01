import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.scss";
const Navigation = () => {
    return (
        <nav className='nav-container'>
            <div className='nav'>

                <div className='div-img'>
                    <img className='img-logo' src="./LOGO-RED.svg" alt="" />
                </div>
                <div className='div-nav-aside'>
                    <ul className='nav-ul'>
                        <NavLink to="/">

                            <li className='li-nav'>Accueil</li>
                        </NavLink>
                        <NavLink to="/about">
                            <li className='li-nav'>A Propos</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;