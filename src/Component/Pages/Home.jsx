import React from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";


// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import "../css/Home.css";
const Home = () => {
  return (
    <div className=" ">
      <section className="carousel">
        <div>
          <Row>
            <Col>
              <Carousel fade>
                <Carousel.Item interval={2000}>
                  <img
                    src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_copy_ff6eace4-5a37-44a4-afe0-a1060356632c.jpg?v=16024593801065289817"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_3_1238da26-f06a-4ea9-a5e3-1d80835c606f_1759x.jpg?v=1696324513"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    src="https://www.fireboltt.com/cdn/shop/files/Artboard_6_e489ab3a-7cf4-4e7c-ae46-33f0d84e890e_1759x.jpg?v=1692363993"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_6f0eac7b-671b-490d-8020-927ecc034396_1759x.jpg?v=1697092223 "
                    alt=""
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </div>
      </section>
      <div className="section-2 py-5">
        <Container>
          <div className=" d-flex ">
            <div className="pe-4">
              <div className="img-1">
                <img
                  src="https://www.fireboltt.com/cdn/shop/files/2_b6eb93e9-1d0d-44b1-a123-c1990445d6e2_95x.png?v=1685365655"
                  alt=""
                />
              </div>
              <div className="heding-name">
                <h5>Quantum</h5>
              </div>
            </div>
            <div className="pe-4">
              <div className="img-1">
                <img
                  src="https://www.fireboltt.com/cdn/shop/files/asteroid-black_1_95x.png?v=1692944179"
                  alt=""
                />
              </div>
              <div className="heding-name">
                <h5>Asteroid</h5>
              </div>
            </div>
            <div className="pe-4">
              <div className="img-1">
                <img
                  src="https://www.fireboltt.com/cdn/shop/files/phoenix-amoled-ultra-ace-black_1_95x.png?v=1693887757"
                  alt=""
                />
              </div>
              <div className="heding-name">
                <h5>Phoenix AMOLED</h5>
              </div>
            </div>
            <div className="pe-4">
              <div className="img-1">
                <img
                  src="https://www.fireboltt.com/cdn/shop/products/supernova-black_1_95x.png?v=1673500420"
                  alt=""
                />
              </div>
              <div className="heding-name">
                <h5>Supernova</h5>
              </div>
            </div>
            <div className="pe-4">
              <div className="img-1">
                <img
                  src="https://www.fireboltt.com/cdn/shop/products/Invincible-PlusArtboard-22_95x.png?v=1678184820"
                  alt=""
                />
              </div>
              <div className="heding-name">
                <h5>Invincible Plus</h5>
              </div>
            </div>
            <div className="pe-4">
              <div className="img-1">
                <img
                  src="https://www.fireboltt.com/cdn/shop/products/ninja-3-plus-2_95x.png?v=1682363784"
                  alt=""
                />
              </div>
              <div className="heding-name">
                <h5>Ninja 3 Plus</h5>
              </div>
            </div>
            <div className="pe-4">
              <div className="img-1">
                <img
                  src="https://www.fireboltt.com/cdn/shop/files/hunter-black_1_95x.png?v=1683616949"
                  alt=""
                />
              </div>
              <div className="heding-name">
                <h5>Hunter</h5>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="section-3">
        <Container>
          <div className="title">
            <h1>
              Fire-Boltt | <span>Ignite the fire in you</span>
            </h1>
          </div>
          <div className="main-chart py-5 d-flex">
            <div className="chart d-flex">
              <div className="groth">
                <img
                  src="https://www.fireboltt.com/cdn/shop/files/growth.gif?v=6149664055454190024"
                  alt=""
                />
              </div>
              <div className="groth-title ">
                <span>1300% YOY</span>
                <h6>400% QOQ Growth</h6>
              </div>
            </div>
            <div className="chart d-flex">
              <div className="groth">
                <img
                  src="https://www.fireboltt.com/cdn/shop/files/stopwatch.gif.gif?37006"
                  alt=""
                />
              </div>
              <div className="groth-title ">
                <span>1 Unit Sold</span>
                <h6>Every 05 Sec</h6>
              </div>
            </div>
            <div className="chart d-flex">
              <div className="groth">
                <img
                  className="p-2"
                  src="https://static.vecteezy.com/system/resources/thumbnails/022/973/099/small/3d-pie-chart-percentage-infographic-isometric-puzzle-circular-template-report-business-analytics-data-png.png"
                  alt=""
                />
              </div>
              <div className="groth-title ">
                <span>Units </span>
                <h6>Solid</h6>
              </div>
            </div>
            <div className="chart d-flex">
              <div className="groth">
                <img
                  src="https://www.fireboltt.com/cdn/shop/files/review.gif?v=6281934118567879272"
                  alt=""
                />
              </div>
              <div className="groth-title ">
                <span>2Mn+ Product</span>
                <h6>Reviews</h6>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* section-4 */}
      <div className="section-4 py-5 ">
        <div className="title-watch">
          <h1>
            Explore <span>Bestsellers</span>{" "}
          </h1>
          <div className="Border"></div>
        </div>
        <Container>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="slider">
              <img
                src="https://www.fireboltt.com/cdn/shop/files/1_cd92ee1e-60a2-48f9-96c6-fe22cddad873.jpg?v=1696423863"
                alt=""
              />
              <h5>Gladiator</h5>
            </SwiperSlide>
            <SwiperSlide className="slider">
              <img
                src="https://www.fireboltt.com/cdn/shop/files/Artboard_1_4_c4ebd3f5-8796-4684-9d3c-dcf59c0225a4.jpg?v=1696424929"
                alt=""
              />
              <h5>Ultimate</h5>
            </SwiperSlide>
            <SwiperSlide className="slider">
              <img
                src="https://www.fireboltt.com/cdn/shop/files/1_1_0d8d9e77-0f21-4b31-b3ec-748a0cd53565.jpg?v=1696423983"
                alt=""
              />
              <h5>Phoenix Ace</h5>
            </SwiperSlide>
            <SwiperSlide className="slider">
              <img
                src="https://www.fireboltt.com/cdn/shop/files/1_11.jpg?v=1691736827"
                alt=""
              />
              <h5>Supernova</h5>
            </SwiperSlide>
            <SwiperSlide className="slider">
              <img
                src="https://www.fireboltt.com/cdn/shop/files/1_10_89eb3f39-5c5b-4a90-9985-c3b5eda9359e_600x.jpg?v=1691739495"
                alt=""
              />
              <h5>Legacy</h5>
            </SwiperSlide>
            <SwiperSlide className="slider">
              <img
                src="https://www.fireboltt.com/cdn/shop/files/1_9_0b4747a4-08df-44df-94cf-7b3dcea64566.jpg?v=1691736827"
                alt=""
              />
              <h5>Invincible Plus</h5>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
      {/* section-5  */}
      <div className="section-5 py-5">
        <Container>
          <div className="title-watch">
            <h1>
              Shop By <span>Categories</span>{" "}
            </h1>
            <div className="Border"></div>
          </div>
          <div className="">
            <div className="">
              <div className="catagory d-flex ">
                <div className="shop-image">
                  <img
                    src="https://www.fireboltt.com/cdn/shop/files/luxe-edition_1024x1024.png?v=1690276328"
                    alt=""
                  />
                  <div className="shop-name">
                    <h5>Luxe edition</h5>
                  </div>
                </div>

                <div className="shop-image">
                  <img
                    src="https://www.fireboltt.com/cdn/shop/files/bluetooth-calling_1024x1024.png?v=169028019  "
                    alt=""
                  />
                  <div className="shop-name">
                    <h5>Bluetooth calling</h5>
                  </div>
                </div>

                <div className="shop-image">
                  <img
                    src="https://www.fireboltt.com/cdn/shop/files/amoled-display_1024x1024.png?v=1690280196 "
                    alt=""
                  />
                  <div className="shop-name">
                    <h5>Amoled display</h5>
                  </div>
                </div>

                <div className="shop-image">
                  <img
                    src="https://www.fireboltt.com/cdn/shop/files/outdoor-series_1024x1024.png?v=1690280196 "
                    alt=""
                  />
                  <div className="shop-name">
                    <h5>Outdoor series</h5>
                  </div>
                </div>

                <div className="shop-image">
                  <img
                    src="https://www.fireboltt.com/cdn/shop/files/ninja-series_1024x1024.png?v=1690280196  "
                    alt=""
                  />
                  <div className="shop-name">
                    <h5>Ninja series</h5>
                  </div>
                </div>

                <div className="shop-image">
                  <img
                    src="https://www.fireboltt.com/cdn/shop/files/audio-series_1024x1024.png?v=1690280196  "
                    alt=""
                  />
                  <div className="shop-name">
                    <h5>Audio series</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* section-6  */}

      <div className="section-6 ">
        <Container>
        <div className="title-watch">
          <h1>
            New <span>Launches</span>{" "}
          </h1>
          <div className="Border"></div>
        </div>
        <div className="launch ">
          <div className="recently-launch">
            <span>Recently Launched</span>
          </div>
          <div className=" upcomming-launch">
            <span>Upcoming Launches </span>
          </div>
        </div>
        <div className="launch-box d-flex ">
          <div className="main-img-box">
          <div className="launch-img">
            <img src="https://www.fireboltt.com/cdn/shop/files/apollo-3-black_1_360x.png?v=1694778271" alt="" />
          </div>
          <div className="l-img-title ">
            <div className="appollo "><h5>Apollo 3</h5></div>
            <div className="star">
            <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-star-icon-png-image_4231909.jpg" alt="" />
            <span className="">4.6</span>
            </div>
          </div>
          <div className="color-part  ">
            <div className="blck"></div>
            <div className="creem"></div>
            <div className="more"><span>+ 2 more </span></div>
          </div>
          <div className="amoled"><h6>AMOLED | BT Calling</h6></div>
          <div className="payment ">
            <div className="price"><h6>₹2,199</h6></div>
            <div className="add-cart"><input type="button"value="Add to cart" /></div>
          </div>
          </div>
          <div className="main-img-box">
          <div className="launch-img">
            <img src="https://www.fireboltt.com/cdn/shop/files/phoenix-amoled-ultra-ace-black_1_540x.png?v=1693887757" alt="" />
          </div>
          <div className="l-img-title ">
            <div className="appollo"><h5>Phoenix AMOLED Ultra</h5></div>
            <div className="star">
            <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-star-icon-png-image_4231909.jpg" alt="" />
            <span className="">4.8</span>

            </div>
          </div>
          <div className="color-part ">
            <div style={{ackground: "linear-gradient(133deg, rgb(143 143 143) 47%, rgb(23 23 23) 53%)"}} className="blck "></div>
            <div className="creem"></div>
            <div className="more"><span>+ 1 more </span></div>
          </div>
          <div className="amoled"><h6>AMOLED | BT Calling</h6></div>
          <div className="payment ">
            <div className="price"><h6>₹2,299</h6></div>
            <div className="add-cart"><input type="button"value="Add to cart" /></div>
          </div>
          </div>
          <div className="main-img-box">
          <div className="launch-img">
            <img src="https://www.fireboltt.com/cdn/shop/files/blacksteel_00_360x.png?v=1693909826" alt="" />
          </div>
          <div className="l-img-title ">
            <div className="appollo"><h5>Encore</h5></div>
            <div className="star">
            <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-star-icon-png-image_4231909.jpg" alt="" />
            <span className="">4.8</span>

            </div>
          </div>
          <div className="color-part ">
            <div className="blck"></div>
            <div className="creem"></div>
            <div className="more"><span>+ 1 more </span></div>
          </div>
          <div className="amoled"><h6>AMOLED | BT Calling</h6></div>
          <div className="payment ">
            <div className="price"><h6>₹1,599</h6></div>
            <div className="add-cart"><input type="button"value="Add to cart" /></div>
          </div>
          </div>
          <div className="main-img-box">
          <div className="launch-img">
            <img src="https://www.fireboltt.com/cdn/shop/files/avalanche_Black_01_360x.png?v=1695112152" alt="" />
          </div>
          <div className="l-img-title ">
            <div className="appollo"><h5>Avalanche</h5></div>
            <div className="star">
            <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-star-icon-png-image_4231909.jpg" alt="" />
            <span className="">4.6</span>

            </div>
          </div>
          <div className="color-part ">
            <div className="blck"></div>
            <div className="creem"></div>
            <div className="more"><span>+ 4 more </span></div>
          </div>
          <div className="amoled"><h6>AMOLED | BT Calling</h6></div>
          <div className="payment ">
            <div className="price"><h6>₹2,199</h6></div>
            <div className="add-cart"><input type="button"value="Add to cart" /></div>
          </div>
          </div>
        </div>
        
        </Container>
      </div>
      {/* section-7  */}
      <div className="section-6 py-5 ">
        <Container>
        <div className="title-watch">
          <h1>
             Just  <span>Trending</span>{" "}
          </h1>
          <div className="Border"></div>
        </div>
        {/* <div className="launch ">
          <div className="recently-launch">
            <span>Recently Launched</span>
          </div>
          <div className=" upcomming-launch">
            <span>Upcoming Launches </span>
          </div>
        </div> */}
        <div className="launch-box d-flex ">
          <div className="main-img-box">
          <div className="launch-img">
            <img src="https://www.fireboltt.com/cdn/shop/products/quantum-black_1_540x.png?v=1685365655" alt="" />
          </div>
          <div className="l-img-title ">
            <div className="appollo"><h5>Quantum</h5></div>
            <div className="star">
            <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-star-icon-png-image_4231909.jpg" alt="" />
            <span className="">4.6</span>

            </div>
          </div>
          <div className="color-part ">
            <div className="blck"></div>
            <div className="creem"></div>
            <div className="more"><span>+ 5 more </span></div>
          </div>
          <div className="amoled"><h6>AMOLED | BT Calling</h6></div>
          <div className="payment ">
            <div className="price"><h6>₹1,999</h6></div>
            <div className="add-cart"><input type="button"value="Add to cart" /></div>
          </div>
          </div>
          <div className="main-img-box">
          <div className="launch-img">
            <img src="https://www.fireboltt.com/cdn/shop/files/asteroid-orange_1_540x.png?v=1692944180" alt="" />
          </div>
          <div className="l-img-title ">
            <div className="appollo"><h5>Asteroid</h5></div>
            <div className="star">
            <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-star-icon-png-image_4231909.jpg" alt="" />
            <span className="">4.7</span>

            </div>
          </div>
          <div className="color-part ">
            <div style={{ackground: "linear-gradient(133deg, rgb(143 143 143) 47%, rgb(23 23 23) 53%)"}} className="blck "></div>
            <div className="creem"></div>
            <div className="more"><span>+ 2 more </span></div>
          </div>
          <div className="amoled"><h6>AMOLED | BT Calling</h6></div>
          <div className="payment ">
            <div className="price"><h6>₹1,999</h6></div>
            <div className="add-cart"><input type="button"value="Add to cart" /></div>
          </div>
          </div>
          <div className="main-img-box">
          <div className="launch-img">
            <img src="https://www.fireboltt.com/cdn/shop/files/ultimate-black_1_540x.png?v=1683028277" alt="" />
          </div>
          <div className="l-img-title ">
            <div className="appollo"><h5>Ultimate</h5></div>
            <div className="star">
            <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-star-icon-png-image_4231909.jpg" alt="" />
            <span className="">4.8</span>

            </div>
          </div>
          <div className="color-part ">
            <div className="blck"></div>
            <div className="creem"></div>
            <div className="more"><span>+ 3 more </span></div>
          </div>
          <div className="amoled"><h6>AMOLED | BT Calling</h6></div>
          <div className="payment ">
            <div className="price"><h6>₹1,599</h6></div>
            <div className="add-cart"><input type="button"value="Add to cart" /></div>
          </div>
          </div>
          <div className="main-img-box">
          <div className="launch-img">
            <img src="https://www.fireboltt.com/cdn/shop/products/supernova-black_1_360x.png?v=1673500420" alt="" />
          </div>
          <div className="l-img-title ">
            <div className="appollo"><h5>Supernova</h5></div>
            <div className="star">
            <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-star-icon-png-image_4231909.jpg" alt="" />
            <span className="">4.7</span>

            </div>
          </div>
          <div className="color-part ">
            <div className="blck"></div>
            <div className="creem"></div>
            <div className="more"><span>+ 4 more </span></div>
          </div>
          <div className="amoled"><h6>AMOLED | BT Calling</h6></div>
          <div className="payment ">
            <div className="price"><h6>₹2,199</h6></div>
            <div className="add-cart"><input type="button"value="Add to cart" /></div>
          </div>
          </div>
        </div>
        </Container>
      </div>
      {/* section-8  */}
      <div className="section-8 py-5">
        <img src="https://www.fireboltt.com/cdn/shop/files/fireboltt_banner_1920_2_1700x.jpg?v=1689828512" alt="" />
      </div>
      {/* section-9  */}
      <div className="section-9 py-5">
        <Container>
        <div className="blog">
          <h1>Fire-Boltt Blogs</h1>
          <h5>Guidance and motivation to ignite the fire in you</h5>
        </div>
        <div className="blog-img d-flex">
          <div className="smart-watch">
            <img src="https://www.fireboltt.com/cdn/shop/articles/1_549fd55a-ff5d-4e7d-9cc2-a13845959c18_720x.jpg?v=16953864" alt="" />
            <div className="blog-name">
            <h3>How to use a smartwatch?Your  New Best Friend</h3>
          </div>
          </div>
          <div className="smart-watch">
            <img src="https://www.fireboltt.com/cdn/shop/articles/1_2e3dc742-4bee-40ea-a497-0ea456937f89_720x.jpg?v=1694849285" alt="" />
            <div className="blog-name">
            <h3>Avalanche: The Luxe Revolution On Your Wrist</h3>
          </div>
          </div> <div className="smart-watch">
            <img src="https://www.fireboltt.com/cdn/shop/articles/1_f8fe43a5-8fc4-45e7-b5a4-af36d717491a_720x.jpg?v=1693309005" alt="" />
            <div className="blog-name">
            <h3> A Guide To The Commando Smartwatch</h3>
          </div>
          </div> <div className="smart-watch">
            <img src="https://www.fireboltt.com/cdn/shop/articles/Artboard_1_copy_4_1_720x.png?v=1693038966" alt="" />
            <div className="blog-name">
            <h3>Asteroid Smartwatch: Your Wrist's New Best Friend</h3>
          </div>
          </div>
        </div>
        <div className="read-all"><button> Read All </button></div>

        </Container>
      </div>
      {/* section-10  */}
      <div className="section-10 py-5">
        <Container>
      <div className="blog">
          <h1>In The Press</h1>
          <h5>Places where we have been featured</h5>
        </div> 
        <div className="press-img py-4">
        <div className="w25">
          <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-2_2.png?v=1624868965" alt="" />
        </div>
        <div className="w25">
          <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-4_2.png?v=1624869125" alt="" />
        </div>
        <div className="w25">
          <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-3_2.png?v=1624869051" alt="" />
        </div>
        <div className="w25">
          <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-7_2.png?v=1624869221" alt="" />
        </div>
        <div className="w25">
          <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-5_2.png?v=1624869158" alt="" />
        </div>
        <div className="w25 py-5">
          <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-8_2.png?v=1624869221" alt="" />
        </div>
        <div className="w25">
          <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-6_2.png?v=1624869180" alt="" />
        </div>
        <div className="w25">
          <img src="https://www.fireboltt.com/cdn/shop/files/Press-logo-1_2.png?v=1624868909" alt="" />
        </div>
        </div>
        </Container>

      </div>
      {/* section-11  */}
      <div className="section-11 py-5">
        <Container>
      <div className="blog">
          <h1>Official Partners</h1>
        </div> 
        <div className="press-img py-4">
        <div className="w25 partner">
          <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-6_360x.png?v=1624865581" alt="" />
        </div>
        <div className="w25 partner">
          <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-5_360x.png?v=1624865609" alt="" />
        </div>
        <div className="w25 partner">
          <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-7_180x.png?v=1624865640" alt="" />
        </div>
        <div className="w25 partner">
          <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-4_180x.png?v=1624865676" alt="" />
        </div>
        <div className="w25 partner">
          <img src="https://www.fireboltt.com/cdn/shop/files/Poorvika_horizontal_English_LOGO_360x.png?v=163185295" alt="" />
        </div>
        <div className="w25 partner py-5">
          <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-8-1_360x.png?v=1624865656" alt="" />
        </div>
        <div className="w25 partner">
          <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-3_360x.png?v=1624865548" alt="" />
        </div>
        <div className="w25 partner">
          <img src="https://www.fireboltt.com/cdn/shop/files/Official-partners-logo-1_360x.png?v=1624865647" alt="" />
        </div>
        </div>
        </Container>

      </div>
      {/* section-12  */}
      <div className="section-12 py-5">
        <Container>
        <div className="experiance d-flex">
          <div className=" ex-heading">
            <span>You're paying for </span>
            <br />
            <del>our product</del>
            <br />
            <span>an experience</span>
          </div>
          <div className="w20">
            <div className="medal-img">
              <img src="https://www.fireboltt.com/cdn/shop/files/good-choice_180x.png?v=1666009227" alt="" />
               </div>
               <div className="medal-descrip">
                <strong>100% Genuine Products</strong>
                <p>When you buy directly from FireBoltt.com , you get 100% authentic, top quality products.</p>
               </div>
          </div>
          <div className="w20">
            <div className="medal-img">
              <img src="https://www.fireboltt.com/cdn/shop/files/fast-delivery_180x.png?v=1666009178" alt="" />
               </div>
               <div className="medal-descrip">
                <strong>Super Quick Delivery</strong>
                <p>Enjoy the best of both worlds with FREE & FAST DELIVERY.</p>
               </div>
          </div>
          <div className="w20">
            <div className="medal-img">
              <img src="https://www.fireboltt.com/cdn/shop/files/warranty_180x.png?v=1666009162" alt="" />
               </div>
               <div className="medal-descrip">
                <strong>1 Year Warranty</strong>
                <p>When you buy from us, you pay not for the product but for the experience.</p>
               </div>
          </div>
          <div className="w20">
            <div className="medal-img">
              <img src="https://www.fireboltt.com/cdn/shop/files/india_180x.png?v=1666009269" alt="" />
               </div>
               <div className="medal-descrip">
                <strong>Designed in India</strong>
                <p>Born in India, our products have been reimagined to capture the pulse of India, for India.</p>
               </div>
          </div>
        </div>
        </Container>

      </div>
      {/* footer-section  */}
      <div className="footer ">
        <footer>
          <div className="w100 d-flex ">
            <div className="w25">
              <div className="footer-logo">
                <img src="https://www.fireboltt.com/cdn/shop/files/Background_x32@2x.png?v=1620478900" alt="" />
                <div className="follous"><h3>Follow Us</h3></div>
                <div className="facbook-icon"><CiFacebook id="facbook"/>Like us on Facebook</div>
                <div className="facbook-icon"><FaInstagram id="instagram"/>Join us on Instagram</div>
                <div className="facbook-icon"><AiOutlineYoutube id="youtub"/>Join us on Youtube</div>
              </div>
            </div>
            <div className="w25">
            <div className="products"><h3>Our Products</h3>
            <ul>
            <li><a href="">AMOLED Watches</a></li>
            <li><a href="">Bluetooth Calling Watches</a></li>
            <li><a href="">Audio</a></li>
            <li><a href="">Ninja Series</a></li>
            <li><a href="">Smart watches</a></li>
            <li className="collection">Our Collections</li>
            <li><a href="">No cost EMI</a></li>
            <li><a href="">Offers</a></li>
            </ul>
            </div>
            </div>
            <div className="w25 pt-5">
            <div className="products"><h3>Help Desk</h3>
            <ul>
            <li><a href="">Support</a></li>
            <li><a href="">Service Center</a></li>
            <li><a href="">Track Complaint Status</a></li>
            <li><a href="">Track Your Order</a></li>
            <li><a href="">Warranty Policy</a></li>
            {/* <li className="collection">Register a Complaint</li> */}
            <li><a href="">Register a Complaint</a></li>
            <li><a href="">Influencer Programme</a></li>
            <li><a href="">Shipping and Returns</a></li>
            <li><a href="">Bulk Orders</a></li>
            <li><a href="">Contact Us</a></li>

            </ul>
            </div>
            </div>
            <div className="w25 pt-5">
            <div className="products"><h3>About boltt</h3>
            <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Warranty</a></li>
            <li><a href="">Shipping & Returns</a></li>
            <li><a href="">Read Our Blogs</a></li>
            <li><a href="">Fire-Boltt Authorized Stores</a></li>
            <li><a href="">Recent Stories</a></li>
            <li className="collection">Legal</li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Privacy Policy</a></li>
            </ul>
            </div>
            </div>
          </div>
          <div className="copyright">
            <span> © 2023 Boltt Games Pvt. Ltd. All Rights Reserved. | </span>
          </div>
        </footer>
      </div>
      
    </div>
  );
};

export default Home;
