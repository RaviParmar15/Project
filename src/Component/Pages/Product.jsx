import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FetchingData} from '../Redux/ProductsRedux/Action'
import Products from '../css/Products.css';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../css/Home.css";


const Product = () => {
  const {data} = useSelector((store) => store.ProReducer);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(FetchingData)
  },[])

  return(
    <div>
      {
        data.map((ele)=>(
          <div className=" main-div" key={ele.id}>
          <div  className="products ">
          <Link className="link" to={`./${ele.id}`}>
            <img src={ele.image} alt="" />
            <h1>{ele.title}</h1>
            <h5> Price : ₹ {ele.price}</h5>
            <h5>category : {ele.category}</h5>
            </Link>
          </div>
          </div>
        ))
      }
    </div>

  ) ;
};

export default Product;
