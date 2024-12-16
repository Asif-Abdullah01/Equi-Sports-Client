import React, { useContext, useState } from 'react';
import { FaEyeSlash, FaGoogle, FaRegEye } from 'react-icons/fa';
import { MdInsertPhoto, MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const {userRegister,googleLogin,setUser,error, setError,manageProfile} = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleRegisterForm = (e) => {
        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        // const terms = e.target.terms.checked;

        // console.log(name,email,photoURL,password,terms);


        if (!/^.{6,}$/.test(password)) {
            toast.error('Password length must be at least 6 character.')
            return;
        }

        if (!/[A-Z]/.test(password)) {
            toast.error('Password must have an Uppercase letter in the password')
            return;
        }

        
        if (!/[a-z]/.test(password)) {
            toast.error('Password must have a Lowercase letter in the password')
            return;
        }




        userRegister(email,password)
        .then(res => {
            manageProfile(name,photoURL)
            toast.success('Successfully registered')
            navigate('/')
        })
        .catch(err => {
            toast.error(`error found! ${err.message}`)
        })
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => {
            toast.success('You have successfully logged in')
            navigate(location?.state?.from? location?.state?.from : '/')
        })
        .catch(err =>{
            toast.error(`An error occurred: ${err.message}`)
        })
    }


    return (
        
        <div className='flex flex-col items-center justify-center p-4 bg-lime-500'>

            <div className="hero bg-base-200 min-h-screen rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse m-0 px-0">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl md:text-5xl font-bold text-green-700">Register now!</h1>
                        <p className="w-full text-sm md:text-base max-w-full py-6 text-green-800">
                        Create an account to begin your journey toward personalized career counseling. By registering, you'll gain access to expert advice, career resources, and a plan designed to help you make informed decisions about your professional future.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegisterForm} className="card-body">
                            <div className="form-control">
                                <label class="input input-bordered flex items-center gap-2">
                                    <MdOutlineDriveFileRenameOutline />
                                    <input name='name' type="text" class="grow" placeholder="Name" required/>
                                </label>
                            </div>



                            <div className="form-control">
                                <label class="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        class="h-4 w-4 opacity-70">
                                        <path
                                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path
                                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input name='email' type="text" class="grow" placeholder="Email" required/>
                                </label>
                            </div>


                            <div className="form-control">
                                <label class="input input-bordered flex items-center gap-2">
                                <MdInsertPhoto />
                                    <input name='photoURL' type="text" class="grow" placeholder="photoURL" required/>
                                </label>
                            </div>

                            <div className="form-control ">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <input name='password' type={showPassword ? 'text' : 'password'} placeholder="password" required />
                                    <button type='button' onClick={() => setShowPassword(!showPassword)}>
                                        {
                                           !showPassword ? <FaRegEye className='ml-10' /> : <FaEyeSlash className='ml-10'></FaEyeSlash>
                                        }
                                    </button>
                                </label>

                            </div>

                            {/* <div className="form-control">
                                <label className="cursor-pointer label justify-start">
                                    <input name='terms' type="checkbox" className="checkbox mr-2" />
                                    <span className="label-text">I accept the terms & conditions</span>
                                </label>
                            </div> */}
                            <div className="form-control mt-2">
                                <button type='submit' className="btn btn-success text-white text-lg">Register</button>
                            </div>

                            <div onClick={handleGoogleLogin} className='cursor-pointer flex justify-center items-center gap-2 p-3 rounded-lg font-bold bg-blue-200'>
                                <FaGoogle className='text-blue-600' />
                                <h2>Login With Google</h2>
                            </div>

                            <h4 className='py-2 md:py-4 text-base text-center'>Already Have an account? Please <Link className='text-green-600 hover:underline' to={'/login'}>Login</Link></h4>
                        </form>


                    </div>
                </div>
            </div>



        </div>
    );
};

export default Register;