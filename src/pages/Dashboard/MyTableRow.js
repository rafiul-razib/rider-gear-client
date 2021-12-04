import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

const MyTableRow = (props) => {
  const{bikeName, bikePrice, status, _id}= props.row;
  const setOrderReload = props.setOrderReload;
  const orderReload = props.orderReload;

    const handleDelete = e =>{
       const proceed = window.confirm("Are you really want to cancel the deal??")
       if(proceed){
        fetch(`http://localhost:5000/orders/${_id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
            if(data.deletedCount > 0)
            {   
                alert('Successfully cancelled order')
                setOrderReload(!orderReload)
            }
            
            
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
                {bikeName}
              </TableCell>
              <TableCell>$ {bikePrice}</TableCell>
              <TableCell>{status}</TableCell>
              <TableCell align="right"><Button onClick={handleDelete} variant="contained">Cancel</Button></TableCell>
            </TableRow>
    );
};

export default MyTableRow;