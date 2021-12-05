import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

const AllOrdersRow = (props) => {
    const{name, email, phone, bikeName, status, _id} = props.row;
    const setUpdate = props.setUpdate;

    const handleUpdate = e =>{
        const status = {"status":"Shipped"}
        const url = `https://young-chamber-96832.herokuapp.com/update/${_id}`;
       
        fetch(url,{
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(status)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setUpdate(data)
        })
        e.preventDefault();
    }
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
            {name}
            </TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{phone}</TableCell>
            <TableCell>{bikeName}</TableCell>
            <TableCell>{status}</TableCell>
            <TableCell align="right"><Button onClick={handleUpdate} variant="contained">Approve</Button></TableCell>
        </TableRow>
    );
};

export default AllOrdersRow;