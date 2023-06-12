import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../Popular Class/PopularClass';
import PopularInstructor from '../Popular Instructor/PopularInstructor';
import Categorypage from '../Categorypage/Categorypage';
import DiscountPage from '../DiscountPage/DiscountPage';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categorypage/>
            <PopularClass/>
            <DiscountPage/>
            <PopularInstructor/>
        </div>
    );
};

export default Home;