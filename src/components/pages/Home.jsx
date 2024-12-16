import React from 'react';
import Slider from '../Slider';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='w-11/12 mx-auto z-30'>
            <Helmet>
                <title>EquiSports</title>
            </Helmet>
            <Slider></Slider>
            

        </div>
    );
};

export default Home;