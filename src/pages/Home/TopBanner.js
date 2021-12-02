import React from 'react';
import bike from '../../images/bikes/bike- (4).jpg';

const TopBanner = () => {
    return (
        <div>
            <div className="d-block w-100">
                <img src={bike} alt=""  className="img-fluid"/>
            </div>
        </div>
    );
};

export default TopBanner;