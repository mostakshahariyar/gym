import React from 'react';
import Team from '../Team/Team';

const Teamlist = ({isLoading, teams}) => {
        
        return (
                <div className='bg-gray-300 w-100'>
                {/* Loading section */ }
                {isLoading ? (
                        <div className='flex justify-center h-screen items-center align-center gap-1'>
                            <p className='text-2xl animate-ping font-mono text-sky-500'>Loading</p>
                        </div>
                    ) : (
                        <div className='grid lg:grid-cols-3 pb-5 md:grid-cols-2'>
                            {teams?.map(team => (
                                <Team team={team} key={team.id} /> //data pass
                            ))}
                        </div>
                    )}
                 </div>
        );
};

export default Teamlist;