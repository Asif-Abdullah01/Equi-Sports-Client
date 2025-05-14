import React from 'react';
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData();
    const { name, category, description, price, rating, customization, processingTime, stock, photo } = data;

    return (
        <div className="py-10 bg-green-50">
            <div className="max-w-5xl mx-auto border-2 border-green-700 rounded-2xl shadow-lg bg-white px-4 md:px-6 py-8">
                <div className="flex flex-col items-center space-y-8">

                    {/* Larger Image */}
                    <img
                        className="w-5/6 md:w-3/4 lg:w-2/3 h-auto rounded-lg object-cover shadow-md"
                        src={photo}
                        alt={name}
                    />

                    {/* Text content container matching image width */}
                    <div className="w-5/6 md:w-3/4 lg:w-2/3 text-center space-y-4">

                        <h2 className="text-3xl font-bold text-green-700">{name}</h2>

                        <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-800">
                            <p><span className="font-semibold text-green-700">Category:</span> {category}</p>
                            <p><span className="font-semibold text-green-700">Price:</span> ${price}</p>
                        </div>

                        <p className="text-gray-600 text-base leading-relaxed">
                            {description}
                        </p>

                        <p className="font-medium text-gray-700">
                            <span className="font-semibold text-black">Customer Wants </span> {customization}
                        </p>
                        <p className='text-black'>
                            <span>Needs only</span> {processingTime} {processingTime == 1 ? 'day' : 'days'} to delivery
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 text-base text-gray-700">

                            <p>
                                <span className="font-semibold text-green-700">Status:</span> {stock}
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-2 mt-2">
                            <Rating
                                initialRating={Number(rating)}
                                readonly={true}
                                fullSymbol={<FaStar size={22} className="text-yellow-400" />}
                                emptySymbol={<FaStar size={22} className="text-gray-300" />}
                            />
                            <span className="text-lg font-semibold text-gray-800">{rating}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
