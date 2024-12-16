import React from 'react';
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData();
    const {name, category, description, price, rating, customization, processingTime, stock, photo} = data;

    return (
        <div>
            <div className='flex flex-col justify-center items-center p-8 rounded-sm bg-green-300 w-9/12 mx-auto space-y-4'>

                <img className='w-[70%] h-48 md:w-[80%] md:h-96 lg:h-auto rounded-t-xl' src={photo} alt="" />
                <h2 className='md:text-2xl font-bold'>{name}</h2>

                <div className='flex gap-4 items-center'>
                    <p className='md:text-xl'>Consultancy Type: {category}</p>
                    <p className='md:text-xl px-4 py-2 bg-lime-300 rounded-xl'>Cost: {price}</p>
                </div>

                <p className='text-center w-full lg:w-10/12'>{description}</p>
                <p className='font-bold text-center'>Customization: {customization}</p>
                <div className='flex gap-2'>
                <p className='font-bold border-2 p-2 border-green-900'>Delivery Time: {processingTime}</p>

                <p className='font-bold border-2 p-2 border-green-900'>Stock Status: {stock}</p>
                </div>

                <div className="flex items-center">
                    <Rating
                        initialRating={Number(rating)}
                        readonly={true}
                        fullSymbol={<FaStar size={20} md:size={24} className='text-yellow-300'></FaStar>}
                        emptySymbol={<FaStar size={20} md:size={24} color="gray"></FaStar>}
                    ></Rating>
                    <div className="ml-2">
                        <p className="px-4 py-1 md:py-1.5 bg-lime-300 rounded-3xl">{rating}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ViewDetails;