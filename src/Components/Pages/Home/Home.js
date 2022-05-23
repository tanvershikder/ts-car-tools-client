import React from 'react';
import Banner from './Banner';
import BusinessSumary from './BusinessSumary';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSumary></BusinessSumary>
            <Review></Review>
        </div>
    );
};

export default Home;