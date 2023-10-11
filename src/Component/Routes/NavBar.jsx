import React from "react";
import { render } from "@testing-library/react";
import { Link, NavLink, Outlet } from "react-router-dom";
// import { Button } from "bootstrap";
// import Navbar from 'react-bootstrap/Navbar';
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/NavBar.css";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";


const NavBar = () => {
  return (
    <div>
      <header className="">
        <div className="header ">
          <div className="Logo">
            <Link to="home">
              <img
                src="https://www.fireboltt.com/cdn/shop/files/R9FECJR_150x.png?v=1667483533"
                alt=""
              />
            </Link>
          </div>

          <div id="nav-box">
          <Link className="Link fw-bold" to="/products">Products</Link>
          <Link className="Link">Upcoming</Link>
          <Link className="Link fw-bold">Deals💰</Link>
          <Link className="Link">More</Link>

            {/* <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="What are you looking for ? "
                    className="mr-sm-2"
                    id="searchingBar"
                  />
                </Col>
              </Row>
            </Form> */}
          </div>
          <div className="header-3">
            {/* <Link className="Link" to='/signup'> Signup</Link> */}
            <Link className="Link" to="/login"><AiOutlineUser id="u-icon" /></Link>
            <Link className="" id="l-icon"><BsHandbag/></Link>
          </div>
        </div>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default NavBar;
