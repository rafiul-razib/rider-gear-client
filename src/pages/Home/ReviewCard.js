import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const ReviewCard = (props) => {
    const singleReview = props.singleReview;
    const ratingCount = parseInt(singleReview.rating)
    return (
        
            <div className="card h-100 bg-grey" style={{width:"100%"}}>
            <div className="card-body" style={{height:"130px"}}>
                <h3 className="card-title">{singleReview.user.displayName}</h3>
                <p style={{fontStyle:"italic"}} className="card-text">"{singleReview.review}"</p>
            </div>
                <div className="py-2">
                <Box>
                <Rating name="read-only" value={ratingCount} readOnly />
                </Box>
                </div>
            </div>
            
    
    );
};

export default ReviewCard;