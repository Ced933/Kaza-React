import React, { useState } from 'react';
import './Accommodation.scss';
import ErrorPage404 from '../ErrorPage404/ErrorPage404';
import { useParams } from 'react-router-dom';
import data from '../../data/Annonce.json';
import Slider from '../../components/Slider/Slider';
import Tags from '../../components/Tags/Tags';
import Stars from '../../components/Stars/Stars';

const Accommodation = () => {



    // On récupère l'id pour pouvoir faire un trie pour sélectionner uniquement une annonce avec le bon id 
    const { id } = useParams();
    // On find pour récupérer la bonne annonce sur laquelle on a cliqué sans utiliser map, car ce n'est pas un tableau 
    // Je dois définir directement ma condition dans mon useStates pour eviter une boucle infini 
    const [filterLocation, setFilterLocation] = useState(data.find(home => id === home.id));

    // Initialisation des variables dropdown 
    const [open, setOpen] = useState(false);
    const [openEquipment, setOpenEquipment] = useState(false);

    // Pour ouvrir et fermer le dropdown description 
    const handleDropdown = () => {
        setOpen(!open)
    }
    // Pour ouvrir et fermer le dropdown equipment 

    const handleDropdownEquipment = () => {
        setOpenEquipment(!openEquipment)
    }

    return (

        <div>
            {
                // si filterLocation est undefined alors on affiche la page 404 sinon on affiche notre home
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
                            {/* Tag container  */}
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
                            {/* Star container  */}
                            <div id='star-container' className='star-container'>
                                {
                                    <div className='start-box'>
                                        <Stars rating={filterLocation.rating} careType="redstar" />
                                        <Stars rating={filterLocation.rating} careType="graystar" />
                                    </div>

                                }
                            </div>
                        </div>

                    </div>
                    <div className='dropdown-container-description'>
                        <div className='drop-description'>
                            <div className='drop-container-span-img'>
                                <span className='span-drop-description'>Description</span>
                                <img onClick={handleDropdown} className='img-clapet' src="../fetch.svg" style={{ transform: `rotate(${open ? 180 : 0}deg)`, transition: "all 0.25s", }} alt="clapet" />
                            </div>
                            {
                                //    si open = true alors tu m'affiches cette div 
                                open &&
                                <div className='description'>
                                    <p className='p-description'>{filterLocation.description}</p>
                                </div>
                            }


                        </div>
                        <div className='drop-description-equipment'>
                            <div className='drop-container-span-img'>
                                <span className='span-drop-description'>Equipement</span>
                                <img onClick={handleDropdownEquipment} className='img-clapet' src="../fetch.svg" style={{ transform: `rotate(${openEquipment ? 180 : 0}deg)`, transition: "all 0.25s", }} alt="clapet" />

                            </div>

                            {
                                //    si openEquipement = true alors tu m'affiches cette div 
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