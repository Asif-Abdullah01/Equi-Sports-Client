import React from 'react';
import Slider from '../Slider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Card from '../Card';

const Home = () => {

    const data = useLoaderData()
    const navigate = useNavigate();

    return (
        <div className='w-11/12 mx-auto z-30'>
            <Helmet>
                <title>EquiSports</title>
            </Helmet>
            <Slider></Slider>

            {/* card section start */}

            {
                data.length != 0 && <div className='text-center py-4'>
                    <h2 className='text-3xl text-green-600 font-bold'>Our Products</h2>
                    <p className='text-green-700 text-xl'>Best Products for any Sports</p>
                </div>
            }

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8'>
                {
                    data.map(singleData => <Card singleData={singleData}></Card>)
                }
            </div>

            {/* card section end */}


        </div>
    );
};

export default Home;