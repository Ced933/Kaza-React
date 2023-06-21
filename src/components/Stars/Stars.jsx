import React from 'react';
// import Redstar from '../assets/redstar.png';
// import Greystar from '../../../public/graystar.png';

const Stars = ({ scaleValue, careType }) => {
    // scaleValue et le nobre de rating dans de notre home description 
    console.log(scaleValue);

    const range = [1, 2, 3, 4, 5]
    const scaleType =
        careType === 'redstar' ? (
            <img className='star-rating' src='../redstar.png' />
        ) : <img className='star-rating' src='../graystar.png' />;

    return (
        <div>
            {
                range.map((rangeElem) =>
                    scaleValue >= rangeElem ? (
                        <span key={rangeElem.toString()}>{scaleType}</span>
                    ) : null)
            }
        </div>
    );
};

export default Stars;