import React from 'react'
import HomeNavbar from '../assets/components/shared/HomeNavbar/HomeNavbar'
import { Outlet } from 'react-router'
import LeftSidebar from '../assets/components/shared/HomeSidebar/LeftSidebar'

const MainLayout = () => {
  return (
    <div className='min-h-screen'>
        <div className=' sticky  top-0'>
            <HomeNavbar></HomeNavbar>
        </div>
        <div className='grid md:grid-cols-12 '>
            <div className='hidden md:block md:col-span-3'>
                <LeftSidebar></LeftSidebar>    
            </div>
            <div className='col-span-12 md:col-span-6'>
                <Outlet></Outlet>
            </div>
            <div className='hidden md:block md:col-span-3'>

            </div>

        </div>
    </div>
  )
}

export default MainLayout
