import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import GridViewIcon from "@mui/icons-material/GridView";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Dialog from "../Dialog/Dialog";

const DashboardLayout = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="side-navbar">
        <Box
          className="logo"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img src={logo} alt="tradr logo" />
        </Box>
        <Box
          className="nav-links"
          display="flex"
          flexDirection="column"
          alignItems="center"
          flexGrow={1}
        >
          <Box
            className="nav-item"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <GridViewIcon />
          </Box>
          <Box
            className="nav-item"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <AdminPanelSettingsOutlinedIcon />
          </Box>
          <Box
            className="nav-item"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ShieldOutlinedIcon />
          </Box>
        </Box>
        <Box
          className="logout"
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={handleOpen}
          sx={{ marginTop: "auto", paddingBottom: 2 }}
        >
          <LogoutIcon />
        </Box>
      </div>
      <div className="content">
        <Box>
          <Typography sx={{ fontSize: "30px" }} gutterBottom>
            {title}
          </Typography>
          {children}
        </Box>
      </div>
      <Dialog open={open} handleClose={handleClose} />
    </>
  );
};

export default DashboardLayout;
