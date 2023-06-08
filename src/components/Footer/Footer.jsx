import React from 'react';
import "./Footer.scss";
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <img className='logo-footer' src="./LOGO.svg" alt="" />
                <h4 className='footer-h4' >© 2020 Kasa. All rights reserved</h4>
            </div>
        </footer>
    );
};

export default Footer;