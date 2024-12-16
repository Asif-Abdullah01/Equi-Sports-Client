import React, { useContext, useState } from 'react';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const ForgetPass = () => {
    const { forgotPassword } = useContext(AuthContext);

    const location = useLocation();
    const [email, setEmail] = useState(location?.state?.email || '');
    const handleResetForm = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error('Provide a valid email address!');
        } else {
            forgotPassword(email)
                .then(() => {
                    toast.success(`Password reset email sent to: ${email}`);
                    setTimeout(() => {
                        window.open('https://mail.google.com', '_blank'); 
                    }, 3000);
                })
                .catch((err) => {
                    toast.error(`An error occurred: ${err.message}`);
                });
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center w-9/12 mx-auto py-8 bg-lime-300">
                <h2 className='text-2xl font-bold'>Forget Password? No Worries!</h2>

                <form
                    onSubmit={handleResetForm}
                    className="p-4 rounded-xl space-y-4 border-2 border-green-800 w-1/2 my-4"
                >
                    <div className="form-control">
                        <label className="input input-bordered flex items-center gap-2">
                            <MdOutlineDriveFileRenameOutline />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" className="grow" placeholder="Email" required/> 
                            </label>
                    </div>

                    <div className="form-control mt-2">
                        <button type="submit" className="btn btn-success text-white text-lg">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPass;
