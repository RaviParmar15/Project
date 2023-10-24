import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchingData } from "../Redux/ProductsRedux/Action";
import "../css/Products.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
// import "../css/Home.css";/

const Product = () => {
  const { data } = useSelector((store) => store.ProReducer) || [];
  console.log(data.Products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchingData);
  }, []);

  return (
    <div className="">
    <h1 className="text-center m-0">Smart Watches</h1>
  
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}} >
     
      { (
        data.map((ele) => (
          <div className="main-div  " key={ele.id}>
            <div className="products ">
            </div>
            <div className="section-6 py-5 ">
                <div className="launch-box  ">
                  <div className="main-img-box ">
                  <Link className="link" to={`./${ele.id}`}>

                    <div className="launch-img ">
                      <img src={ele.images} alt="" />
                    </div>
                    <div className="l-img-title ">
                      <div className="appollo">
                        <h5>{ele.name}</h5>
                      </div>
                      <div className="star">
                        <img
                          src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-star-icon-png-image_4231909.jpg"
                          alt=""
                        />
                        <span className="">{ele.rating}</span>
                      </div>
                    </div>
                    <div className="color-part ">
                      <div className="blck"></div>
                      <div className="creem"></div>
                      <div className="more">
                        <span>+ 2 more </span>
                      </div>
                    </div>
                    <div className="amoled">
                      <h6>AMOLED | BT Calling</h6>
                    </div>
                    <div className="payment ">
                      <div className="price">
                        <h6>₹{ele.price}</h6>
                      </div>
                      <div className="add-cart">
                        <input type="button" value="Add to cart" />
                      </div>
                    </div>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        ))
      // ) : (
        // <div className="lodding "><h1>lodding</h1></div>
      )}
    </div>
    </div>
  );
};

export default Product;
