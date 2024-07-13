import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";
import { TOP_EA_COLUMNS } from "../utils/constant";
import EATable from "../components/Table/EATable/EATable";
import { Box, CircularProgress, Typography } from "@mui/material";
import FilterButton from "../components/FilterButton/FilterButton";
import DateRangePicker from "../components/DateRangePicker/DateRangePicker";
import SearchBar from "../components/SearchBar/SearchBar";
import { getTopEa } from "../services/api";

const TopEA = () => {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});
  const [dateFilter, setDateFilter] = useState({});

  const handleApplyFilters = (appliedFilters) => {
    console.log("Applied Filters:", appliedFilters);
    setFilters(appliedFilters);
  };

  const handleDateRangeFilter = (dateRangeFilter) => {
    console.log("Applied Date Filters:", dateRangeFilter);
    setDateFilter(dateRangeFilter);
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      const combinedFilters = { ...filters, ...dateFilter };
      const query = new URLSearchParams(
        Object.fromEntries(
          Object.entries(combinedFilters).filter(
            ([_, v]) => v != null && v !== ""
          )
        )
      ).toString();

      try {
        const response = await getTopEa(query);
        setRes(response.data.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [filters, dateFilter]);

  if (loading) {
    return (
      <DashboardLayout title={"Find Top EAs"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout title={"Find Top EAs"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </Box>
      </DashboardLayout>
    );
  }

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
          <FilterButton onApply={handleApplyFilters} />
          <DateRangePicker handleDateFilter={handleDateRangeFilter} />
        </Box>
      </Box>
      {res ? (
        Object.keys(res).map((rowData, i) => (
          <EATable
            key={i}
            rows={res[rowData].data}
            columns={TOP_EA_COLUMNS}
            isEven={parseInt(rowData.split("-")[1]) % 2 === 0}
            rowData={rowData}
          />
        ))
      ) : (
        <Typography variant="h6" color="textSecondary">
          No data available
        </Typography>
      )}
    </DashboardLayout>
  );
};

export default TopEA;
