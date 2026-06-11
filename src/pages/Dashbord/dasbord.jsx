import React from 'react'
import DashboardLayout from '../../components/Dashbord/DashboardLayout'
import PageTitle from '../../components/pagetitle'
function dasbord() {
  return (
    <div>
      <PageTitle title="titles.dashboard"/>
      <DashboardLayout />
    </div>
  )
}

export default dasbord