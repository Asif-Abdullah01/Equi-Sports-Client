import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './active.css';
import { AuthContext } from './../Provider/AuthProvider';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);

    return (
        <div className="navbar bg-[#8fff93] dark:bg-green-900 text-gray-900 dark:text-white py-4 sticky top-0 z-50 px-2 md:px-8 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 p-2 bg-white dark:bg-gray-800 rounded-box shadow z-[1]">
                        <NavLink className={'mr-4'} to={'/'}>Home</NavLink>
                        <NavLink to={'/allSports'}>All Sports Equipment</NavLink>
                        {
                            user?.email && <>
                                <NavLink to={'/addEquipment'}>Add Equipment</NavLink>
                                <NavLink to={'/myEquipments'}>My Equipment List</NavLink>
                                <NavLink to={'/dashboard/overview'}>📊 Dashboard</NavLink>
                            </>
                        }
                    </ul>
                </div>
                <Link to="/">
                    <h1 className="text-xl md:text-2xl font-bold cursor-pointer transition-transform duration-300 hover:scale-105">EquiSports</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink className={'mr-4'} to={'/'}>Home</NavLink>
                    <NavLink className={'mr-4'} to={'/allSports'}>All Sports Equipment</NavLink>
                    {
                        user?.email && <>
                            <NavLink className={'mr-4'} to={'/addEquipment'}>Add Equipment</NavLink>
                            <NavLink className={'mr-4'} to={'/myEquipments'}>My Equipment List</NavLink>
                            <NavLink className={'mr-4'} to={'/dashboard/overview'}>📊 Dashboard</NavLink>
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-4">
                <ThemeToggler />
                {
                    user?.email ? (
                        <div className='flex justify-center items-center gap-4'>
                            <div className='relative group'>
                                <img className='w-12 h-12 rounded-full object-cover transition-opacity duration-300 group-hover:opacity-0' src={user?.photoURL} alt="User" />
                                <h2 className='text-center absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{user?.displayName}</h2>
                            </div>
                            <button
                                onClick={LogOut}
                                className='py-2 px-3 border-2 border-green-800 dark:border-green-300 rounded-md cursor-pointer text-white bg-green-600 hover:bg-green-800 dark:bg-green-700 dark:hover:bg-green-800 transition-all duration-300 ease-in-out'
                            >
                                LogOut
                            </button>
                        </div>
                    ) : (
                        <div className='flex gap-3'>
                            <Link
                                to="/login"
                                className="py-2 px-3 border-2 border-green-800 dark:border-green-300 rounded-md cursor-pointer text-white bg-green-600 hover:bg-green-800 dark:bg-green-700 dark:hover:bg-green-800 transition-all duration-300 ease-in-out"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="py-2 px-3 border-2 border-green-800 dark:border-green-300 rounded-md cursor-pointer text-white bg-green-600 hover:bg-green-800 dark:bg-green-700 dark:hover:bg-green-800 transition-all duration-300 ease-in-out"
                            >
                                Register
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;
