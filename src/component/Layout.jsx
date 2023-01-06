import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '.'
import { Sidebar } from '../pages'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Sidebar />
    </>
  )
}

export default Layout
