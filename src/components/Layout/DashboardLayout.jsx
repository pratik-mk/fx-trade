import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import logo from "../../assets/logo.svg";
import GridViewIcon from "@mui/icons-material/GridView";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";
import Dialog from "../Dialog/Dialog";

const DashboardLayout = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <>
      <div className={styles.sideNavbar}>
        <div className={styles.logo}>
          <img src={logo} alt="tradr logo" />
        </div>
        <div className={styles.navLinks}>
          <div
            className={`${styles.navItem} ${activeLink === "dashboard" ? styles.active : ""}`}
            onClick={() => handleLinkClick("dashboard")}
          >
            <GridViewIcon />
          </div>
          <div
            className={`${styles.navItem} ${activeLink === "admin" ? styles.active : ""}`}
            onClick={() => handleLinkClick("admin")}
          >
            <AdminPanelSettingsOutlinedIcon />
          </div>
          <div
            className={`${styles.navItem} ${activeLink === "shield" ? styles.active : ""}`}
            onClick={() => handleLinkClick("shield")}
          >
            <ShieldOutlinedIcon />
          </div>
        </div>
        <div
          className={`${styles.logout} ${styles.marginTopAuto}`}
          onClick={handleOpen}
        >
          <LogoutIcon />
        </div>
      </div>
      <div className={styles.content}>
      <Typography
          sx={{
            fontSize: "30px", 
            color: "#fff",
            fontWeight: "bold", 
          }}
          gutterBottom
        >
          {title}
        </Typography>
        {children}
      </div>
      <Dialog open={open} handleClose={handleClose} />
    </>
  );
};

export default DashboardLayout;
