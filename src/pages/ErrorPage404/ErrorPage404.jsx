import React from 'react';
import { Link } from 'react-router-dom';
import "./ErrorPage404.scss";

const ErrorPage404 = () => {
    return (
        <div>
            <div className='div-container-error'>
                <div className='error-block'>
                    <h1 className='h1-error'>404</h1>
                    <p className='p-error'>Oups! La page que vous demandez n'existe pas.</p>
                    <div className='link-back'>

                        <Link to="/">
                            <p className='p-error-back-home'>Retourner sur la page d'accueil</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage404;