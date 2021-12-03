import React from 'react';
import { Link } from 'react-router-dom';

const MotoCard = (props) => {
    const{name, img, price, intro, _id} = props.bike
    return (
        
            <div className="col-md-4">
                <div className="card h-100" style={{width:"100%"}}>
                <img src={img} className="card-img-top"  style={{height:"240px"}}  alt="..."/>
                <div className="card-body d-flex flex-column justify-content-around" style={{height: "200px"}}>
                    <div style={{height:"100px"}}>
                    <h5 className="card-title">{name}</h5>
                    </div>
                   <div>
                    <h6>Claimed peak power : {intro.ClaimedPeakPower}</h6>
                    <h6>Estimated dry weight : {intro.EstimatedDryWeight}</h6>
                    <h6>Power/weight : {intro.PowerPerWeight}</h6>
                    <h3>price:${price}</h3>
                    </div>
                </div>
                <div className="my-4">
                    <Link to={`/purchase/${_id}`}>
                    <button className="btn btn-success mx-auto">Buy Now</button>
                    </Link>
                </div>
                </div>
            </div>
        
    );
};

export default MotoCard;