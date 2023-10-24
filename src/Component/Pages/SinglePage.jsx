import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../css/Products.css";
import singlePage from "../css/singlePage.css";

const SinglePage = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://firebolt-b3qw.onrender.com/Products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
  const handleclick = () => {
    let obj ={
      ...data,
      count:1,
    }
    axios.post("http://localhost:5000/cart",obj)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })

  };
  return (
    <div className="details w-100 ">
      <div className="Single-box   ">
        <div className="watch-img p-b  ">
          <img src={data.images} alt="" />
        </div>
        <div className="watch-title ">
          <h1>{data.name}</h1>
          <h5>
            Sale Price:₹ {data.price}{" "}
            <del style={{ fontSize: "16px" }}>₹12,999</del>{" "}
          </h5>
          <span>{data.color}</span>
          <br />
          <button onClick={handleclick}>Add To Cart</button>
          <h6>{data.description}
          </h6>
        </div>
      </div>
      <div className="details-img ">
        <img 
          src={data.descimages}
          alt=""
        />
      </div>
    </div>
  );
};

export default SinglePage;
