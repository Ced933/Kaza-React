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
        const isFirstSlide = currentIndex === filterImg.length - 1;
        const newIndex = isFirstSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <div className='div-carousel-img'>

            <div style={slideStyles}></div>

            {
                currentIndex !== 0 &&
                <img onClick={goToPrevious} className='chevronleft' src="../Vectorleft.png" alt="" />
            }

            {
                currentIndex !== filterImg.length - 1 &&
                <img onClick={goToNext} className='chevronright' src="../Vectorright.png" alt="" />
            }

        </div >
    );
};

export default Slider;