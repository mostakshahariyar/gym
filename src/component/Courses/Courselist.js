import React from 'react';
import Course from '../Course/Course';

const Courselist = ({ isLoading, course }) => {

    return (
        <div className='bg-gray-300 w-100'>
            {/* Loading section */}
            {isLoading ? (
                <div className='flex justify-center h-screen items-center align-center gap-1'>
                    <p className='text-2xl animate-ping font-mono text-sky-500'>Loading</p>
                </div>
            ) : (
                <div className='grid lg:grid-cols-3 pb-5 md:grid-cols-2'>
                    {course?.map(course => (
                        
                         <Course course={course} key={course.id} /> //data pass
                    ))}
                </div>
            )}
        </div>
    );
};

export default Courselist;