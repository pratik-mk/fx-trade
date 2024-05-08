import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'

export default function BasicTable({ rowData, columns, getAcc }) {
  return (
    <TableContainer component={Paper}>
      {/* <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell align={index === 0 ? "" : "right"}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
      <Table
        sx={{ minWidth: 650 }}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            <TableCell align='left'>{columns[0]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getAcc.map((data, i) => (
            <TableRow key={i}>
              <TableCell align='left'>
                <Link to={`/magic_no/${data}`}>{data}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
