import React from 'react';
import Banner from '../Banner/Banner';
import Datas from '../../Hooks/Datas';
import Courselist from '../Courses/Courselist';

const home = () => {
        const [course, isLoading] = Datas();
        return (
                <div>
                        <Banner />
                        <Courselist course={course.slice(0, 6)} isLoading={isLoading} />

                </div>
        );
};

export default home;