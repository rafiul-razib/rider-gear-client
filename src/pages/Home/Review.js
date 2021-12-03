import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import imgA from '../../images/bike-potrait/bike-potrait- (1).jpg';
import imgB from '../../images/bike-potrait/bike-potrait- (2).jpg';
import imgC from '../../images/bike-potrait/bike-potrait- (3).jpg';
import imgD from '../../images/bike-potrait/bike-potrait- (4).jpg';
import imgE from '../../images/bike-potrait/bike-potrait- (5).jpg';

const Review = () => {
    return (
        <div className="text-center bg-dark">
            <h2 className="py-5 text-white">What Our Clients Says</h2>
            <OwlCarousel className='owl-theme' loop margin={10}>
            <div className='item'>
                <img src={imgA} alt="" />
            </div>
            <div className='item'>
                <img src={imgB} alt="" />
            </div>
            <div className='item'>
                <img src={imgC} alt="" />
            </div>
            <div className='item'>
                <img src={imgD} alt="" />
            </div>
            <div className='item'>
                <img src={imgE} alt="" />
            </div>
           
        </OwlCarousel>
        </div>
    );
};

export default Review;