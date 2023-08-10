import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { rows } from '../data';


export default function Orders() {
  return (
    <div id= "scroll">
    <React.Fragment >
      <Title>Transactions</Title>
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell>txId</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.txId}</TableCell>
              <TableCell>{row.user}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.cost}</TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
    </div>
  );
}