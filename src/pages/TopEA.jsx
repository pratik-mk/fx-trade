import React from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";
import data from "../mockData/topEAResponse.json";
import { TOP_EA_COLUMNS } from "../utils/constant";
import EATable from "../components/Table/EATable/EATable";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Button } from "@mui/material";
import FilterButton from "../components/FilterButton/FilterButton";
import DateRangePicker from "../components/DateRangePicker/DateRangePicker";
import SearchBar from "../components/SearchBar/SearchBar";

const TopEA = () => {
  return (
    <DashboardLayout title={"Find Top EAs"}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#060606",
          padding: "25px",
          marginLeft: "120px",
          borderRadius: "6px",
        }}
      >
        <Box sx={{ width: "400px" }}>
          <SearchBar />
        </Box>
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <FilterButton />
          <DateRangePicker />
        </Box>
      </Box>
      {Object.keys(data.data.data).map((rowData, i) => (
        <EATable
          key={i}
          rows={data.data.data[rowData].data}
          columns={TOP_EA_COLUMNS}
          isEven={rowData.split("-")[1] % 2 === 0 ? true : false}
          rowData={rowData}
        />
      ))}
    </DashboardLayout>
  );
};

export default TopEA;
