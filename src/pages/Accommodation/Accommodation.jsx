import React, { useState, useEffect } from 'react';
// import { createElement } from 'react';
import './Accommodation.scss';
import ErrorPage404 from '../ErrorPage404/ErrorPage404';
import { useParams } from 'react-router-dom';
import data from '../../data/Annonce.json';
import Slider from '../../components/Slider/Slider';
import Tags from '../../components/Tags/Tags';
import Stars from '../../components/Stars/Stars';

const Accommodation = () => {


    const [open, setOpen] = useState(false);
    const { id } = useParams();
    // je dois definir directement dans mon use state ma conditio pour evité une boucle infini 
    const [filterLocation, setFilterLocation] = useState(data.find(home => id === home.id));
    // const [filterLocationRating, setFilterLocationRating] = useState();
    const arrStar = useState([]);
    // const filterLocationRating = filterLocation.rating;
    // const [arrStar, setArrStar] = useState([]);
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


    // on filtre pour récupérer la bonne annonce sur laquelle on a cliqué 
    // setFilterLocation(data.find(home => id === home.id));




    // if (filterLocation === undefined) {
    //     // navigate("/404");
    //     console.log('cest bien undefined');
    //     return navigate("/404");
    // }
    // else {


    //     console.log(filterLocation);
    // }


    // // Nous donne le nombre d'etoile rouge 


    // setFilterLocationRating(filterLocation.rating);
    // // arrStar initialiser a vide 
    // console.log(filterLocationRating);


    // le nombre d'etoile rouge a pusher dans le tableau arrStar 
    // for (let x = 0; x < filterLocationRating; x++) {
    //     arrStar.push({ star: '../redstar.png' })

    // }

    // le nombre d'etoile grise a pusher dans le tableau arrStar 
    // for (let x = 0; x < (5 - filterLocationRating); x++) {
    //     arrStar.push({ star: '../graystar.png' })
    // }





    return (

        <div>
            {
                filterLocation === undefined ? (
                    <ErrorPage404 />

                ) : <div className='single-container'>
                    <div className="container-slider">
                        <Slider filterImg={filterLocation.pictures} />
                    </div>

                    <div className='home-description'>
                        <div className='left-description'>

                            <h3 className='h3-left-description'>{filterLocation.title}</h3>
                            <h4 className='h4-left-description'>{filterLocation.location}</h4>



                            <div className='tag-section'>
                                {
                                    filterLocation.tags.map((tag, index) => {
                                        return <Tags key={index} tag={tag} />
                                    })
                                }
                            </div>
                        </div>
                        <div className='right-description'>
                            <div className='host'>
                                <h4 className='h4-host-name'>{filterLocation.host.name} </h4>
                                <img src={filterLocation.host.picture} className='img-host' alt={`picture of ${filterLocation.host.name}`} />
                            </div>
                            <div id='star-container' className='star-container'>
                                {
                                    // Faire apparaître toutes les étoiles 
                                    // arrStar.map((star, index) => {
                                    //     return <img key={index} src={star.star} className='star-rating' />
                                    // })
                                    <Stars scaleValue={filterLocation.rating} careType="redstar" />
                                }
                            </div>
                        </div>

                    </div>
                    <div className='dropdown-container-description'>
                        <div className='drop-description'>
                            <div className='drop-container-span-img'>
                                <span className='span-drop-description'>Description</span>
                                <img onClick={handleDropdown} className='img-clapet' src="../fetch.svg" style={{ transform: `rotate(${open ? 180 : 0}deg)`, transition: "all 0.25s", }} alt="" />

                            </div>

                            {
                                open &&
                                <div className='description'>
                                    <p className='p-description'>{filterLocation.description}</p>
                                </div>
                            }


                        </div>
                        <div className='drop-description-equipment'>
                            <div className='drop-container-span-img'>
                                <span className='span-drop-description'>Equipement</span>
                                <img onClick={handleDropdownEquipment} className='img-clapet' src="../fetch.svg" style={{ transform: `rotate(${openEquipment ? 180 : 0}deg)`, transition: "all 0.25s", }} alt="" />

                            </div>

                            {
                                openEquipment &&
                                <ul className='description-equipment'>

                                    {

                                        filterLocation.equipments.map((equipment, index) => {

                                            return <li className='li-equipment' key={index}>{equipment}</li>
                                        })
                                    }

                                </ul>
                            }


                        </div>


                    </div>
                </div>


            }
        </div>
    );
};

export default Accommodation;