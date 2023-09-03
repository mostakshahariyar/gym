import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Datas from '../../Hooks/Datas';
import Teamlist from '../Teams/Teamlist';

const home = () => {
        const [teams, isLoading] = Datas();
        return (
                <div>
                       <Banner/>
                       <Teamlist teams={teams.slice(0,4)} isLoading={isLoading}/>

                </div>
        );
};

export default home;