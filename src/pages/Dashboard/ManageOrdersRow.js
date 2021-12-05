import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

const ManageOrdersRow = (props) => {
    const{name, price,_id} = props.row;
    const setUpdate = props.setUpdate;

    const handleDelete = e =>{
       const proceed = window.confirm("Are you sure about deleting the product?");
       if(proceed){
        const url = `https://young-chamber-96832.herokuapp.com/bikes/${_id}`
        fetch(url, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data =>{
            setUpdate(data)
        })
       }
       else{
           return
       }
        e.preventDefault();
    }
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
            {name}
            </TableCell>
            <TableCell>{price}</TableCell>
            <TableCell align="right"><Button onClick={handleDelete} variant="contained">Delete</Button></TableCell>
        </TableRow>
    );
};

export default ManageOrdersRow;