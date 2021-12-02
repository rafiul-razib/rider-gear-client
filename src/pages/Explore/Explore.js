import React, {useEffect, useState} from 'react';
import MotoCard from './MotoCard';

const Explore = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => {
            setBikes(data)
        })
    },[])
    return (
        <div className="bg-dark">
            <div className="container text-center py-4">
            <h2 className="text-white py-4">Explore Our Collections</h2>
            <div className="row g-3">
            {
                bikes.map(bike => <MotoCard key={bike.id} bike={bike}></MotoCard>)
            }
            
            </div>
        </div>
       </div>
    );
};

export default Explore;