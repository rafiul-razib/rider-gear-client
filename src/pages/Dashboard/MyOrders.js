import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import MyTableRow from './MyTableRow';


const MyOrders = () => {
    const {user} = useAuth();

    const[order, setOrder]= useState([]);
    const[orderReload, setOrderReload]= useState(false)

    useEffect(()=>{
        fetch(`https://young-chamber-96832.herokuapp.com/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setOrder(data)
        })
    },[orderReload])

  
    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="order table">
        <TableHead>
          <TableRow>
            <TableCell>Bike</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row) =><MyTableRow key={row._id} row={row} orderReload={orderReload} setOrderReload={setOrderReload}></MyTableRow> )}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default MyOrders;