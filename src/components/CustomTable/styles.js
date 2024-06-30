import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: '#2C2C2C',
    borderSpacing: 0,
  },
  headEven: {
    backgroundColor: '#1F1F1F',
  },
  headOdd: {
    backgroundColor: '#2C2C2C',
  },
  cell: {
    color: '#FFFFFF',
    borderBottom: 'none',
    padding: '8px 16px',
  },
  magicNumberCell: {
    color: 'yellow',
    textAlign: 'center',
  },
  rowEven: {
    border: 'none',
    '&:nth-of-type(odd)': {
      backgroundColor: '#2C2C2C',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#2C2C2C',
    },
  },
  rowOdd: {
    border: 'none',
    '&:nth-of-type(odd)': {
      backgroundColor: '#1F1F1F',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#1F1F1F',
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
    border: 'none',
    padding: '0px',
    borderBottom: 'none',
    width: 1200,
    height: 400,
    marginLeft: 120,
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
