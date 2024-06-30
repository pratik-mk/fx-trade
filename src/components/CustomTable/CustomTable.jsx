import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { rows } from '../CustomTable/data';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: '#2C2C2C',
    borderSpacing: 0, 
  },
  head: {
    backgroundColor: '#1F1F1F',
  },
  cell: {
    color: '#FFFFFF',
    borderBottom: 'none', 
    padding: '8px 16px', 
  },
  magicNumberCell: {
    color: 'yellow', 
    textAlign:'center'
   
  },
  row: {
    border: 'none', // Remove border from rows
    '&:nth-of-type(odd)': {
      backgroundColor: '#2C2C2C',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#2C2C2C',
    },
  },
  redText: {
    color: 'red',
  },
  greenText: {
    color: 'green',
  },
  tableContainer: {
    marginTop: '10px',
    border: 'none', // Remove border from table container
    padding: '0px', // Remove padding from table container
    borderBottom: 'none',
  },
  label: {
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  MuiTableCellAlignCenter: {
    '&.MuiTableCell-alignCenter': {
      borderBottom: 'none',
    },
  },
});

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.label}>01-10</div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell className={classes.cell}>Account</TableCell>
              <TableCell className={classes.cell} align="center">Magic Number</TableCell>
              <TableCell className={classes.cell} align="right">Avg. Lose</TableCell>
              <TableCell className={classes.cell} align="right">Avg. Lose Pips</TableCell>
              <TableCell className={classes.cell} align="right">Avg. Net Pips</TableCell>
              <TableCell className={classes.cell} align="right">Avg. Trade</TableCell>
              <TableCell className={classes.cell} align="right">Avg. Trade Time</TableCell>
              <TableCell className={classes.cell} align="right">Avg. Win</TableCell>
              <TableCell className={classes.cell} align="right">Avg. Win Pips</TableCell>
              <TableCell className={classes.cell} align="right">Best Trade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} className={classes.row}>
                <TableCell className={classes.cell} component="th" scope="row">
                  {row.account}
                </TableCell>
                <TableCell className={`${classes.cell} ${classes.magicNumberCell}`} align="center">{row.magicNumber}</TableCell>
                <TableCell className={`${row.avgLose < 0 ? classes.redText : classes.greenText} ${classes.MuiTableCellAlignCenter}`} align="center">{row.avgLose}</TableCell>
                <TableCell className={`${row.avgLosePips < 0 ? classes.redText : classes.greenText} ${classes.MuiTableCellAlignCenter}`} align="center">{row.avgLosePips}</TableCell>
                <TableCell className={`${row.avgNetPips < 0 ? classes.redText : classes.greenText} ${classes.MuiTableCellAlignCenter}`} align="center">{row.avgNetPips}</TableCell>
                <TableCell className={`${row.avgTrade < 0 ? classes.redText : classes.greenText} ${classes.MuiTableCellAlignCenter}`} align="center">{row.avgTrade}</TableCell>
                <TableCell className={`${classes.cell} ${classes.MuiTableCellAlignCenter}`} align="center">{row.avgTradeTime}</TableCell>
                <TableCell className={`${classes.cell} ${classes.MuiTableCellAlignCenter}`} align="center">{row.avgWin}</TableCell>
                <TableCell className={`${classes.cell} ${classes.MuiTableCellAlignCenter}`} align="center">{row.avgWinPips}</TableCell>
                <TableCell className={`${row.bestTrade < 0 ? classes.redText : classes.greenText} ${classes.MuiTableCellAlignCenter}`} align="center">{row.bestTrade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
