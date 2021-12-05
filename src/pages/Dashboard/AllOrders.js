import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AllOrdersRow from './AllOrdersRow';


const AllOrders = () => {
    const[orders, setOrders] = useState([])
    const[update, setUpdate] = useState(false)

    useEffect(()=>{
        fetch("https://young-chamber-96832.herokuapp.com/all/orders")
        .then(res => res.json())
        .then(data =>{
            setOrders(data)
        })
    },[update])
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="order table">
            <TableHead>
            <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Bike Ordered</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Option</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {orders.map((row) =><AllOrdersRow setUpdate={setUpdate} key={row._id} row={row}></AllOrdersRow>)}
            </TableBody>
        </Table>
        </TableContainer>
    );
};

export default AllOrders;