import React, { useState, useRef, useEffect } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import "./styles.css";
import {
  Box,
  Button,
  Divider,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const FilterButton = ({ onApply }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [filters, setFilters] = useState({
    magic_number: "",
    pf: "",
    win_percentage: "",
    no_of_trades: "",
    trade_type: "",
    profit: "",
  });

  const popupRef = useRef(null);

  // const handleClickOutside = (event) => {
  //   if (popupRef.current && !popupRef.current.contains(event.target)) {
  //     setShowPopup(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleApply = () => {
    onApply(filters);
    setShowPopup(false);
  };

  return (
    <div className="filterPopupContainer" ref={popupRef}>
      <Button
        variant="contained"
        sx={{
          padding: "12px 20px",
          textTransform: "capitalize",
          gap: "10px",
          fontSize: "16px",
          borderRadius: "6px",
          backgroundColor: "#1C1C1C",
          color: "#ffffff",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "#1C1C1C",
          },
        }}
        onClick={() => setShowPopup(!showPopup)}
      >
        <TuneIcon />
        Filter
      </Button>
      {showPopup && (
        <div className="popUp">
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography sx={{ fontSize: 16, color: "#FFFFFF" }}>
              Magic number
            </Typography>
            <TextField
              name="magic_number"
              value={filters.magic_number}
              onChange={handleChange}
              inputProps={{
                style: {
                  height: "5px",
                  width: "60px",
                },
              }}
              size="small"
              variant="outlined"
            />
          </Box>
          <hr />
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography sx={{ fontSize: 16, color: "#FFFFFF" }}>PF</Typography>
            <TextField
              name="pf"
              value={filters.pf}
              onChange={handleChange}
              inputProps={{
                style: {
                  height: "5px",
                  width: "60px",
                },
              }}
              size="small"
              variant="outlined"
            />
          </Box>
          <hr />
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography sx={{ fontSize: 16, color: "#FFFFFF" }}>
              Win %
            </Typography>
            <TextField
              name="win_percentage"
              value={filters.win_percentage}
              onChange={handleChange}
              inputProps={{
                style: {
                  height: "5px",
                  width: "60px",
                },
              }}
              size="small"
              variant="outlined"
            />
          </Box>
          <hr />
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography sx={{ fontSize: 16, color: "#FFFFFF" }}>
              No of Trades
            </Typography>
            <TextField
              name="no_of_trades"
              value={filters.no_of_trades}
              onChange={handleChange}
              inputProps={{
                style: {
                  height: "5px",
                  width: "60px",
                },
              }}
              size="small"
              variant="outlined"
            />
          </Box>
          <hr />
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography sx={{ fontSize: 16, color: "#FFFFFF" }}>
              Buy/Sell
            </Typography>
            <FormControl size="small">
              <Select
                sx={{ width: "87px" }}
                name="trade_type"
                value={filters.trade_type}
                onChange={handleChange}
                inputProps={{
                  style: {
                    height: "5px",
                    width: "60px",
                  },
                }}
                id="buy-sell-dropdown"
              >
                <MenuItem value={"Buy"}>Buy</MenuItem>
                <MenuItem value={"Sell"}>Sell</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <hr />
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography sx={{ fontSize: 16, color: "#FFFFFF" }}>
              Profit/Loss
            </Typography>
            <FormControl size="small">
              <Select
                sx={{ width: "87px" }}
                name="profit"
                value={filters.profit}
                onChange={handleChange}
                inputProps={{
                  style: {
                    height: "5px",
                    width: "87px",
                  },
                }}
                id="profit-loss-dropdown"
              >
                <MenuItem value={true}>Profit</MenuItem>
                <MenuItem value={false}>Loss</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <hr />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button
              variant="outlined"
              className="filterButton"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              className="filterButton"
              onClick={handleApply}
            >
              Apply
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
