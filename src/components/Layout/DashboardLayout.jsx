import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import GridViewIcon from "@mui/icons-material/GridView";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";
import Dialog from "../Dialog/Dialog";

const DashboardLayout = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="side-navbar">
        <div className="logo">
          <img src={logo} alt="tradr logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <GridViewIcon />
            </li>
            <li>
              <AdminPanelSettingsOutlinedIcon />
            </li>
            <li>
              <ShieldOutlinedIcon />
            </li>
            <li className="logout" onClick={handleOpen}>
              <LogoutIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="namee">
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
      </div>
      <div>{children}</div>
      <Dialog open={open} handleClose={handleClose} />
    </>
  );
};

export default DashboardLayout;
