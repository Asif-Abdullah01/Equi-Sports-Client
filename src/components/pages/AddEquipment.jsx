import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
const AddEquipment = () => {

    const { user} = useContext(AuthContext)
    console.log(user);

    const handleAddEquipment = e => {
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

        const newEquipment = { name, category, description, price, rating, customization, processingTime , stock, photo ,email,userName}

        console.log(newEquipment);


        fetch('http://localhost:5000/equipments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // form.reset();

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div>

            <Helmet>
                <title>EquiSports | Add Equipment</title>
            </Helmet>

            <div className='bg-[#F4F3F0] p-24'>
                <h2 className='text-3xl font-extrabold'>Add an equipment</h2>
                <form onSubmit={handleAddEquipment}>
                    {/* form name and quantity row */}
                    <div className='md:flex mb-6'>
                        <div className="form-control md:w-1/2">
                            <label className="label ">
                                <span className="label-text">Item Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='name' placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label ">
                                <span className="label-text">Category Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='category' placeholder="Cricket/Football" className="input input-bordered w-full" />
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
                                <input type="text" name='description' placeholder="Details about the product" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label ">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='price' placeholder="$20" className="input input-bordered w-full" />
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
                                <input type="text" name='rating' placeholder="3/4/5" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label ">
                                <span className="label-text">Customization</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='customization' placeholder="bat with extra grip, hit paper etc" className="input input-bordered w-full" />
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
                                <input type="text" name='processingTime' placeholder="delivery time" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label ">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='stock' placeholder="available product quantity" className="input input-bordered w-full" />
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
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full" />
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
                                <input type="text" value={user.email}  className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label ">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" value={user.displayName}  className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    <input className='btn btn-block bg-green-500 text-lg' type="submit" value="Add Equipment" />

                </form>
            </div>
        </div>
    );
};

export default AddEquipment;