import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate } from 'react-router';

const Profile = () => {
        const { user, logOut } = useAuth();

        return (
                user?.email ?
                // user information
                        <div data-aos="zoom-in" className='flex flex-col min-h-screen bg-white xl:my-16 xl:mx-80 shadow-2xl rounded-2xl justify-center items-center'>
                                <div className='flex flex-col justify-center  md:p-14'>
                                        <div className='flex flex-col justify-center'>
                                                <span className="mb-3 text-4xl font-bold">Your Information</span>
                                                <div className="flex flex-col justify-center items-center  pt-4 pb-2">
                                                        <div>

                                                                {user?.photoURL ? <img className='w-full h-full rounded' src={user?.photoURL} /> : <i className="fa-regular fa-user h-full w-full text-gray-800"></i>}

                                                        </div>
                                                </div>
                                                <div className="p-0 flex flex-col gap-5">
                                                        <div className='flex items-center rounded-lg border-2 border-gray-200 p-3'>
                                                                <i className="fa-solid fa-user mx-3"></i>
                                                                <p className='border-none outline-none w-full'>{user?.displayName ? user.displayName : <p>user</p>}</p>
                                                        </div>
                                                        <div className='flex items-center rounded-lg border-2 border-gray-200 p-3'>
                                                                <i className="fa-solid fa-envelope mx-3"></i>
                                                                <p className='border-none outline-none w-full' >{user?.email}</p>
                                                        </div>

                                                </div>
                                                <button className='rounded-full py-2 px-3 font-medium bg-gray-800 text-white hover:text-gray-800 my-2 transition duration-700 ease-in-out hover:bg-cyan-500' onClick={logOut}>
                                                        Sign out
                                                </button>
                                        </div>
                                </div>
                        </div>
                        : <Navigate to="/home" />

        );
};

export default Profile;