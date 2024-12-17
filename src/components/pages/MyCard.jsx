import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCard = ({ d, equipmentData, setEquipmentData }) => {
    console.log(equipmentData);


    const handleDeleteEquipment = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://equi-sports-server-murex.vercel.app/equipmentDelete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            const remainingData = equipmentData.filter(d => _id != d._id)

                            setEquipmentData(remainingData)
                        }
                    })
            }
        });
    }
 
    return (
        <div>
            <div class="bg-white border rounded-lg shadow-lg overflow-hidden">
                <img src={d.photo} alt="Ball Image" class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h5 class="text-xl font-bold mb-2">{d.name}</h5>
                    <div className='flex justify-between items-center text-'>
                        <div>
                            <p class="text-sm text-gray-600">Category: {d.category}</p>
                            <p class="text-sm font-semibold mt-2">Price: ${d.price}</p>
                            <p class="text-sm text-gray-600 mt-1">Rating: {d.rating} Star</p>
                        </div>
                        <div className='text-right'>
                            <p class="text-sm text-gray-600 mt-1">Customization: {d.customization}</p>
                            <p class="text-sm text-gray-600 mt-1">Processing Time: {d.processingTime}</p>
                            <p class="text-sm font-semibold text-green-500 mt-1">Stock: {d.stock}</p>
                        </div>
                    </div>

                    <p class="text-sm text-gray-600 mt-4 text-center">{d.description}</p>
                    <div class="mt-4 flex justify-between">
                        <Link to={`/equipmentUpdate/${d._id}`}>
                        <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Update</button>
                        </Link>
                        <button onClick={() => handleDeleteEquipment(d._id)} class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCard;