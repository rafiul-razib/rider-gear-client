import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import NewArrivals from './NewArrivals';
import Review from './Review';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
        
            <TopBanner></TopBanner>
            <NewArrivals></NewArrivals>
            <Review></Review>
           
        </div>
    );
};

export default Home;