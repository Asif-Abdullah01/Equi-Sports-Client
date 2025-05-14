import React from 'react';
import Slider from '../Slider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Card from '../Card';
import SportsCategories from '../SportsCategories';
import WhyChooseUs from '../WhyChooseUs';
import TopBrands from '../TopBrands';
import OurServices from '../OurServices';

const Home = () => {
    const data = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className='w-11/12 mx-auto z-30'>
            <Helmet>
                <title>EquiSports</title>
            </Helmet>

            {/* Slider Section */}
            <Slider />

            {/* Our Products Section */}
            {data.length !== 0 && (
                <div className='text-center py-8'>
                    <h2 className='text-3xl text-green-600 font-semibold mb-2'>Our Products</h2>
                <p className='text-lg font-medium text-green-500'>Best Products for any Sports</p>
                </div>
            )}

            {/* Card Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8'>
                {data.map((singleData) => (
                    <Card key={singleData._id} singleData={singleData} />
                ))}
            </div>

            {/* Other Sections */}
            <SportsCategories />
            <WhyChooseUs />
            <OurServices />
            <TopBrands />
        </div>
    );
};

export default Home;
