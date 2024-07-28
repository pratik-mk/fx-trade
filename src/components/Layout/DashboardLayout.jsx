import React, { useState } from "react";
import { useLocation, useNavigate,Link } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLinkClick = (linkName) => {
    navigate(`/${linkName}`);
  };

  const getActiveLink = () => {
    if (location.pathname.includes("top-ea")) return "top-ea";
    if (location.pathname.includes("admin")) return "admin";
    if (location.pathname.includes("api-test")) return "api-test";
    return "";
  };

  const activeLink = getActiveLink();

  return (
    <>
      <div className={styles.sideNavbar}>
        <div className={styles.logo}>
        <Link to="/top-ea"><img src={logo} alt="tradr logo" /></Link>
        </div>
        <div className={styles.navLinks}>
          <div
            className={`${styles.navItem} ${activeLink === "top-ea" ? styles.active : ""}`}
            onClick={() => handleLinkClick("top-ea")}
          >
            <GridViewIcon />
          </div>
          <div
            className={`${styles.navItem} ${activeLink === "api-test" ? styles.active : ""}`}
          >
            <AdminPanelSettingsOutlinedIcon />
          </div>
          <div
            className={`${styles.navItem} ${activeLink === "api-test" ? styles.active : ""}`}
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
