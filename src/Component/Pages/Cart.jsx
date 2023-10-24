import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/Cart.css";
import { HiEye, HiPlus } from "react-icons/hi2";
import { BiMinus } from "react-icons/bi";

const Cart = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(" http://localhost:6000/cart")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {data.map((e) => {
        return (
          <div className="cart-section mx-auto py-5  d-flex">
            <div className="cart-img">
              <img src={e.images} alt="" />
            </div>
            <div className="cart-details">
              <h3>{e.name}</h3>
              <span>Black Steel</span>
              <div className="all ">
                <div className="products-count ">
                  <span>
                    <BiMinus />
                  </span>
                  <span>0</span>
                  <span>
                    <HiPlus />
                  </span>
                </div>
                <div className="cart-price">
                  <h4>4,499</h4>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
