import React from 'react';

const MotoCard = (props) => {
    const{name, img, price, intro} = props.bike
    return (
        
            <div className="col-md-4">
                <div className="card h-100" style={{width:"100%"}}>
                <img src={img} className="card-img-top"  style={{height:"240px"}}  alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Claimed peak power : {intro.ClaimedPeakPower}</h6>
                    <h6>Estimated dry weight : {intro.EstimatedDryWeight}</h6>
                    <h6>Power/weight : {intro.PowerPerWeight}</h6>
                    <h3>price:${price}</h3>
                    <div className="d-flex justify-content-center my-2">
                        <button className="btn btn-success mx-1">Buy Now</button>
                    </div>
                </div>
                </div>
            </div>
        
    );
};

export default MotoCard;