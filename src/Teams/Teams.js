import React, { useEffect, useState } from 'react';
import Team from '../component/Team/Team';

const Teams = () => {
        const [teams, setTemas] = useState();
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
                fetch('https://raw.githubusercontent.com/mostakshahariyar/gym-data/main/gym.json')
                        .then(res => res.json())
                        .then(data => setTemas(data))

                setIsLoading(false);
        }, [])
        // console.log(teams)
        return (
                <div className='bg-gray-300 w-100'>
                        <div>
                                <p className='text-4xl text-center font-extrabold uppercase py-5 font-sans'>Meet The pros</p>
                                <p className='lg:text-center text-justify lg:p-[0] px-[.5rem] w-[100%] lg:w-[50%] font-mono text-2xl mx-auto pb-5'>A gym team typically refers to a group of individuals who come together to participate in fitness activities and workouts at a gym or fitness center.</p>
                        </div>
                        {/* loading section */}
                        {(isLoading)?<div className='flex justify-center items-center align-center gap-1'>
                                <p className='text-2xl font-mono text-sky-500'>loading</p>
                                <div>
                                        <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                        </span>
                                </div>
                                <div>
                                        <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                        </span>
                                </div>
                                <div>
                                        <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                        </span>
                                </div>

                        </div>: 
                        <div className='grid lg:grid-cols-3 pb-5 md:grid-cols-2'>
                                {
                                        teams?.map(team => <Team
                                                team={team}
                                                key={team.id}
                                        />)
                                }
                        </div>
                        }

                        
                        
                </div>
        );
};

export default Teams;