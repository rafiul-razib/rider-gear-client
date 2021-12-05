import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const[email, setEmail] = useState('')
    const[success, setSuccess] = useState(false)

    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e =>{
        const user = {email};
        fetch("https://young-chamber-96832.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                setSuccess(true)
            }
            console.log(data)
        })
        e.preventDefault()
    }


    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{mb:2}}
                label="Email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard"
                />
                <br />
                <Button type="submit" variant="contained">Add Admin</Button>
            </form>
            {
                success && <Alert severity="success">Admin added successfully</Alert>
            }
        </div>
    );
};

export default MakeAdmin;