import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { FaEyeSlash, FaGoogle, FaRegEye } from 'react-icons/fa';
import auth from '../firebase.config';
import { toast } from 'react-toastify';


const Login = () => {
    const location = useLocation();
    console.log(location);
    const emailRef = useRef()

    const {userLogin,googleLogin,setUser,forgotPassword} = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()

    const handleLoginForm = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        // const terms = e.target.terms.checked;

        // console.log(email,password,terms);
        userLogin(email,password)
        .then(res => {
            toast.success('You have successfully logged in')
            navigate(location?.state?.from? location?.state?.from : '/')
        })
        .catch(err => {
            toast.error(`An error occurred: ${err.message}`)
        })
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => {
            toast.success('You have successfully logged in')
            navigate(location?.state?.from? location?.state?.from : '/')
        })
        .catch(err =>{
            toast.error(`An error occured: ${err.message}`)
        })

    }

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        // console.log(email);

        navigate('/forgetPass', { state: { email } });
    }

    return (

        <div className='flex flex-col items-center justify-center p-8 bg-lime-500'>

            <div className="hero bg-base-200 min-h-screen rounded-lg">
                <div className="hero-content w-80 md:w-full flex-col lg:flex-row-reverse">
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl md:text-5xl font-bold text-green-700">Login now!</h1>
                        <p className="w-full max-w-full py-6 text-green-800">
                        Please enter your credentials to access your personalized career counseling dashboard. By logging in, you'll be able to explore tailored career guidance, track your progress, and access resources that can help you achieve your career goals.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLoginForm} className="card-body">
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
                                    <input ref={emailRef}  name='email' type="text" class="grow" placeholder="Email" />
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
                                    <button onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            !showPassword ? <FaRegEye className='-ml-10 md:ml-10' /> : <FaEyeSlash className='-ml-10 md:ml-10'></FaEyeSlash>
                                        }
                                    </button>
                                </label>
                                <label onClick={handleForgotPassword} className="label mt-2">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>

                            {/* <div className="form-control">
                                <label className="cursor-pointer label justify-start">
                                    <input name='terms' type="checkbox" className="checkbox mr-2" />
                                    <span className="label-text">I accept the terms & conditions</span>
                                </label>
                            </div> */}
                            <div className="form-control mt-2">
                                <button className="btn btn-success text-white text-lg">Login</button>
                            </div>

                            <div onClick={handleGoogleLogin} className='cursor-pointer flex justify-center items-center gap-2 p-3 rounded-lg font-bold bg-blue-200'>
                            <FaGoogle className='text-blue-600' />
                                <h2>Login With Google</h2>
                            </div>

                            <h4 className='py-2 md:py-4 text-base text-center'>New to The Website? Please <Link className='text-green-600 hover:underline' to={'/register'}>Register</Link></h4>
                        </form>


                    </div>
                </div>
            </div>



        </div>

    );
};

export default Login;