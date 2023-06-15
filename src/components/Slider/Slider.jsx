import React from 'react';
import { useState } from 'react';
import './Slider.scss';

const Slider = ({ filterImg }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundSize: "cover",
        backgroundPosition: 'center',
        borderRadius: '10px',
        backgroundImage: `url(${filterImg[currentIndex]})`,
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? filterImg.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);

    };
    const goToNext = () => {
        const isLastSlide = currentIndex === filterImg.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='div-carousel-img'>

            <div style={slideStyles}></div>
            {/* l'index sur lequel je suis + 1 car les index commence par 0 sur la longueur total de l'array  */}
            {
                filterImg.length !== 1 &&
                <div className='block-arrow-notation'>

                    <span className='numerotation' >{currentIndex + 1} /  {filterImg.length} </span>

                    <img onClick={goToPrevious} className='chevronleft' src="../Vectorleft.png" alt="" />




                    <img onClick={goToNext} className='chevronright' src="../Vectorright.png" alt="" />
                </div>
            }




        </div >
    );
};

export default Slider;