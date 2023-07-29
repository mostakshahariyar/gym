import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import img1 from "../../img/footer/footer1.jpg"
import img2 from "../../img/footer/footer2.jpg"
import img3 from "../../img/footer/footer3.jpg"
const Footer = () => {
        return (
                <div className='bg-gray-300'>
                        <hr className='border-t-4 border-gray-800 rounded' />
                        <div className='my-8 md:mx-28 mx-[5%] mb-8 '>
                                <div className='grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                        <div>
                                                <h1 className='text-3xl font-semibold'>About</h1>
                                                <p className='my-2 flex text-justify'>
                                                        A gym is a fitness facility equipped with various exercise machines and equipment to help individuals improve their physical health and well-being. It provides a space for people to engage in various workouts, strength training, cardio exercises, and group fitness classes.
                                                </p>
                                                {/* add social line  */}
                                                <div className='flex gap-4'>
                                                        <Link to='https://www.facebook.com/mostak.shahariyar.0823'>
                                                                <BsFacebook className='text-2xl hover:text-blue-800' />
                                                        </Link>
                                                        <Link to="https://www.instagram.com/mostakshahariyar18/">
                                                                <BiLogoInstagramAlt className='text-2xl hover:text-blue-800' />
                                                        </Link>
                                                        <Link to='https://mail.google.com/mail/u/0/#inbox'>
                                                                <BiLogoGmail className='text-2xl hover:text-blue-800' />
                                                        </Link>
                                                        <Link to="https://www.linkedin.com/in/mostak0805/">
                                                                <AiFillLinkedin className='text-2xl hover:text-blue-800' />
                                                        </Link>
                                                </div>


                                        </div>
                                        <div className='md:mx-auto'>
                                                <h1 className='text-3xl font-semibold'>Contact</h1>
                                                <p className='my-2 flex text-justify'>
                                                        Uttara10, Road-10, House-10,<br />
                                                        Dhaka Bangladesh
                                                </p>
                                                <p>123 5221 1552</p>
                                                <p>123 5111 2525</p>
                                                <p className='text-gray-500 cursor-pointer'>info@gym.com</p>
                                        </div>
                                        <div>
                                                <h1 className='text-3xl font-semibold mb-1'>Blogs</h1>
                                                <div className='grid grid-row-3 gap-2'>
                                                       
                                                        <div className='flex gap-10 items-center'>
                                                                <div className='w-[50%]'>
                                                                        <img src={img2} alt="" />
                                                                </div>
                                                                <div>
                                                                        <p className='text-xl font-semibold text-justify'>Iron Mindset</p>
                                                                        <p>Unyielding determination for achieving your fitness goals.</p>
                                                                </div>
                                                        </div>
                                                        <div className='flex gap-10 items-center'>
                                                                <div className='w-[80%]'>
                                                                        <img src={img1} alt="" />
                                                                </div>
                                                                <div>
                                                                        <p className='text-xl font-semibold text-justify'>CrossFit Preparation</p>
                                                                        <p>CrossFit Preparation involves specific training and conditioning to build strength, endurance.</p>
                                                                </div>
                                                        </div>
                                                        <div className='flex gap-10 items-center'>
                                                                <div className='w-[80%]'>
                                                                        <img src={img3} alt="" />
                                                                </div>
                                                                <div>
                                                                        <p className='text-xl font-semibold text-justify'>Train Harder</p>
                                                                        <p>Push your limits, surpass your goals, and achieve peak performance in pursuit of greatness.</p>
                                                                </div>
                                                        </div>
                                                        
                                                        

                                                </div>
                                        </div>
                                </div>
                        </div>
                        {/* copy right */}
                        <div>
                                <p className='flex text-lg pb-2 justify-center gap-1 items-center'><AiFillCopyrightCircle/> 2023 fitness gym</p>

                        </div>
                </div>
        );
};

export default Footer;