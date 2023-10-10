import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Lodding } from "../Redux/Action";
// import Swal from 'sweetalert2'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const val = useSelector(store => store);
  const dispatch = useDispatch();
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/User?email=${email}`)
      .then((res) => {
        dispatch(Lodding(res.data[0]));
        if (res.data.length > 0) {
          if (res.data[0].email == email && res.data[0].password == password) {
            alert("login success");
          } else {
            alert("login failed");
           
          }
        } else {
          alert("User Not Registered");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="box">
        <div className="Login-box  ">
          <div className=" Heading-box  text-blck ">
            <div className="l">
              <h4>Login</h4>
            </div>
            <div className="s">
              <span>Ignite the #fireinyou</span>
            </div>
          </div>
          <div id="Input-box">
            <Form onSubmit={HandleSubmit}>
              <label>Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type="submit" className="Submit" value={"Continue"} />
              <p style={{ color: "#000000" }}>
                Don't have an account yet?
                <a
                  href=""
                  className=" Link fw-bold"
                  style={{ color: "#000000", padding: "5px" }}
                >
                  Create account
                </a>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
