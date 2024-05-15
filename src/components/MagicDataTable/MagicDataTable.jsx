import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { rowData } from '../../services/api'

const MagicDataTable = ({ data }) => {
  // console.log(data)

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            {rowData.map((key, i) => (
              <TableCell
                key={`${key}${i}`}
                align='left'
              >
                {key}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((value, i) => (
            <TableRow key={`${value.id}-${i}`}>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.account}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.magic_number}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.avg_lose}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.avg_lose_pips}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.avg_net_pips}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.avg_trade}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.avg_trade_time}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.avg_win}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.avg_win_pips}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.best_trade}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.consecutive_lose_trades}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.consecutive_losses}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.consecutive_profits}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.consecutive_win_trades}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.gross_loss}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.gross_profit}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.longest_trade}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.longest_trade_time}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.lose_percentage}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.losers_count}
              </TableCell>
              {/* <TableCell
                key={value.id}
                align='left'
              >
                {value.magic_number}
              </TableCell> */}
              <TableCell
                key={value.id}
                align='left'
              >
                {value.net_pips}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.net_profit}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.profit_factor}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.shortest_trade}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.shortest_trade_time}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.total_lose_pips}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.total_win_pips}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.trades_count}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.win_percentage}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.winners_count}
              </TableCell>
              <TableCell
                key={value.id}
                align='left'
              >
                {value.worst_trade}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MagicDataTable
