import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Teamlist from '../Teams/Teamlist';
import useAuth from '../../Hooks/useAuth';
import Rating from 'react-rating';

const Team = props => {
        const { description, title, rating, img } = props.team;
        const { user } = useAuth();
        const navigate = useNavigate();
        const handelButton = () => {
                { !user?.email ? navigate("/login") : navigate("/details") }
        }
        return (
                // card section
                <div data-aos="zoom-in" className="w-[350px] flex flex-col items-center justify-start p-[5px] m-auto my-5 bg-white shadow-white drop-shadow-3xl shadow-3xl hover:bg-white rounded hover:translate-y-2 hover:duration-500 duration-500">
                        {/* image section */}
                        <div>
                                <img src={img} className="rounded w-full" alt={title} />
                        </div>
                        {/* card info */}
                        <div className="flex flex-col gap-2">
                                <h3 className='font-mono text-lg mt-2 font-bold tracking-tighter'>{title}</h3>
                                <p>{description}</p>
                                <Rating
                                        emptySymbol="fa fa-star-o fa-2x text-amber-200 text-base"
                                        fullSymbol="fa fa-star fa-2x text-amber-200 text-base"
                                        initialRating={rating}
                                        readonly

                                />

                                <button onClick={handelButton} className='rounded-full py-2 px-3 font-medium bg-gray-800 text-white hover:text-gray-800 my-2 transition duration-700 ease-in-out hover:bg-cyan-500'>All Details</button>

                        </div>
                        <Teamlist />
                </div>
        );
};

export default Team;