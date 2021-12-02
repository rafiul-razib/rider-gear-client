import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import NewArrivals from './NewArrivals';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <NewArrivals></NewArrivals>
        </div>
    );
};

export default Home;