import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./DateRangePicker.css";
import { Box } from "@mui/material";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = () => {
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    setShowPopup(false);
  };

  return (
    <div className="dateRangePickerContainer" ref={popupRef}>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setShowPopup(!showPopup)}
        className="dateRangePickerButton"
      >
        <CalendarMonthIcon />
        Select Dates
      </Button>
      {showPopup && (
        <div className="popUp">
          <div className="popUpItem">
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <StaticDatePicker
                label="End Date"
                value={endDate}
                onChange={handleEndDateChange}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </div>
          <Box sx={{ display: "flex", gap: "10px", padding: "25px 0" }}>
            <TextField id="start-date" label="Start Date" variant="outlined" />
            <TextField id="end-date" label="End Date" variant="outlined" />
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className="submitButton"
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
