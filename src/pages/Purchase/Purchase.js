import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';



const Purchase = () => {
    const{user} = useAuth();
    const {id} = useParams();
    const [bike, setBike] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const { control, handleSubmit, reset } = useForm({
        defaultValues:{
            name: user.displayName,
            email: user.email,
            phone: ""
        }
    });
    

      const onSubmit = data => {
          data.bikeId = bike._id;
          data.bikeName = bike.name;
          data.bikePrice = bike.price;
          data.status= "Pending";

          fetch("http://localhost:5000/order", {
              method: "POST",
              headers: {
                  "content-type": "application/json"
              },
              body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data =>{
              if(data.insertedId){
                  alert("Successfully ordered")
              }
          })
          
          reset()
      };
    
    useEffect(()=>{
        setIsLoading(true)
        fetch(`http://localhost:5000/bikes/${id}`)
        .then(res => res.json())
        .then(data => setBike(data))
        .finally(()=> setIsLoading(false) )
    },[id]);
    

    return (
        <>
        <Navigation></Navigation>
        <div className="container-fluid">
            
            {   isLoading &&
                <Box sx={{ width: '100%' }}>
                <LinearProgress />
                </Box>}
        <div className="row pt-3">
            
                <div className="pt-5">
                    <h1>{bike.name}</h1>
                </div>
            <div className="col-md-8">
                
                <div className="card border-0" style={{width:"100%"}}>
                <img src={bike.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p>{bike.description}</p>
                </div>
                </div>
            </div>
            <div className="col-md-4">  
                {
                    !isLoading &&
                    <div>
                    <div className="card bg-danger text-center text-white mb-3" style={{width:"100%"}}>
                    <div className="card-body">
                        <h2 className="card-title p-1 my-1">MSRP : ${bike.price}</h2>
                    </div>
                    </div>

                    <div className="card" style={{width:"100%"}}>
                    <div className="card-body">
                        <h5 className="card-title py-2 text-primary">Specifications</h5>
                        <h6>Claimed peak power : {bike.intro.ClaimedPeakPower}</h6>
                        <h6>Estimated dry weight : {bike.intro.EstimatedDryWeight}</h6>
                        <h6>Power/weight : {bike.intro.PowerPerWeight}</h6>
                    </div>
                    </div>

                </div>
                }

                <div className="ms-2 mt-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <TextField  {...field} id="standard-basic" label="Name" variant="standard" />}
                />
                <br />
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <TextField  {...field} id="standard-basic" label="Email" variant="standard" />}
                />
                <br />
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => <TextField {...field} id="standard-basic" label="Phone Number" variant="standard" />}
                />
               <br/>
               <Button sx={{my:2}} type="submit" variant="contained">Purchase Now</Button>
                </form>
                </div>
                
            </div>
        </div>
        
        </div>
        <Footer></Footer>
        </>
    );
};

export default Purchase;