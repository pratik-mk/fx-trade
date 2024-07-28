import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import { Box } from "@mui/material";
import moment from "moment";
import styles from "./DateRangePicker.module.css";

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
  };

  const handleSubmit = () => {
    handleDateFilter({
      start_date: moment(startDate).format("YYYY-MM-DD"),
      end_date: moment(endDate).format("YYYY-MM-DD"),
    });
    setShowPopup(false);
  };

  return (
    <div className={styles.dateRangePickerContainer} ref={popupRef}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Button
          sx={{
            padding: "12px 20px",
            textTransform: "capitalize",
            gap: "10px",
            fontSize: "16px",
            borderRadius: "6px",
            backgroundColor: "#1C1C1C",
            color: "#ffffff",
            "&:hover": {
              bgcolor: "#333333", // Change the hover background color
            },
          }}
          variant="contained"
          onClick={() => setShowPopup(!showPopup)}
        >
          <EventNoteOutlinedIcon />
          Calendar
        </Button>
        {showPopup && (
          <div className={styles.popUp}>
            <div className={styles.popUpItem}>
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
            <Box className={styles.dateFields}>
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
            <Box className={styles.buttonContainer}>
              <Button
                sx={{
                  backgroundColor: "#1e90ff",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                  color: "#1C1C1C",
                  padding: "12px 20px",
                  width: "100%",
                }}
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </div>
        )}
      </LocalizationProvider>
    </div>
  );
};

export default DateRangePicker;
