import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import "./dashboard.css";

const drawerWidth = 240;

const TestDashboardLayout = ({ title, children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="drawerContent">
      <div>
        <div className="logo">
          <Typography variant="h6">Logo</Typography>
        </div>
        <List>
          {["Home", "Info", "Settings"].map((text, index) => {
            const icons = [<HomeIcon />, <InfoIcon />, <SettingsIcon />];
            return (
              <ListItem button key={text}>
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </div>
      <Button className="logout" startIcon={<LogoutIcon />}>
        Logout
      </Button>
    </div>
  );

  return (
    <div className="root">
      <CssBaseline />
      <AppBar position="fixed" className="appBar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="menuButton"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className="drawer" aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: "drawerPaper",
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          classes={{
            paper: "drawerPaper",
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </nav>
      <main className="content">
        <div className="toolbar" />
        {children}
      </main>
    </div>
  );
};

export default TestDashboardLayout;
