import React, { useState, useRef, useEffect } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { Box, Button, Divider, FormControl, MenuItem, Select, TextField, Typography } from "@mui/material";
import styles from "./FilterButton.module.css";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleApply = () => {
    onApply(filters);
    setShowPopup(false);
  };

  const handleCancel = () => {
    setFilters({
      magic_number: "",
      pf: "",
      win_percentage: "",
      no_of_trades: "",
      trade_type: "",
      profit: "",
    });
    setShowPopup(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !event.target.classList.contains('dropdown-option') &&
        !event.target.classList.contains('MuiSelect-select')
      ) {
        handleCancel();
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className={styles.filterPopupContainer} ref={popupRef}>
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
          "&:hover": {
            bgcolor: "#333333", 
          },
        }}
        onClick={() => setShowPopup(true)}
      >
        <TuneIcon />
        Filter
      </Button>
      {showPopup && (
        <div className={styles.popUp}>
          <Box className={styles.filterItem}>
            <Typography className={styles.label}>
              Magic number
            </Typography>
            <TextField
              name="magic_number"
              value={filters.magic_number}
              onChange={handleChange}
              size="small"
              variant="outlined"
              sx={{
                width: "33%", 
                "& .MuiInputBase-root": {
                  height: "30px",
                  padding: "0 10px",
                },
              }}
            />
          </Box>
          <Divider sx={{ width: '100%', my: 1 }} />
          <Box className={styles.filterItem}>
            <Typography className={styles.label}>PF</Typography>
            <TextField
              name="pf"
              value={filters.pf}
              onChange={handleChange}
              size="small"
              variant="outlined"
              sx={{
                width: "33%", 
                "& .MuiInputBase-root": {
                  height: "30px",
                  padding: "0 10px",
                },
              }}
            />
          </Box>
          <Divider sx={{ width: '100%', my: 1 }} />
          <Box className={styles.filterItem}>
            <Typography className={styles.label}>
              Win %
            </Typography>
            <TextField
              name="win_percentage"
              value={filters.win_percentage}
              onChange={handleChange}
              size="small"
              variant="outlined"
              sx={{
                width: "33%", 
                "& .MuiInputBase-root": {
                  height: "30px",
                  padding: "0 10px",
                },
              }}
            />
          </Box>
          <Divider sx={{ width: '100%', my: 1 }} />
          <Box className={styles.filterItem}>
            <Typography className={styles.label}>
              No of Trades
            </Typography>
            <TextField
              name="no_of_trades"
              value={filters.no_of_trades}
              onChange={handleChange}
              size="small"
              variant="outlined"
              sx={{
                width: "33%", 
                "& .MuiInputBase-root": {
                  height: "30px",
                  padding: "0 10px",
                },
              }}
            />
          </Box>
          <Divider sx={{ width: '100%', my: 1 }} />
          <Box className={styles.filterItem}>
            <Typography className={styles.label}>
              Buy/Sell
            </Typography>
            <FormControl size="small" sx={{ width: "33%" }}>
              <Select
                name="trade_type"
                value={filters.trade_type}
                onChange={handleChange}
                id="buy-sell-dropdown"
                className="MuiSelect-select"
                sx={{
                  height: "30px",
                  "& .MuiSelect-select": {
                    padding: "0 10px",
                  },
                }}
              >
                <MenuItem value={"Buy"} className="dropdown-option">Buy</MenuItem>
                <MenuItem value={"Sell"} className="dropdown-option">Sell</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider sx={{ width: '100%', my: 1 }} />
          <Box className={styles.filterItem}>
            <Typography className={styles.label}>
              Profit/Loss
            </Typography>
            <FormControl size="small" sx={{ width: "33%" }}>
              <Select
                name="profit"
                value={filters.profit}
                onChange={handleChange}
                id="profit-loss-dropdown"
                className="MuiSelect-select"
                sx={{
                  height: "30px",
                  "& .MuiSelect-select": {
                    padding: "0 10px",
                  },
                }}
              >
                <MenuItem value={true} className="dropdown-option">Profit</MenuItem>
                <MenuItem value={false} className="dropdown-option">Loss</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider sx={{ width: '100%', my: 1 }} />
          <Box className={styles.buttonContainer}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#808080",
                color: "#ffffff",
                padding: "10px 20px",
                minWidth: "130px",
                "&:hover": {
                  bgcolor: "#ffffff",
                  color: "#1C1C1C", 
                },
              }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#ffffff",
                color: "#ffffff",
                padding: "10px 20px",
                minWidth: "130px",
                bgcolor: "#1e90ff",
                "&:hover": {
                  bgcolor: "#ffffff",
                  color: "#1C1C1C", 
                },
              }}
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
