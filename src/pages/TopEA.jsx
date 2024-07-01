import React from 'react'
import SideNavbar from '../components/Layout/SideNavbar'
import BasicTable from '../components/CustomTable/CustomTable'

const TopEA = () => {
  return (
    <SideNavbar>
        <BasicTable isEven={true} label="01-10"/>
        <BasicTable isEven={false} label="11-20"/>
    </SideNavbar>
  )
}

export default TopEA