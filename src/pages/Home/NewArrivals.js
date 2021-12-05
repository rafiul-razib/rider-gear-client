import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MotoCard from '../Explore/MotoCard';



const NewArrivals = () => {
    const[isLoading, setIsLoading]= useState(true)
    const [bikes, setBikes] = useState([]);
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://young-chamber-96832.herokuapp.com/bikes')
        .then(res => res.json())
        .then(data => {
            setBikes(data)
            setIsLoading(false)
        })
    },[])

    const newBikes = bikes.slice(0,6)
    return (
        <>
         {   isLoading &&
                <Box sx={{ width: '100%' }}>
                <LinearProgress />
                </Box>}
        {
            !isLoading &&
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
        }
       </>
    );
};

export default NewArrivals;