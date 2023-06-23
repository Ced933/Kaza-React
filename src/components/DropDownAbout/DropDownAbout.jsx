import React from 'react';
import './DropDownAbout.scss';
import { useState } from 'react';
// {} destructuring pour avoir accès directement à l'objet (props)
const DropDownAbout = ({ about, index }) => {

    const [open, setOpen] = useState(false);
    // Pour ouvrir et fermer le dropdown description 
    const openDropdown = () => {
        setOpen(!open)
    }
    return (
        <div key={index} className='drop-description'>
            <div className='drop-container-span-img'>
                <span className='span-drop-description'>{about.categorie}</span>
                <img onClick={() => openDropdown(index)} className='img-clapet' src="../fetch.svg" alt="" style={{ transform: `rotate(${open ? 180 : 0}deg)`, transition: "all 0.25s", }} />
            </div>
            {
                open &&
                <div className='description'>
                    <p className='p-description'>
                        {about.description}
                    </p>
                </div>
            }
        </div>
    );
};

export default DropDownAbout;