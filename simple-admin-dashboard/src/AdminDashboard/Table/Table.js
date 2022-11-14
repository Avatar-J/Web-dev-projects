import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css"

function createData(name, level, programme) {
  return { name, level, programme };
}

const rows = [
  createData('King Jummai', 100, "Computer Engineering"),
  createData('Isaac Newton', 300, "Electrical Engineering"),
 
];

export default function BasicTable() {
  return (
    <div>
        
    
    <TableContainer component={Paper}
      style={{boxShadow: "0px 0px 15px -10px rgba(0,0, 0, 0.75)"}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Level</TableCell>
            <TableCell align="left">Programme</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.level}</TableCell>
              <TableCell align="left">{row.programme}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}