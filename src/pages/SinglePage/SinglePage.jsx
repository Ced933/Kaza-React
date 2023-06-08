import React, { useState } from 'react';
// import { createElement } from 'react';
import './SinglePage.scss';

import { useParams } from 'react-router-dom';
import data from '../../data/Annonce.json';

const SinglePage = () => {


    const [open, setOpen] = useState(false);
    // Pour ouvrir et fermer le dropdown description 
    const handleDropdown = () => {
        setOpen(!open)
    }
    // Pour ouvrir et fermer le dropdown equipment 
    const [openEquipment, setOpenEquipment] = useState(false);

    const handleDropdownEquipment = () => {
        setOpenEquipment(!openEquipment)
    }

    // on recupère l'id pour pouvoir faire un trie pour selesctionner uniquement une annonce avec le bon id 
    const { id } = useParams();
    console.log(id);
    // on filtre pour récupérer la bonne annonce sur laquelle on a cliqué 
    const filterLocation = data.filter(home => id === home.id)
    console.log(filterLocation);
    // Nous donne le nombre d'etoile rouge 
    const filterLocationRating = filterLocation[0].rating;
    console.log(filterLocationRating);
    // arrStar initialiser a vide 
    const arrStar = [];
    // le nombre d'etoile rouge a pusher dans le tableau arrStar 
    for (let x = 0; x < filterLocationRating; x++) {
        arrStar.push({ star: '../redstar.png' })

    }
    console.log(arrStar);
    // le nombre d'etoile grise a pusher dans le tableau arrStar 
    for (let x = 0; x < (5 - filterLocationRating); x++) {
        arrStar.push({ star: '../graystar.png' })


    }

    return (
        <div>

            {
                filterLocation.map(item => {
                    return (
                        <div key={item.id} className='single-container'>
                            <div className='div-single-img'>
                                <img className='single-img' src={item.cover} alt="" />
                            </div>
                            <div className='home-description'>
                                <div className='left-description'>

                                    <h3 className='h3-left-description'>{item.title}</h3>
                                    <h4 className='h4-left-description'>{item.location}</h4>



                                    <div className='tag-section'>
                                        {


                                            filterLocation[0].tags.map((tag, index) => {


                                                return <span key={index} className='span-tag'>{tag}</span>


                                            })
                                        }
                                    </div>
                                </div>
                                <div className='right-description'>
                                    <div className='host'>
                                        <h4 className='h4-host-name'>{item.host.name} </h4>
                                        <img src={item.host.picture} className='img-host' />
                                    </div>
                                    <div id='star-container' className='star-container'>
                                        {
                                            // Faire apparaître toutes les étoiles 
                                            arrStar.map((star, index) => {
                                                return <img key={index} src={star.star} className='star-rating' />
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                            <div className='dropdown-container'>
                                <div className='drop-description'>
                                    <div className='drop-container-span-img'>
                                        <span className='span-drop-description'>Description</span>
                                        <img onClick={handleDropdown} className='img-clapet' src="../fetch.svg" alt="" />

                                    </div>

                                    {
                                        open &&
                                        <div className='description'>
                                            <p className='p-description'>{item.description}</p>
                                        </div>
                                    }


                                </div>
                                <div className='drop-description-equipment'>
                                    <div className='drop-container-span-img'>
                                        <span className='span-drop-description'>Equipement</span>
                                        <img onClick={handleDropdownEquipment} className='img-clapet' src="../fetch.svg" alt="" />

                                    </div>

                                    {
                                        openEquipment &&
                                        <ul className='description-equipment'>

                                            {

                                                filterLocation[0].equipments.map((equipment, index) => {

                                                    return <li className='li-equipment' key={index}>{equipment}</li>
                                                })
                                            }

                                        </ul>
                                    }


                                </div>


                            </div>
                        </div>
                    )

                })
            }

        </div>
    );
};

export default SinglePage;