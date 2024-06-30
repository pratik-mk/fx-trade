import React from 'react'
import SideNavbar from '../components/Layout/SideNavbar'
import BasicTable from '../components/CustomTable/CustomTable'

const TopEA = () => {
  return (
    <SideNavbar>
        <BasicTable isEven/>
        <BasicTable isEven={false}/>
    </SideNavbar>
  )
}

export default TopEA