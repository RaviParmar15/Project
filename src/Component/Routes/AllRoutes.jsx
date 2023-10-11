import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import Product from '../Pages/Product'
import SinglePage from '../Pages/SinglePage'
import LoginSignup from '../Pages/LoginSignup'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/login' element={<LoginSignup/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/products'element={<Product/>}/>
            <Route path='/products/:id'element={<SinglePage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes