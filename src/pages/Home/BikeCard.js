import React from 'react';

const BikeCard = (props) => {
    const{name, img} = props.bike
    return (
        <div className="col-md-4">
            <div className="card h-100" style={{width:"100%"}}>
            <img src={img} className="card-img-top" style={{height:"240px"}}  alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            </div>
        </div>
    );
};

export default BikeCard;