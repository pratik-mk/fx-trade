import axios from "axios";

export const columns = [
  "Dessert (100g serving)",
  "calories",
  "fat",
  "carbs",
  "protein",
];

export const rowData = [
  {
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
];

const BASE_URL = "http://69.57.172.140";

export const getAccounts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data/accounts`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getEAFromAccount = async (acc) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/data/account/magic_nos?account=${acc}`
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
