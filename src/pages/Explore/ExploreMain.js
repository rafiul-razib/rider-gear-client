import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Explore from './Explore';

const ExploreMain = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Explore></Explore>
            <Footer></Footer>
        </div>
    );
};

export default ExploreMain;