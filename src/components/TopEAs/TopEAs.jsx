import React from 'react'
import EATable from '../EATable/EATable'

const TopEAs = ({ data }) => {
  const columns = [
    { id: 'account', label: 'Account' },
    { id: 'magic_number', label: 'Magic Number' },
    { id: 'trades_count', label: 'Trades Count' },
    { id: 'gross_profit', label: 'Gross Profit' },
    { id: 'gross_loss', label: 'Gross Loss' },
    { id: 'net_profit', label: 'Net Profit' },
    { id: 'profit_factor', label: 'Profit Factor' },
    { id: 'winners_count', label: 'Winners Count' },
    { id: 'losers_count', label: 'Loser Count' },
    { id: 'win_percentage', label: 'Win Percentage' },
    { id: 'lose_percentage', label: 'Lose Percentage' },
    { id: 'avg_win', label: 'Avg Win' },
    { id: 'avg_lose', label: 'Avg Lose' },
    { id: 'avg_trade', label: 'Avg Trade' },
    { id: 'best_trade', label: 'Best Trade' },
    { id: 'worst_trade', label: 'Worst Trade' },
    { id: 'longest_trade', label: 'Longest Trade' },
    { id: 'longest_trade_time', label: 'Longest Trade Time' },
    { id: 'shortest_trade', label: 'Shortest Trade' },
    { id: 'shortest_trade_time', label: 'Shortest Trade Time' },
    { id: 'avg_trade_time', label: 'Avg Trade Time' },
    { id: 'total_win_pips', label: 'Total Win Pips' },
    { id: 'total_lose_pips', label: 'Total Lose Pips' },
    { id: 'net_pips', label: 'Net Pips' },
    { id: 'avg_win_pips', label: 'Avg Win Pips' },
    { id: 'avg_lose_pips', label: 'Avg Lose Pips' },
    { id: 'avg_net_pips', label: 'Avg Net Pips' },
    { id: 'consecutive_win_trades', label: 'Consecutive Win Trades' },
    { id: 'consecutive_profits', label: 'Consecutive Profits' },
    { id: 'consecutive_lose_trades', label: 'Consecutive Lose Trades' },
    { id: 'consecutive_losses', label: 'Consecutive Loses' },
  ]

  return (
    <>
      {Object.keys(data.data.data).map((rowData, i) => (
        <div>
          <EATable
            key={i}
            rows={data.data.data[rowData].data}
            columns={columns}
            isEven={rowData.split('-')[1] % 2 === 0 ? true : false}
            rowData={rowData}
          />
        </div>
      ))}
    </>
  )
}

export default TopEAs
