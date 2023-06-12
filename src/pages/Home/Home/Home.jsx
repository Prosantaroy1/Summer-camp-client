import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../Popular Class/PopularClass';
import PopularInstructor from '../Popular Instructor/PopularInstructor';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularClass/>
            <PopularInstructor/>
        </div>
    );
};

export default Home;