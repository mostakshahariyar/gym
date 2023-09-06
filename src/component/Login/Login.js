import React from 'react';
import image from "../../img/login/image.jpg"
import google from "../../img/login/google.svg"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
        const { user, signInUsingGoogle, signInUser } = useAuth();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const handelEmail = e => {
                setEmail(e.target.value);
        }
        const handelPassword = e => {
                setPassword(e.target.value);
        }
        const handelSubmit = e => {
                e.preventDefault();
                signInUser(email, password)

        }
        return (
                <div className='flex items-center justify-center min-h-screen bg-gray-100'>
                        <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
                                {/* <!-- left side --> */}
                                <div className='flex flex-col justify-center p-8 md:p-14'>
                                        <form onSubmit={handelSubmit} className='flex flex-col justify-center'>
                                                <span className="mb-3 text-4xl font-bold">Welcome back</span>
                                                <span className="font-light text-gray-400 mb-8">
                                                        Welcome back! Please enter your details
                                                </span>
                                                <dir className="p-0 flex flex-col gap-5">
                                                        <div className='flex items-center rounded-lg border-2 border-gray-200 p-3'>
                                                                <i className="fa-solid fa-envelope mx-3"></i>
                                                                <input onChange={handelEmail} type="email" placeholder='Enter your Email' className='border-none outline-none w-full' required />
                                                        </div>
                                                        <div className='flex items-center rounded-lg border-2 border-gray-200 p-3'>
                                                                <i className="fa-solid fa-key mx-3"></i>
                                                                <input onChange={handelPassword} type="password" placeholder='Enter your Password' className='border-none outline-none w-full' required />
                                                        </div>

                                                </dir>
                                                <div className="flex justify-between w-full py-4">
                                                        <div className="mr-24">
                                                                <input type="checkbox" name="ch" id="ch" className="mr-2 cursor-pointer" />
                                                                <span className="text-md">Remember for 30 days</span>
                                                        </div>
                                                        <span className="font-bold text-md cursor-pointer">Forgot password</span>
                                                </div>
                                                <button
                                                        className="w-full border text-white bg-black border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-white hover:text-black"
                                                >
                                                        Sign in
                                                </button>
                                        </form>
                                        <button
                                                onClick={signInUsingGoogle}
                                                className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
                                        >
                                                <img src={google} alt="img" className="w-6 h-6 inline mr-2" />
                                                Sign in with Google
                                        </button>
                                        <div className="text-center text-gray-400">
                                                Dont'have an account?
                                                <Link to="/signup" className="font-bold text-black cursor-pointer"> Sign up for free</Link>
                                        </div>
                                </div>
                                {/* right side */}
                                <div className="relative">
                                        <img
                                                src={image}
                                                alt="img"
                                                className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
                                        />


                                </div>

                        </div>
                </div >
        );
};

export default Login;