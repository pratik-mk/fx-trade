import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./DateRangePicker.css";
import { Box } from "@mui/material";
import moment from "moment";

const DATE_SIZE = 32;
const DATE_SIZE_STYLE = {
  "& > div": {
    minWidth: 256,
  },
  "& > div > div, & > div > div > div, & .MuiCalendarPicker-root": {
    width: 256,
  },
  "& .MuiTypography-caption": {
    width: DATE_SIZE,
    margin: 0,
  },
  "& .PrivatePickersSlideTransition-root": {
    minHeight: DATE_SIZE * 6,
  },
  '& .PrivatePickersSlideTransition-root [role="row"]': {
    margin: 0,
  },
  "& .MuiPickersDay-dayWithMargin": {
    margin: 0,
  },
  "& .MuiPickersDay-root": {
    width: DATE_SIZE,
    height: DATE_SIZE,
  },
};

const DateRangePicker = ({ handleDateFilter }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showStartPicker, setShowStartPicker] = useState(true);
  const [showEndPicker, setShowEndPicker] = useState(false);
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
    setShowStartPicker(false);
    setShowEndPicker(true);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    // setShowEndPicker(false);
  };

  const handleSubmit = () => {
    handleDateFilter({
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
    });
  };

  return (
    <div className="dateRangePickerContainer" ref={popupRef}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
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
              {showStartPicker && (
                <Box sx={DATE_SIZE_STYLE}>
                  <StaticDatePicker
                    inputProps={{ size: "small" }}
                    value={startDate}
                    onChange={handleStartDateChange}
                  />
                </Box>
              )}
              {showEndPicker && (
                <Box sx={DATE_SIZE_STYLE}>
                  <StaticDatePicker
                    inputProps={{ size: "small" }}
                    value={endDate}
                    onChange={handleEndDateChange}
                    minDate={startDate}
                  />
                </Box>
              )}
            </div>
            <Box sx={{ display: "flex", gap: "10px", padding: "25px 0" }}>
              <TextField
                label="Start Date"
                value={startDate ? startDate.toString() : ""}
                onClick={() => {
                  setShowStartPicker(true);
                  setShowEndPicker(false);
                }}
                readOnly
              />
              <TextField
                label="End Date"
                value={endDate ? endDate.toString() : ""}
                onClick={() => startDate && setShowEndPicker(true)}
                readOnly
              />
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
      </LocalizationProvider>
    </div>
  );
};

export default DateRangePicker;
