import React from 'react';

const Stars = ({ rating, careType }) => {
    // rating et le nombre d'étoiles dans de notre home description 

    // Nombre maximum d'étoiles 
    const range = [1, 2, 3, 4, 5]
    // si le careType est égale à redstar alors les étoiles rouges doivent être affichés 
    const redType =
        careType === 'redstar' ? (
            <img className='star-rating' src='../redstar.png' />
        ) : null;
    // si le careType est égale à graystar alors les étoiles grises doivent être affichés
    const grayType =
        careType === 'graystar' ? (
            <img className='star-rating' src='../graystar.png' />

        ) : null;

    return (
        <div>
            {
                // tant que notre nombre d'étoile est supérieure ou  égale a notre tableau range tu fais apparaitre une étoile  
                range.map((rangeElem) =>
                    rating >= rangeElem ? (
                        <span key={rangeElem.toString()}>{redType}</span>
                    ) : null)


            }
            {
                // tu fais apparaitre les étoiles manquantes pour atteindre cinq à rapport à notre rating (nombre d'étoile de notre logement)
                range.map((rangeElem) =>
                    rating < rangeElem ? (
                        <span key={rangeElem.toString()}>{grayType}</span>
                    ) : null)


            }

        </div>
    );
};

export default Stars;