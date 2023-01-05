import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '.'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
