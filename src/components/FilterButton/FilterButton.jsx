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

const FilterButton = () => {
  const [showPopup, setShowPopup] = useState(false);
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
              inputProps={{
                style: {
                  height: "5px",
                  width: "20px",
                },
              }}
              size="small"
              variant="outlined"
            />
          </Box>
          <Divider>----------------</Divider>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography>PF</Typography>
            <TextField
              inputProps={{
                style: {
                  height: "5px",
                  width: "20px",
                },
              }}
              size="small"
              variant="outlined"
            />
          </Box>
          <Divider>----------------</Divider>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography>Win %</Typography>
            <TextField
              inputProps={{
                style: {
                  height: "5px",
                  width: "20px",
                },
              }}
              size="small"
              variant="outlined"
            />
          </Box>
          <Divider>----------------</Divider>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography>No of Trades</Typography>
            <TextField
              inputProps={{
                style: {
                  height: "5px",
                  width: "20px",
                },
              }}
              size="small"
              variant="outlined"
            />
          </Box>
          <Divider>----------------</Divider>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography>Buy/Sell</Typography>
            <FormControl size="small">
              <Select
                inputProps={{
                  style: {
                    height: "5px",
                    width: "20px",
                  },
                }}
                id="buy-sell-dropdown"
                label="Buy/Sell"
              >
                <MenuItem value={"Buy"}>Buy</MenuItem>
                <MenuItem value={"Sell"}>Sell</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider>----------------</Divider>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Typography>Profit/Loss</Typography>
            <FormControl size="small">
              <Select
                inputProps={{
                  style: {
                    height: "5px",
                    width: "20px",
                  },
                }}
                id="buy-sell-dropdown"
                label="Profit/Loss"
              >
                <MenuItem value={"Profit"}>Profit</MenuItem>
                <MenuItem value={"Loss"}>Loss</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider>----------------</Divider>

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
              onClick={() => setShowPopup(false)}
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
