import React from 'react';
import { Link } from 'react-router-dom';

const AllEquipmentTable = ({ idx, equipment }) => {
  const { _id, name, category, price, stock, photo } = equipment;

  return (
    <tr className="hover:bg-green-50 transition duration-200">
      <td className="px-4 py-3 font-semibold text-center">{idx + 1}</td>
      <td className="px-4 py-3 text-center">
        <img className="w-16 h-14 object-cover mx-auto rounded-md border" src={photo} alt={name} />
      </td>
      <td className="px-4 py-3 text-center font-medium text-gray-800">{name}</td>
      <td className="px-4 py-3 text-center text-green-700 font-semibold">{category}</td>
      <td className="px-4 py-3 text-center text-green-800">${price}</td>
      <td className="px-4 py-3 text-center font-semibold">{stock}</td>
      <td className="px-4 py-3 text-center">
        <Link to={`/details/${_id}`}>
          <button className="px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-md shadow">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllEquipmentTable;
