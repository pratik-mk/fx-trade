import axios from "axios";

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
