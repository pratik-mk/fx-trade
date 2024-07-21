import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllTradeByMagicNumber } from "../services/api";
import Table from "../components/Table/Table";
import { ALL_TRADES_HEADER } from "../utils/constant";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AllTrades = () => {
  const navigate = useNavigate();
  const [allTrades, setAllTrades] = useState([]);

  const { acc_no, magic_no } = useParams();

  const fetchAlTradesByMagicNo = useCallback(async () => {
    const response = await getAllTradeByMagicNumber(acc_no, magic_no);
    setAllTrades(response.data.data.data);
  }, [acc_no, magic_no]);

  useEffect(() => {
    fetchAlTradesByMagicNo();
  }, [fetchAlTradesByMagicNo]);

  return (
    <Box sx={{ padding: "30px 55px" }}>
      <Box
        sx={{
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
        mb={"25px"}
      >
        <ArrowBackIcon
          fontSize="large"
          style={{ marginRight: "30px", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <Typography variant="h3">All Trades</Typography>
      </Box>

      <Box padding={"30px"} sx={{ backgroundColor: "#111111" }}>
        <Table columns={ALL_TRADES_HEADER} rowData={allTrades} />
      </Box>
    </Box>
  );
};

export default AllTrades;
