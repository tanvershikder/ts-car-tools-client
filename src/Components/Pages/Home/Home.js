import React from 'react';
import Banner from './Banner';
import BusinessSumary from './BusinessSumary';
import Review from './Review';
import SellingChart from './SellingChart';
import Subcribeus from './Subcribeus';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSumary></BusinessSumary>
            <Review></Review>
            <SellingChart></SellingChart>
            <Subcribeus></Subcribeus>
        </div>
    );
};

export default Home;