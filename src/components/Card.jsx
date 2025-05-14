import React from 'react';
import { Link } from 'react-router-dom';
import { FaTags, FaCubes, FaBoxOpen } from 'react-icons/fa';

const Card = ({ singleData }) => {
    const { _id, name, category, price, stock, photo } = singleData;

    return (
        <div className="card bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
            <figure className="h-52 w-full">
                <img
                    src={photo}
                    alt={name}
                    className="h-full w-full object-cover"
                />
            </figure>
            <div className="card-body p-5">
                <h2 className="card-title text-xl font-bold text-green-700 dark:text-green-400">
                    {name}
                </h2>
                <div className="space-y-2 text-gray-700 dark:text-gray-200">
                    <div className="flex items-center gap-2">
                        <FaTags className="text-green-700 dark:text-green-400" />
                        <span className="font-medium">Price:</span>
                        <span>${price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCubes className="text-green-700 dark:text-green-400" />
                        <span className="font-medium">Category:</span>
                        <span>{category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaBoxOpen className="text-green-700 dark:text-green-400" />
                        <span>{stock}</span>
                    </div>
                </div>
                <div className="card-actions mt-4">
                    <Link to={`/details/${_id}`}>
                        <button className="btn bg-green-600 hover:bg-green-800 text-white px-6 py-2 rounded-md font-semibold">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
