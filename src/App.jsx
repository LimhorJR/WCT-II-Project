import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import ProductDetail from './Component/ProductDetail'
import Login from './pages/Login'
import NavbarLayout from './AppLayout/NavbarLayout'

const App = () => {
  return (
    <BrowserRouter>        
            <Routes>
              <Route element={<NavbarLayout />} >
                <Route path='/' element={<HomePage/>} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/product' element={<ProductDetail />} />
                <Route path='/login' element={<Login />} />
              </Route>
            </Routes>
        
    </BrowserRouter>
  )
}

export default App
