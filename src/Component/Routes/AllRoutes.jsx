import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import Product from '../Pages/Product'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/products'element={<Product/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes