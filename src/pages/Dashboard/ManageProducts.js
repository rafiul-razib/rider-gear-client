import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ManageOrdersRow from './ManageOrdersRow';

const ManageProducts = () => {
    const[products, setProducts] = useState([]);
    const[update, setUpdate] = useState(false)

    useEffect(()=>{
        fetch("https://young-chamber-96832.herokuapp.com/bikes")
        .then(res=> res.json())
        .then(data=>(
            setProducts(data)
        ))
    },[update])
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="order table">
            <TableHead>
            <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Offered Price $</TableCell>
                <TableCell align="right">Option</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {products.map((row) =><ManageOrdersRow setUpdate={setUpdate} key={row._id} row={row}></ManageOrdersRow>)}
            </TableBody>
        </Table>
        </TableContainer>
    );
};

export default ManageProducts;