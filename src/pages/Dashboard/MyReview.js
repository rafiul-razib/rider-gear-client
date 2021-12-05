import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const MyReview = () => {
    const {user, success, setSuccess} = useAuth();
    const { register, handleSubmit,  reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const newReview = {...data, user};
        reset()
    

        fetch("https://young-chamber-96832.herokuapp.com/review", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                
                setSuccess(true)
            }
        })
  };
    return (
        <div>

        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="review" className="form-label">Your review about us</label>
        <textarea id="review" className="form-control col w-75" defaultValue="" {...register("review",{ required: true })} />

        <label htmlFor="rating" className="form-label">Rating (0-5)</label>
        <input id="rating" type="number" className="form-control col w-50" {...register("rating", { min: 0, max: 5 })} />
        
        <input value="Post review" className="form-control bg-success text-white my-3 ms-auto p-2" type="submit" />
        </form>
        {
            success && <Alert severity="success">Your review added successfully!</Alert>
        }
        </div>
    );
};

export default MyReview;