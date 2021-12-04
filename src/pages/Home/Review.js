import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReviewCard from './ReviewCard';


const Review = () => {
    const[review, setReview] = useState([]);
    

    useEffect(()=>{
        fetch("http://localhost:5000/review")
        .then(res => res.json())
        .then(data =>{
            setReview(data)
        })
    })
    return (
        <div className="text-center bg-dark">
            <h2 className="py-5 text-white">What Our Clients Says</h2>
            <OwlCarousel className='owl-theme' loop margin={20}>
            
                {
                    review.map(singleReview => <ReviewCard key={singleReview._id} singleReview={singleReview}></ReviewCard>)
                }
            
            </OwlCarousel>
        </div>
    );
};

export default Review;