import React from 'react';
import './service.css'
import serviceImg from '../../img/serivec/service.jpg'
import client1 from "../../img/about/client-1.png"
import client2 from "../../img/about/client-2.png"
import client3 from "../../img/about/client-3.png"
import client4 from "../../img/about/client-4.png"
import client5 from "../../img/about/client-5.png"
import client6 from "../../img/about/client-6.png"

const Service = () => {
        return (
                <div className='bg-gray-300 pb-5'>
                        {/* header of this service */}
                        <div className='overflow-hidden h-[100%] flex justify-center items-center  service-image'>
                                <div className='px-[5%] '>
                                        <div className='h-[100%] w-[100%] text-white backdrop-blur-sm'>
                                                <h1 className='p-9 text-white font-mono font-extrabold text-6xl '>Our Services</h1>
                                        </div>
                                </div>
                        </div>
                        {/* our club info */}
                        <div className='my-8 md:mx-28 mx-[5%] mb-8 '>
                                <h1 className='text-4xl text-center font-extrabold uppercase py-5 font-sans'>Our Clubs</h1>
                                <p className='text-center  text-2xl'>A gym center typically offers a variety of services to cater to the fitness needs of its members. Here is a list of common services you might find in a gym center, along with a brief step-by-step.</p>
                                <div>
                                        <div className='my-8'>
                                                <div>
                                                        <hr className='border-t-2 border-black' />
                                                        <div className='flex  sm:flex-row flex-col justify-between p-7 relative'>
                                                                <div className='flex gap-[5rem] justify-center items-center'>
                                                                        <div className='text-xl'>08:00 - 22:00</div>
                                                                        <div className='text-3xl font-semibold'>Brooklyn</div>
                                                                </div>
                                                                <div className='pr-5 py-5 sm:py-0'>
                                                                        <div className='hover:bg-white hover:rounded-[50%] hover:border-white hover:p-1 absolute  '>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                                                </svg>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <hr className='border-t-1 border-black' />
                                                </div>
                                                <div>
                                                        <hr className='border-t-1 border-black' />
                                                        <div className='flex  sm:flex-row flex-col justify-between p-7 relative'>
                                                                <div className='flex gap-[5rem] justify-center items-center'>
                                                                        <div className='text-xl'>08:00 - 21:00</div>
                                                                        <div className='text-3xl font-semibold'>Bronx</div>
                                                                </div>
                                                                <div className='pr-5 py-5 sm:py-0'>
                                                                        <div className='hover:bg-white hover:rounded-[50%] hover:border-white hover:p-1 absolute  '>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                                                </svg>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <hr className='border-t-1 border-black' />
                                                </div>
                                                <div>
                                                        <hr className='border-t-1 border-black' />
                                                        <div className='flex  sm:flex-row flex-col justify-between p-7 relative'>
                                                                <div className='flex gap-[5rem] justify-center items-center'>
                                                                        <div className='text-xl'>08:00 - 23:00</div>
                                                                        <div className='text-3xl font-semibold'>Manhattan</div>
                                                                </div>
                                                                <div className='pr-5 sm:py-0 py-5'>
                                                                        <div className='hover:bg-white hover:rounded-[50%] hover:border-white hover:p-1 absolute  '>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                                                </svg>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <hr className='border-t-1 border-black' />
                                                </div>
                                                <div>
                                                        <hr className='border-t-1 border-black' />
                                                        <div className='flex sm:flex-row flex-col justify-between p-7 relative'>
                                                                <div className='flex gap-[5rem] justify-center items-center'>
                                                                        <div className='text-xl'>08:00 - 20:00</div>
                                                                        <div className='text-3xl font-semibold'>Staten Island</div>
                                                                </div>
                                                                <div className='pr-5 sm:py-0 py-5'>
                                                                        <div className='hover:bg-white hover:rounded-[50%] hover:border-white hover:p-1 absolute  '>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                                                </svg>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <hr className='border-t-1 border-black' />
                                                </div>
                                                <div>
                                                        <hr className='border-t-1 border-black' />
                                                        <div className='flex sm:flex-row flex-col justify-between p-7 relative'>
                                                                <div className='flex gap-[5rem] justify-center items-center'>
                                                                        <div className='text-xl'>08:00 - 22:00</div>
                                                                        <div className='text-3xl font-semibold'>Queens</div>

                                                                </div>
                                                                <div className='pr-5 sm:pt-0 sm:pb-0 pt-5 pb-5'>
                                                                        <div className='hover:bg-white hover:rounded-[50%] hover:border-white hover:p-1 absolute'>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                                                </svg>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <hr className='border-t-2 border-black' />
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className='py-3'>
                                <img src={serviceImg} alt="" />
                        </div>
                        {/* some info our service */}
                        <div className='my-8 md:mx-28 mx-[5%] mb-8 '>
                                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-3 gap-6'>
                                        <div data-aos="fade-right"
                                                data-aos-offset="500"
                                                data-aos-easing="ease-in-sine">
                                                <h1 className='text-6xl font-bold uppercase leading-none'>shop now <br />save more</h1>
                                        </div>
                                        <div className='flex flex-col gap-6 mr-2' data-aos="zoom-in" data-aos-offset="500">
                                                <div className='flex flex-col justify-center items-start'>
                                                        <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                                                </svg>
                                                        </div>
                                                        <div className='text-3xl font-semibold'>Free Shipping</div>
                                                        <div className='text-justify'>Free shipping is a promotional offer where customers don't pay for delivery services. It's often used by businesses to attract shoppers and boost sales.</div>
                                                </div>
                                                <div className='flex flex-col justify-center items-start'>
                                                        <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                                                </svg>

                                                        </div>
                                                        <div className='text-3xl font-semibold'>Free Returns</div>
                                                        <div className='text-justify'>"Free returns" refers to a policy where customers can return products without incurring any additional charges for the return shipping or processing. This offers customers convenience and confidence when shopping online.</div>
                                                </div>
                                        </div>
                                        <div className='flex flex-col gap-6 mr-2' data-aos="fade-left"
                                                data-aos-offset="500"
                                                data-aos-easing="ease-in-sine">
                                                <div className='flex flex-col justify-center items-start'>
                                                        <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                                </svg>

                                                        </div>
                                                        <div className='text-3xl font-semibold'>Online Sale</div>
                                                        <div className='text-justify'>Online sale refers to the process of selling products or services through the internet, allowing customers to browse and purchase items from the convenience.</div>
                                                </div>
                                                <div className='flex flex-col justify-center items-start'>
                                                        <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                                                </svg>


                                                        </div>
                                                        <div className='text-3xl font-semibold'>Safe Payment</div>
                                                        <div>
                                                                Safe payment ensures encrypted transactions, protecting sensitive financial data from unauthorized access. It employs secure protocols to prevent fraud and guarantees privacy during online transactions, fostering trust in digital commerce.
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        {/* sponsor logo */}
                        <div className='my-8 md:mx-28 mx-[5%] mb-8'>
                                <h1 className='font-semibold text-5xl text-center my-2 text-gray-800'>Our Sponsor</h1>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 my-3' data-aos="zoom-in">
                                        <div className='border-2 border-gray-800 hover:scale-110 duration-300 transition-all ease-in-out delay-100 hover:bg-gray-200'>
                                                <div className='flex justify-center items-center'>
                                                        <img src={client1} alt="" />
                                                </div>
                                        </div>
                                        <div className='border-2 border-gray-800 hover:scale-110 duration-300 transition-all ease-in-out delay-100 hover:bg-gray-200'>
                                                <div className='flex justify-center items-center'>
                                                        <img src={client2} alt="" />
                                                </div>
                                        </div>
                                        <div className='border-2 border-gray-800 hover:scale-110 duration-300 transition-all ease-in-out delay-100 hover:bg-gray-200'>
                                                <div className='flex justify-center items-center'>
                                                        <img src={client3} alt="" />
                                                </div>
                                        </div>
                                        <div className='border-2 border-gray-800 hover:scale-110 duration-300 transition-all ease-in-out delay-100 hover:bg-gray-200'>
                                                <div className='flex justify-center items-center'>
                                                        <img src={client4} alt="" />
                                                </div>
                                        </div>
                                        <div className='border-2 border-gray-800 hover:scale-110 duration-300 transition-all ease-in-out delay-100 hover:bg-gray-200'>
                                                <div className='flex justify-center items-center'>
                                                        <img src={client5} alt="" />
                                                </div>
                                        </div>
                                        <div className='border-2 border-gray-800 hover:scale-110 duration-300 transition-all ease-in-out delay-100 hover:bg-gray-200'>
                                                <div className='flex justify-center items-center'>
                                                        <img src={client6} alt="" />
                                                </div>
                                        </div>

                                </div>
                        </div>
                </div>
        );
};

export default Service;