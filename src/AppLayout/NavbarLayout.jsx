import React from 'react'
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router-dom';

function NavbarLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default NavbarLayout;