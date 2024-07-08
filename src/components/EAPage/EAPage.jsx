import React from 'react'
import TopEAs from '../TopEAs/TopEAs'
import SideNavbar from '../Layout/SideNavbar'
import data from '../../mockdataEA.json'

const EAPage = () => {
  return (
    <SideNavbar>
      <TopEAs data={data} />
    </SideNavbar>
  )
}

export default EAPage
