import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FetchingData} from '../Redux/ProductsRedux/Action'

const Product = () => {
  const data = useSelector((store) => store.ProReducer);
  console.log(data.isloading);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(FetchingData)
  })

  return(
    <div></div>

  ) ;
};

export default Product;
