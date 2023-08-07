import React from 'react';
import { Link } from 'react-router-dom';

const Team = props => {
        const {name, title, rating,img} = props.team;
        return (
                <div className="w-[350px] flex flex-col items-center justify-start p-[5px] m-auto my-5 border-4 shadow-white drop-shadow-2xl shadow-2xl hover:bg-white rounded border-double hover:translate-y-1 hover:duration-500 duration-500">

                        <div className='image-section '>
                                <img src={img} className="rounded" alt={title} />
                        </div>
                        <div className="card-info">
                                <h3 className='font-mono text-lg font-bold tracking-tighter'>{name}</h3>
                                <p>Ratting: {rating}</p>
                                <Link to={'/details'}>
                                        <button className='rounded-full py-2 px-3 font-medium bg-gray-800 text-white hover:text-gray-800 my-2 transition duration-700 ease-in-out hover:bg-cyan-500'>All Details</button>
                                </Link>
                        </div>
                </div>
        );
};

export default Team;