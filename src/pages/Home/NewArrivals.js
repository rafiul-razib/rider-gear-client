import React, { useEffect, useState } from 'react';
import MotoCard from '../Explore/MotoCard';



const NewArrivals = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => {
            setBikes(data)
        })
    },[])

    const newBikes = bikes.slice(0,6)
    return (
       <div className="bg-light">
            <div className="container text-center py-4">
            <h2>New Arrivals</h2>
            <div className="row g-3">
            {
                newBikes.map(bike => <MotoCard key={bike.id} bike={bike}></MotoCard>)
            }
            
            </div>
        </div>
       </div>
    );
};

export default NewArrivals;