import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const ServiceCards = () => {
    const data = useLoaderData()

    return (
        <>
            <div className='text-center py-4'>
                <h2 className='text-3xl text-green-600 font-bold'>Our Service</h2>
                <p className='text-green-700 text-xl'>Guiding Your Path to Success</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8'>
                {
                    data.map(singleData => <Card singleData={singleData}></Card>)
                }
            </div>
        </>
    );
};

export default ServiceCards;