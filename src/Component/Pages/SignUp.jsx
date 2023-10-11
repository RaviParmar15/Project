import React, { useState } from "react";
import Signup from "../css/Signup.css";
import { Form } from "react-bootstrap";
import Login from '../Pages/Login'
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pageChange, sucess } from "../Redux/Action";
// import Swal from 'sweetalert2'

const SignUp = ({setToggle,toggle}) => {
  const [name,setName]=useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const val = useSelector(store=>store)
  const dispatch=useDispatch()


  const HandleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email,password);
    let user ={
      name:name,
      email:email,
      password:password,
    }
    axios.post(`http://localhost:5000/User`,user)
    .then((res)=>{
      dispatch(SignUp())
        alert("Your Account Created!")

      
    })
    .catch((err)=>{
      
    })

  }
  return (
    <div className="main-box" >
      <div className="box">
        <div className="Login-box  ">
          <div className=" Heading-box  text-blck ">
          <div className="l" >
            <h4 >Create Account</h4>
          </div>
          <div className="s">
        <span>Ignite the #fireinyou</span>
          </div>
          </div>
          <div id="Input-box">
            <Form onSubmit={HandleSubmit}>
              <label>first Name</label>
              <input type="text"  onChange={(e)=>setName(e.target.value)} />
              <label>Email</label>
              <input type="email"  onChange={(e)=>setEmail(e.target.value)} />
              <label>Password</label>
              <input type="password"  onChange={(e)=>setPassword(e.target.value)} />
              <input type="submit" className="Submit" value={"Continue"} />
              <p  style={{color:"#000000"}}>
              Already have an account? 
                <span onClick={()=>setToggle(!toggle)}  href="" className=" Link fw-bold" style={{ color: "#000000",padding:"5px",cursor:"pointer" }}>
                   Login
                </span>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
