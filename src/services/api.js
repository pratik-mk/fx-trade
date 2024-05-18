import axios from "axios";

export const columns = ["Accounts"];

export const rowData = [
  "account",
  "magic_number",
  "avg_lose",
  "avg_lose_pips",
  "avg_net_pips",
  "avg_trade",
  "avg_trade_time",
  "avg_win",
  "avg_win_pips",
  "best_trade",
  "consecutive_lose_trades",
  "consecutive_losses",
  "consecutive_profits",
  "consecutive_win_trades",
  "gross_loss",
  "gross_profit",
  "longest_trade",
  "longest_trade_time",
  "lose_percentage",
  "losers_count",
  // 'magic_number',
  "net_pips",
  "net_profit",
  "profit_factor",
  "shortest_trade",
  "shortest_trade_time",
  "total_lose_pips",
  "total_win_pips",
  "trades_count",
  "win_percentage",
  "winners_count",
  "worst_trade",
];

// const BASE_URL = "http://69.57.172.140";

export const getAccounts = async () => {
  try {
    const response = await axios.get(`/data/accounts`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// export const getEAFromAccount = async (acc, magicNumber) => {
//   try {
//     const response1 = await axios.get(
//       `${BASE_URL}/data/account/magic_nos?account=${acc}`
//     )

//     const response2 = axios.get(
//       `${BASE_URL}/data/account/trades_stats?account=${acc}&magic_no=${magicNumber}`
//     )
//     return response1 response2
//     // console.log(response);
//   } catch (error) {
//     console.error(error)
//   }
// }
