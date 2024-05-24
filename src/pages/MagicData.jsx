import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import MagicDataTable from "../components/MagicDataTable/MagicDataTable";
import { getAllTrades, getAllTradesByDate } from "../services/api";
import { Container, TextField, Button, Typography } from "@mui/material";

const MagicData = () => {
  const [dateValue, setDateValue] = useState({
    startDate: "",
    endDate: "",
  });
  const [magicNumData, setMagicNumData] = useState([]);

  let { acc_no } = useParams();

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setDateValue({
      ...dateValue,
      [name]: value,
    });
  };

  console.log("DATEVALUE", dateValue.startDate, dateValue.endDate);

  const fetchTradesByDate = useCallback(async () => {
    console.log("API_PAYLOAD", dateValue.startDate, dateValue.endDate);
    const response = await getAllTradesByDate(
      acc_no,
      dateValue.startDate,
      dateValue.endDate
    );
    console.log("FETCH_TRADE_BY_DATE: ", response);
    // setMagicNumData(response.data.data.data);
  }, [acc_no]);

  const fetchAllTrades = useCallback(async () => {
    const response = await getAllTrades(acc_no);
    setMagicNumData(response.data.data.data);
  }, [acc_no]);

  useEffect(() => {
    fetchAllTrades();
  }, [fetchAllTrades]);

  return (
    <Container maxWidth="lg">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          margin: "30px 0",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Start Date
        </Typography>

        <TextField
          id="outlined-basic"
          name="startDate"
          variant="outlined"
          type="date"
          value={dateValue.startDate}
          onChange={handleChange}
        />
        <Typography variant="h5" gutterBottom>
          End Date
        </Typography>
        <TextField
          id="outlined-basic"
          name="endDate"
          variant="outlined"
          type="date"
          value={dateValue.endDate}
          onChange={handleChange}
        />
        <Button variant="outlined" onClick={fetchTradesByDate}>
          Submit
        </Button>
      </div>
      <MagicDataTable data={magicNumData} />
    </Container>
  );
};

export default MagicData;
