import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../Popular Class/PopularClass';
import PopularInstructor from '../Popular Instructor/PopularInstructor';
import Categorypage from '../Categorypage/Categorypage';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categorypage/>
            <PopularClass/>
            <PopularInstructor/>
        </div>
    );
};

export default Home;