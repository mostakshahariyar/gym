import React from 'react';
import Datas from '../../Hooks/Datas';
import Teamlist from './Teamlist';

const Teams = () => {
    const [teams, isLoading] = Datas();
    return (
        <div className='bg-gray-300 w-100'>
            <div>
                <p className='text-4xl text-center font-extrabold uppercase py-5 font-sans'>Meet The pros</p>
                <p className='lg:text-center text-justify lg:p-[0] px-[.5rem] w-[100%] lg:w-[50%] font-mono text-2xl mx-auto pb-5'>A gym team typically refers to a group of individuals who come together to participate in fitness activities and workouts at a gym or fitness center.</p>
            </div>
            <Teamlist teams={teams} isLoading={isLoading}/>
            
        </div>
    );
};

export default Teams;
