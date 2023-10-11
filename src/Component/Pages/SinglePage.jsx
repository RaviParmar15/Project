import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../css/Products.css';


const SinglePage = () => {
    const [data ,setData]=useState("")
    const {id}=useParams()
    console.log(id);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            setData(res.data)

        })
        .catch((err)=>{

        })
    },[])
  return (
    <div className='details '>
        <div className=''>
        <img src={data.image} alt={data.title} />
        <h1>{data.title}</h1>
        <h1>category : {data.category}</h1>
        <h5>Price : ₹ <span >{data.price}</span></h5>
        <span className='fw-bolt'>description : <h6 >{data.description}</h6></span>
    </div>
    </div>
  )
}

export default SinglePage