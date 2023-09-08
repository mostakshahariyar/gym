import React from 'react';
import google from "../../img/login/google.svg"
import image from "../../img/login/image.jpg"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {
        const { user, signUpNewUser, signInUsingGoogle } = useAuth();
        console.log(user);
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState();
        const [rePassword, setRePassword] = useState();

        const validateEmail = (email) => {
                return email.match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        };
        const handelName = e => {
                setName(e.target.value);
        }
        const handelEmail = e => {
                setEmail(e.target.value);
        }
        const handelPassword = e => {
                setPassword(e.target.value);
        }
        const RehandelPassword = e => {
                const passwordValue = e.target.value;
                setRePassword(passwordValue);
        };
        const handelSubmit = e => {
                e.preventDefault();
                if (validateEmail(email)) {
                        if (password !== rePassword) {
                                setError("password not same.");
                                return;
                        }
                        else if (password.length < 8) {
                                setError("password must be at least 8 character.");
                                return;
                        }
                        signUpNewUser(name, email, password);
                }
                else {
                        setError("email is not valid");
                }
        }

        return (
                <div className='flex items-center justify-center min-h-screen bg-gray-100'>
                        <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
                                {/* <!-- left side --> */}
                                <div className='flex flex-col justify-center p-8 md:p-14'>
                                        <form onSubmit={handelSubmit} className='flex flex-col justify-center'>
                                                <span className="mb-3 text-4xl font-bold">Create a new account</span>
                                                <span className="font-light text-gray-400 mb-8">
                                                        New account! Please enter your details
                                                </span>
                                                <dir className="p-0 flex flex-col gap-5">
                                                        <div className='flex items-center rounded-lg border-2 border-gray-200 p-3'>
                                                                <i className="fa-solid fa-user mx-3"></i>
                                                                <input onChange={handelName} type="text" placeholder='Enter your name' className='border-none outline-none w-full' required />
                                                        </div>
                                                        <div className='flex items-center rounded-lg border-2 border-gray-200 p-3'>
                                                                <i className="fa-solid fa-envelope mx-3"></i>
                                                                <input onChange={handelEmail} type="email" placeholder='Enter your Email' className='border-none outline-none w-full' required />
                                                        </div>
                                                        <div className='flex items-center rounded-lg border-2 border-gray-200 p-3'>
                                                                <i className="fa-solid fa-key mx-3"></i>
                                                                <input onChange={handelPassword} type="password" placeholder='Enter your Password' className='border-none outline-none w-full' required />
                                                        </div>
                                                        <div className='flex items-center rounded-lg border-2 border-gray-200 p-3'>
                                                                <i className="fa-solid fa-key mx-3"></i>
                                                                <input onChange={RehandelPassword} type="password" placeholder='Re-enter your Password' className='border-none outline-none w-full' required />
                                                        </div>

                                                </dir>
                                                <div className="flex justify-between w-full py-4">
                                                        <div className="mr-24">
                                                                <input type="checkbox" name="ch" id="ch" className="mr-2 cursor-pointer" />
                                                                <span className="text-md">Remember for 30 days</span>
                                                        </div>
                                                </div>
                                                <button
                                                        className="w-full border text-white bg-black border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-white hover:text-black"
                                                >
                                                        Sign up
                                                </button>
                                                <div className='text-red-500 text-xl'>
                                                        {error}
                                                </div>

                                        </form>
                                        <button
                                          onClick={signInUsingGoogle}
                                          className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
                                        >
                                                <img src={google} alt="img" className="w-6 h-6 inline mr-2" />
                                                Sign in with Google
                                        </button>
                                        <div className="text-center text-gray-400">
                                                Have an account?
                                                <Link to="/login" className="font-bold text-black cursor-pointer"> Sign in</Link>
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
                </div>
        );
};

export default Signup;