import React, {useEffect, useState} from 'react';
import MotoCard from './MotoCard';

const Explore = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(()=>{
        fetch('https://young-chamber-96832.herokuapp.com/bikes')
        .then(res => res.json())
        .then(data => {
            setBikes(data)
        })
    },[])
    return (
        <div className="bg-dark pt-4">
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