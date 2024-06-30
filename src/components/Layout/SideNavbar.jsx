import React from 'react';
import './style.css';
import logo from '../assests/logo.svg.svg'
import GridViewIcon from '@mui/icons-material/GridView';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';

const SideNavbar = ({children}) => {
  return (
    <>
    <div className='side-navbar'>
      <div className='logo'>
        <img src={logo} alt='tradr logo'/>
      </div>
      <div className='nav-links'>
       <ul >
          <li><GridViewIcon/></li>
          <li><AdminPanelSettingsOutlinedIcon/></li>
          <li><ShieldOutlinedIcon/></li>
          <li className='logout'><LogoutIcon /></li> 
       </ul>
      </div>
      
    </div>
    <div className='namee'>
    <Typography variant="h5" gutterBottom>
         FindTopEas
      </Typography>
    </div>
    <div>
      {children}
    </div>

    </>
    
  );
}

export default SideNavbar;
