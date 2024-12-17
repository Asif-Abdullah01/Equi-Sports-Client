import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const UpdateEquipment = () => {
    const {user} = useContext(AuthContext)
    const equipment = useLoaderData();
    const { _id, name, category, description, price, rating, customization, processingTime, stock, photo, email, userName } = equipment;


    const handleUpdateEquipment = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stock = form.stock.value;
        const photo = form.photo.value;
        const email = user.email;
        const userName = user.displayName;

        const upDatedEquipment = { name, category, description, price, rating, customization, processingTime, stock, photo, email, userName }

        console.log(upDatedEquipment);


        fetch(`http://localhost:5000/equipmentUpdate/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upDatedEquipment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // form.reset();

                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }




    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Update an equipment</h2>
            <form onSubmit={handleUpdateEquipment}>
                {/* form name and quantity row */}
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label ">
                            <span className="label-text">Category Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' defaultValue={category} placeholder="Cricket/Football" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                {/* form supplier row */}
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='description' defaultValue={description} placeholder="Details about the product" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label ">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' defaultValue={price} placeholder="$20" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form Category and details row */}
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='rating' defaultValue={rating} placeholder="3/4/5" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label ">
                            <span className="label-text">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='customization' defaultValue={customization} placeholder="bat with extra grip, hit paper etc" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form Category and details row */}
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='processingTime' defaultValue={processingTime} placeholder="delivery time" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label ">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='stock' defaultValue={stock} placeholder="available product quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                {/*form photo Url single row */}

                <div className='mb-6'>
                    <div className="form-control w-full">
                        <label className="label ">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* email and pass row */}
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" value={user.email} className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label ">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" value={user.displayName} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <input className='btn btn-block bg-green-500 text-lg' type="submit" value="Update Equipment" />

            </form>
        </div>
    );
};

export default UpdateEquipment;