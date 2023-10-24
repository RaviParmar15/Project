import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import Product from '../Pages/Product'
import SinglePage from '../Pages/SinglePage'
import LoginSignup from '../Pages/LoginSignup'
import { Card } from 'react-bootstrap'
import { PageNotfound } from '../Pages/PageNotfound'
import Cart from '../Pages/Cart'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<LoginSignup/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/products'element={<Product/>}/>
            <Route path='/products/:id'element={<SinglePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<PageNotfound/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes