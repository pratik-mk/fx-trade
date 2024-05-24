import axios from "axios";
import { BASE_URL } from "../constant";

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

export const getAccounts = async () => {
  try {
    const response = await axios.get(`/api/data/accounts`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAllTrades = async (acc) => {
  try {
    const response = await axios.get(
      `/api/data/account/all_trades_stats?account=${acc}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAllTradesByDate = async (acc, startDate, endDate) => {
  try {
    // Date format YYYY-MM-DD
    const response = await axios.get(
      `/api/data/account/all_trades_stats?account=${acc}&start_date=${startDate}&end_date=${endDate}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
