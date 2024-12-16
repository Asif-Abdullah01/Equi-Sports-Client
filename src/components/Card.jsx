import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ singleData }) => {
    const {id,image,serviceName,category,pricing,counselor} = singleData;
    return (
        <div className="card bg-base-100 shadow-xl hover:scale-105 transition-all">
            <figure>
                <img className="w-full h-52 object-cover"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {serviceName}
                </h2>
                <p>Cost: {pricing}</p>
                <p>Type: {category}</p>
                <p>Counselor: {counselor}</p>
                {/* <p title={description}>{description.slice(0, 100)}...</p> */}
                <div className="card-actions">
                    <Link to={`/details/${id}`}>
                        <button className="btn bg-green-600 hover:bg-green-800 p-4 text-white font-bold">Learn more</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;