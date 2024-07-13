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
    magicNumber: "",
    pf: "",
    winPercentage: "",
    noOfTrades: "",
    buySell: "",
    profitLoss: "",
  });
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        variant="outlined"
        className="filterButton"
        onClick={() => setShowPopup(!showPopup)}
      >
        <TuneIcon />
        Filter Options
      </Button>
      {showPopup && (
        <div className="popUp">
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography>Magic number</Typography>
            <TextField
              name="magicNumber"
              value={filters.magicNumber}
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
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography>PF</Typography>
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
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography>Win %</Typography>
            <TextField
              name="winPercentage"
              value={filters.winPercentage}
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
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography>No of Trades</Typography>
            <TextField
              name="noOfTrades"
              value={filters.noOfTrades}
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
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography>Buy/Sell</Typography>
            <FormControl size="small">
              <Select
                name="buySell"
                value={filters.buySell}
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
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography>Profit/Loss</Typography>
            <FormControl size="small">
              <Select
                name="profitLoss"
                value={filters.profitLoss}
                onChange={handleChange}
                inputProps={{
                  style: {
                    height: "5px",
                    width: "60px",
                  },
                }}
                id="profit-loss-dropdown"
              >
                <MenuItem value={"Profit"}>Profit</MenuItem>
                <MenuItem value={"Loss"}>Loss</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider />
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
