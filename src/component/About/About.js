import React from 'react';
import "./about.css";

const About = () => {
        return (
                <div>
                        <div className='about-image flex justify-center items-center'>
                                <h1 className='text-white font-mono font-extrabold text-6xl'>About Us</h1>
                        </div>
                        <div className='my-8 md:mx-28 mx-[5%] mb-8'>
                                <div className='grid grid-cols-1 mb-5 2xl:grid-cols-2'>
                                        <div data-aos="zoom-in" className='mb-5 2xl:mb-0'>
                                                <div className='about-container1  hover:scale-110 duration-300 transition-all ease-in-out delay-100 flex 2xl:mb-0 mb-5'>
                                                        <div className='flex flex-col ml-5 pb-5 justify-end items-start'>
                                                                <span className='uppercase mb-5 text-2xl font-medium text-white'>
                                                                        Fitness <span className='text-yellow-500 text-5xl'>.</span> kickbox
                                                                </span>
                                                                <p className='text-4xl font-semibold text-white'>
                                                                        Benefits of group training
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className='cursor-pointer'>
                                                        <div className='flex justify-between items-center p-5'>
                                                                <p>Read More</p>
                                                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                                                </svg>
                                                                </span>
                                                        </div>
                                                        <hr className=' bg-gray-800 py-[2px] mx-2' />
                                                </div>
                                        </div>

                                        <div data-aos="zoom-in">
                                                <div className='about-container2  hover:scale-110 duration-300 transition-all ease-in-out delay-100 flex '>
                                                        <div className='flex flex-col ml-5 pb-5 justify-end items-start'>
                                                                <span className='uppercase mb-5 text-2xl font-medium text-white'>
                                                                        Fitness <span className='text-yellow-500 text-5xl'>.</span> kickbox
                                                                </span>
                                                                <p className='text-4xl font-semibold text-white'>
                                                                        Outdoor personal training
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className='cursor-pointer'>
                                                        <div className='flex justify-between items-center p-5'>
                                                                <p>Read More</p>
                                                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                                                </svg>
                                                                </span>
                                                        </div>
                                                        <hr className=' bg-gray-800 py-[2px] mx-2' />
                                                </div>
                                        </div>
                                </div>
                        </div>
                        {/* our mission */}
                        <div className='my-8 md:mx-28 mx-[5%] mb-8'>
                                <div className=' grid lg:grid-cols-2 lg:mb-0 grid-cols-1 mb-5'>
                                        <div
                                                data-aos="fade-right"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine"
                                                className='flex flex-col lg:mb-0 mb-5 justify-center items-start lg:pl-[40%]'>
                                                <div className='mb-1 border-b-4 hover:border-gray-800  hover:scale-110 duration-300 transition-all ease-in-out delay-100'>
                                                        <h1 className='text-5xl text-gray-300 hover:text-gray-800 font-medium transition delay-75'>STRONGER</h1>

                                                </div>
                                                <div className='mb-1 border-b-4  hover:scale-110 duration-300 transition-all ease-in-out delay-100 hover:border-gray-800'>
                                                        <h1 className='text-5xl text-gray-300 hover:text-gray-800 font-medium transition delay-75'>OUR STORY</h1>
                                                </div>
                                                <div className='mb-1 border-b-4  hover:scale-110 duration-300 transition-all ease-in-out delay-100 hover:border-gray-800'>
                                                        <h1 className='text-5xl text-gray-300 hover:text-gray-800 font-medium transition delay-75'>OUR MISSION</h1>

                                                </div>
                                                <div className='mb-1 border-b-4  hover:scale-110 duration-300 transition-all ease-in-out delay-100 hover:border-gray-800'>
                                                        <h1 className='text-5xl text-gray-300 hover:text-gray-800 font-medium transition delay-75'>APPROACH</h1>

                                                </div>
                                        </div>
                                        <div
                                                data-aos="fade-left"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine"
                                                className='flex  flex-col gap-4 justify-center items-start lg:pl-[40%] text-justify'>
                                                <div>
                                                        <h1 className='text-4xl font-medium'>Our Story</h1>
                                                        <p className='line-clamp-3 hover:line-clamp-none transition delay-100'>
                                                                Once upon a time in a bustling city, two fitness enthusiasts named Alex and Sarah shared a common dream – to create a gym store that would cater to the needs of fitness enthusiasts and athletes while promoting a healthy lifestyle. Their startup story is an inspiring journey of determination, passion, and hard work.
                                                        </p>
                                                </div>
                                                <div>
                                                        <h1 className='text-4xl font-medium'>Our Mission</h1>
                                                        <p className='line-clamp-3 hover:line-clamp-none transition delay-100'>
                                                                Our mission is to empower individuals on their journey to optimal health and wellness. We believe that fitness is not just a physical endeavor but a holistic pursuit that encompasses mental, emotional, and social well-being. Our commitment to this mission is evident in every aspect of our gym's operations.
                                                        </p>
                                                </div>
                                                <div>
                                                        <h1 className='text-4xl font-medium'>Equipment </h1>
                                                        <p className='line-clamp-3 hover:line-clamp-none transition delay-100'>
                                                                Gym equipment encompasses a wide range of machines, tools, and accessories designed to facilitate exercise and physical fitness training. These pieces of equipment are used to target different muscle groups, improve cardiovascular health, enhance flexibility, and support various fitness goals. Here's a list of common gym equipment
                                                                1.Functional Training Equipment
                                                                2.Free Weights
                                                                3.Strength Training Machines
                                                                4.Cardiovascular Machines
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        {/* our review */}
                        <div className='my-8 md:mx-28 mx-[5%] mb-8'>
                                <dir className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-0'>
                                        <div data-aos="zoom-in" className='border-2 border-gray-800 flex flex-col justify-center items-center py-[6rem] hover:scale-110 duration-300 transition-all ease-in-out delay-100 hover:bg-gray-200'>
                                                <span className='text-5xl font-semibold'>8</span>
                                                <p className='mt-2 font-mono text-xl'>YEARS OF EXPERIENCE</p>
                                        </div>
                                        <div data-aos="zoom-in" className='border-2 border-gray-800 flex flex-col justify-center items-center py-[6rem] hover:scale-110 duration-300 transition-all ease-in-out delay-100 hover:bg-gray-200'>
                                                <span className='text-5xl font-semibold'>16</span>
                                                <p className='mt-2 font-mono text-xl'>SKILLED TRAINER</p>
                                        </div>
                                        <div data-aos="zoom-in" className='border-2 border-gray-800 flex flex-col justify-center items-center py-[6rem] hover:scale-110 duration-300 transition-all ease-in-out delay-100 hover:bg-gray-200'>
                                                <span className='text-5xl font-semibold'>64K</span>
                                                <p className='mt-2 font-mono text-xl'>CALORIES BURNED</p>
                                        </div>
                                        <div data-aos="zoom-in" className='border-2 border-gray-800 flex flex-col justify-center items-center py-[6rem] hover:scale-110 duration-300 transition-all ease-in-out delay-100 hover:bg-gray-200'>
                                                <span className='text-5xl font-semibold'>256</span>
                                                <p className='mt-2 font-mono text-xl'>HAPPY MEMBERS</p>
                                        </div>


                                </dir>
                        </div>

                </div>
        );
};

export default About;