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
                        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            {/* Si on est bien sur ce lien alors la classe nav active est activé  */}
                            <li className='li-nav'>Accueil</li>
                        </NavLink>

                        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li className='li-nav'>A Propos</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;