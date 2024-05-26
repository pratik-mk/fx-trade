import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllTradeByMagicNumber } from "../services/api";
import Table from "../components/Table/Table";
import { ALL_TRADES_HEADER } from "../utils/constant";
import { Typography } from "@mui/material";

const AllTrades = () => {
  const [allTrades, setAllTrades] = useState([]);

  const { acc_no, magic_no } = useParams();

  const fetchAlTradesByMagicNo = useCallback(async () => {
    const response = await getAllTradeByMagicNumber(acc_no, magic_no);
    setAllTrades(response.data.data);
  }, [acc_no, magic_no]);

  useEffect(() => {
    fetchAlTradesByMagicNo();
  }, []);

  return (
    <div>
      <Typography>ALL TRADES </Typography>
      <Typography>ACCOUNT {acc_no} </Typography>
      <Typography>MAGIC NUMBER {magic_no} </Typography>
      <Table columns={ALL_TRADES_HEADER} rowData={allTrades} />
    </div>
  );
};

export default AllTrades;
