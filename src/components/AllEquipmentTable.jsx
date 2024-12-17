import React from 'react';
import { Link } from 'react-router-dom';

const AllEquipmentTable = ({idx,equipment,allEquipments,setAllEquipments}) => {
    const {_id, name ,category, price,stock,photo} = equipment;

    return (
        <>
        <tr>
          <td>{idx+1}</td>
          <td><img className='w-14 h-12 object-cover mx-auto rounded-md' src={photo} alt="" /></td>
          <td>{name}</td>
          <td>{category}</td>
          <td>$ {price}</td>
          <td>{stock}</td>
          <td>
          <button className='btn btn-success'>
                <Link className='text-white' to={`/details/${_id}`}>View Details</Link>
            </button>
          </td>
        </tr>
      </>
    );
};

export default AllEquipmentTable;