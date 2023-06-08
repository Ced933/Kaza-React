import React from 'react';
import "./Figure.scss";
import data from '../../data/Annonce.json';

const Figure = () => {
    const datatwo = data.map(item => {

        // console.log(datatwo);
        return (
            <figure key={item.id} className='figure-home'>
                <figcaption className='figcaption-bg'>
                    <h4 className='h4-home'>vire mort</h4>
                </figcaption>
            </figure>
        );
    })


};

export default Figure;