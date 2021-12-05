import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import money from '../../images/money-bag.png';
import road from '../../images/road-with-broken-line.png';
import truck from '../../images/truck.png';
import man from '../../images/man.png';

const Dealer = () => {
    return (
        <div className="container-fluid text-center py-5 bg-info">
            <h2>WELCOME TO OUR BIKE DEALER</h2>
            <h4>The next generation of automotive information to drive your business forward</h4>
            <div className="row">
            <div className="col-md-3 col-12">
                <div class="card-transparent  h-100 border-0 bg-trans mt-4" style={{width:"100%"}}>
                <img src={money} style={{width:"100px", height:"110px"}} class="card-img-top mx-auto p-2" alt="..."/>
                <div class="card-body" style={{height:"250px"}}>
                    <h5 class="card-title">Auto Financing Services</h5>
                    <p class="card-text">If your credit score is low, a two-wheeler loan can help you boost it. Generally, two-wheeler loan EMIs are on the lower side, which reduces the chance of default. Thus, when the loan is completely paid (or pre-paid), it would reflect positively in your credit history.</p>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-12">
                <div class="card-transparent  h-100 border-0 bg-trans mt-4" style={{width:"100%"}}>
                <img src={road} style={{width:"100px", height:"110px"}} class="card-img-top mx-auto p-2" alt="..."/>
                <div class="card-body" style={{height:"250px"}}>
                    <h5 class="card-title">Auto Lead Qualification</h5>
                    <p class="card-text">Drive sales-ready traffic to your website, run multiple, VIN-level inventory/ incentive ads for each car, part and service, and show each customer tailored ads, based on their online behavior, at the right time.</p>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-12">
                <div class="card-transparent  h-100 border-0 bg-trans mt-4" style={{width:"100%"}}>
                <img src={truck} style={{width:"100px", height:"110px"}} class="card-img-top mx-auto p-2" alt="..."/>
                <div class="card-body" style={{height:"250px"}}>
                    <h5 class="card-title">Automotive Acquisition</h5>
                    <p class="card-text">Acquisition means (a) a single transaction for the purpose of or resulting, directly or indirectly, in the acquisition (including, without limitation, a merger or consolidation or any other combination with another Person) by one or more of the Borrower.</p>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-12">
                <div class="card-transparent  h-100 border-0 bg-trans mt-4" style={{width:"100%"}}>
                <img src={man} style={{width:"100px", height:"110px"}} class="card-img-top mx-auto p-2" alt="..."/>
                <div class="card-body" style={{height:"250px"}}>
                    <h5 class="card-title">Automotive Fraud Service</h5>
                    <p class="card-text">Auto dealer fraud describes deceptive and unlawful practices used by automobile dealers. This type of fraud can occur at any stage of the vehicle purchase process, from advertising to negotiation of vehicle pricing and financing terms.</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Dealer;