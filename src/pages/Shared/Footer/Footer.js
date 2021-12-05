import React from 'react';
import './Footer.css';
import map from '../../../images/Map.png';

const Footer = () => {
    return (
        <div className= "container-fluid bg-dark pt-5">
            <hr  style={{color:"white"}}/>
            <div className='row mx-auto my-4'>

                <div className="col-md-4">
                <div class="card-transparent text-white border-0" style={{width:"100%"}}>
                <div class="card-body">
                    <h5 class="card-title">About Us</h5>
                    <hr  style={{color:"white"}}/>
                    <p class="card-text">RiderGear.com is #1 motorcycle oriented website in Bangladesh where Bike enthusiasts from all over the country can find all the information about any bike. <br/> <br/>From motorcycle price in Bangladesh and Motorcycle Specification to the test ride reviews of various bikes and first impression reviews of any newly launched bikes. Since 2012, RiderGear is providing information to everyone across the nation about various offers from the motorcycle or related companies.</p>
                </div>
                </div>
                </div>
                <div className="col-md-4">
                <div class="card-transparent text-white border-0" style={{width:"100%"}}>
                <div class="card-body">
                    <h5 class="card-title">Our Contacts</h5>
                    <hr  style={{color:"white"}}/>
                    <h5>House: 13/A/1</h5>
                    <h5>Street: Boro Bazar</h5>
                    <h5>Mymensingh, Bangladesh</h5>
                    <div className="icons d-flex">
                        
                    </div>
                </div>
                </div>
                </div>
                <div className="col-md-4">
                <div class="card-transparent text-white border-0" style={{width:"100%"}}>
                <div class="card-body">
                    <h5 class="card-title">Our location</h5>
                    <hr  style={{color:"white"}}/>
                    <div>
                        <img src={map} className="img-fluid p-3 w-75" alt="" />
                    </div>
                </div>
                </div>
                </div>
      
            </div>

                <p className='text-light text-center mb-0 pb-3'>All rights reserved by rafiul-razib @ 2021</p>
        </div>
    );
};

export default Footer;