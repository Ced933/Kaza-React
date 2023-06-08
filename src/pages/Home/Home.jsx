import React from 'react';
import data from '../../data/Annonce.json';

import './Home.scss';
import { Link } from 'react-router-dom';


const Home = () => {

    const datatwo = data.map(item => item);
    // console.log(datatwo)
    return (
        <div>

            <div className='home-box'>

                <div className='bg-img-home'>
                    <div className='bg-h1'>

                        <h1 className='h1-home'>Chez vous, partout et ailleurs</h1>
                    </div>
                </div>


                <div className='figure-container'>
                    <div className='figure-box'>

                        {
                            datatwo.map((item) => {

                                return (
                                    <Link key={item.id} item={item} to={`singlepage/${item.id}`}>
                                        <figure className='figure-home'>
                                            <img src={item.cover} className='img-figure' alt="" />
                                            <figcaption className='figcaption-bg'>
                                                <h4 className='h4-home'>{item.title}</h4>
                                            </figcaption>
                                        </figure>

                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;