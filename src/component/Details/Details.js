import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
        return (
                <div className='h-screen flex flex-col gap-5 justify-center items-center bg-gray-300'>
                        <h1 className='text-center   text-5xl font-mono'>We are working this section...</h1>
                        
                        <Link to="/team">
                        <button className='py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 text-xl'>Back to previews page</button>
                        </Link>
                </div>
        );
};

export default Details;