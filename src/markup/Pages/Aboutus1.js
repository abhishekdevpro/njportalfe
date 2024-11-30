import React, { useState, useEffect } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import ReactPlayer from 'react-player';
import { Link, useNavigate } from "react-router-dom";
//import video from '../../assests/HyperV Solutions.mp4';
import logo1 from "../../assests/logo1.jpg";
import logo2 from "../../assests/logo2.jpg";
import logo3 from "../../assests/logo3.jpg";
import logo5 from "../../assests/logo5.jpg";
import pic1 from "../../assests/1 (1).png";
import pic2 from "../../assests/1 (2).png";
import pic3 from "../../assests/1 (3).png";
import pic4 from "../../assests/1 (4).png";
import pic5 from "../../assests/1 (5).png";
import pic6 from "../../assests/1 (6).png";
import pic7 from "../../assests/1 (7).png";
import pic8 from "../../assests/1 (8).png";
import pic9 from "../../assests/1 (9).png";
import pic10 from "../../assests/1 (10).png";
import pic11 from "../../assests/1 (11).png";
import pic12 from "../../assests/1 (12).png";
// import dummyvideo from "../../assests/dummyvideo-aboutuspage.mp4";
// import pic13 from "../../assests/1 (13).png";
import { Carousel } from "react-bootstrap";
import "./aboutus.css";

// Aboutus1 :
function Aboutus1() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="m-b30">
                <div className="job-bx">
                  <div className=" mt-5">
                    <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
                      <h1
                        className="mb-4"
                        style={{
                          fontSize: "clamp(24px, 5vw, 30px)",
                          fontWeight: "bold",
                        }}
                      >
                        Introduction
                      </h1>
                      <p style={{ fontSize: "clamp(14px, 3vw, 15px)" }}>
                        <strong>
                          Introducing Novajobs.us by Hyper V Solutions:
                        </strong>{" "}
                        A cutting-edge AI-enabled job portal designed to
                        streamline job search and recruitment processes.
                        Experience the future of employment with intelligent
                        matching and personalized career opportunities.
                        <br />
                        <p
                          style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
                          className="mt-5 justify-content-center text-center"
                        >
                          <strong>Check our quick Product Video below :</strong>{" "}
                        </p>
                        {/* <div className="mt-3 mx-3 mx-lg-5 d-flex justify-content-center">
                          <video
                            width="800"
                            height="400"
                            controls
                            style={{ padding: "20px" }}
                          >
                            <source src="https://api.novajobs.us/etc/nova_us_jobs/about_nova.mp4" type="video/mp4" />
                          </video>
                        </div> */}
                         <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Using ReactPlayer for a better video player experience */}
        <ReactPlayer
          // url="https://youtu.be/FObrI1s9qIk?si=RKSVtL4H071Qu8vj" 
          url="https://www.youtube.com/watch?v=DbHXRGdBhqo" 
// Replace with your YouTube video URL
          width="700px"
          height="500px"
          controls={true} // Show player controls
          style={{
            margin: '50px',
            border: '2px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

                        <br />
                      </p>
                      <p style={{ fontSize: "clamp(14px, 3vw, 15px)" }}>
                        For employers and staffing companies, Novajobs.us offers
                        advanced AI algorithms that connect you with top-tier
                        talent, optimizing your hiring process with precision
                        and efficiency. Revolutionize your recruitment strategy
                        with our intelligent solutions.
                      </p>
                    </div>
                    <div className="mx-3 mx-lg-5 d-flex justify-content-center">
                      <img
                        src={logo1}
                        alt="SBE Logo"
                        style={{
                          height: "400px",
                          width: "800px",
                          padding: "20px",
                        }}
                      />
                    </div>
                  </div>

                  <div className=" mt-5">
                    <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
                      <h1
                        style={{
                          fontSize: "clamp(14px, 5vw, 20px)",
                          fontWeight: "500",
                          textDecoration: "underline",
                        }}
                      >
                        For Job Seekers:
                      </h1>
                      <p style={{ fontSize: "clamp(14px, 3vw, 15px)" }}>
                        Novajobs.us offers a comprehensive suite of AI-enabled
                        services, such as an AI resume builder, skill tests, and
                        profile listings. Job seekers can apply for positions
                        across the USA, making it a versatile platform for all.
                        <br />
                      </p>
                      <p style={{ fontSize: "clamp(14px, 3vw, 15px)" }}>
                        Whether you’re starting your career or looking to
                        advance, Novajobs.us is your one-stop solution. Embrace
                        the future of job searching and recruitment with our
                        cutting-edge tools.
                      </p>
                    </div>
                    <div className="mx-3 mx-lg-5 d-flex justify-content-center">
                      <img
                        src={logo2}
                        alt="SBE Logo"
                        style={{
                          height: "400px",
                          width: "800px",
                          padding: "20px",
                        }}
                      />
                    </div>{" "}
                  </div>

                  <div className=" mt-5">
                    <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
                      <h1
                        style={{
                          fontSize: "clamp(14px, 5vw, 20px)",
                          fontWeight: "500",
                          textDecoration: "underline",
                        }}
                      >
                        For Employers:
                      </h1>
                      <p style={{ fontSize: "clamp(14px, 3vw, 15px)" }}>
                        Discover the ultimate solution for employers with
                        Novajobs.us. Leverage AI-enabled job listings,
                        seamlessly browse applicants, and access our extensive
                        database to hire faster.
                        <br />
                      </p>
                      <p style={{ fontSize: "clamp(14px, 3vw, 15px)" }}>
                        Manage applicants effortlessly with just a few clicks,
                        conduct interviews, share openings, and refresh listings
                        with one click. Simplify your recruitment process and
                        find top talent efficiently.
                      </p>
                    </div>
                    <div className="mx-3 mx-lg-5 d-flex justify-content-center">
                      <img
                        src={logo3}
                        alt="SBE Logo"
                        style={{
                          height: "400px",
                          width: "800px",
                          padding: "20px",
                        }}
                      />
                    </div>{" "}
                  </div>

                  <br />
                  <br />
                  <div className="candidate-title mx-3 mx-sm-5 ">
                    <h1
                      className="m-b5 "
                      style={{
                        fontSize: "clamp(24px, 5vw, 30px)",
                        fontWeight: "bold",
                      }}
                    >
                      NovaJobs.US
                    </h1>
                    <p className="mb-0">
                      Hyper V Solutions, offers NovaJobs.us, which is AI-Enabled
                      Job Portal with advanced functionality like Jobs search,
                      Profile listing, Skill Test, Resume Building, AI Data
                      Parsing & more.
                    </p>
                  </div>
                  <br />

                  <div className="d-flex justify-content-center">
                    <Carousel
                      className=""
                      style={{
                        height: "400px",
                        width: "800px",
                        padding: "20px",
                      }}
                    >
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={pic1}
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={pic2}
                          alt="Second slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={pic3}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={pic4}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={pic5}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={pic6}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={pic7}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={pic8}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={pic9}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={pic10}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={pic11}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={pic12}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      {/* <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={pic13}
                          alt="Third slide"
                        />
                      </Carousel.Item> */}
                    </Carousel>
                  </div>
                  <br />
                  <br />
                  <br />

                  <div className="d-flex flex-column flex-lg-row justify-content-around mt-5">
                    <div
                      className="mx-3 mx-lg-5 mb-4 mb-lg-0"
                      style={{ maxWidth: "420px" }}
                    >
                      <h1
                        className="mb-4"
                        style={{
                          fontSize: "clamp(14px, 5vw, 20px)",
                          fontWeight: "500",
                          textDecoration: "underline",
                        }}
                      >
                        More Services from Hyper V Solutions
                      </h1>
                      <p style={{ fontSize: "clamp(14px, 3vw, 15px)" }}>
                        Discover the wide range of innovative services offered
                        by Hyper V Solutions. Whether you're navigating a job
                        search or looking to elevate your career, our EdTech
                        platform, UltraAura.education, is here to support you.
                        <br />
                      </p>
                      <p style={{ fontSize: "clamp(14px, 3vw, 15px)" }}>
                        We offer expertly curated content, live online classes
                        led by industry professionals, and robust placement
                        assistance through Novajobs.us. Take the next step
                        towards your future with our cutting-edge educational
                        solutions.
                      </p>
                      <p
                        style={{
                          fontSize: "clamp(14px, 3vw, 15px)",
                          fontWeight: "500",
                        }}
                      >
                        For more information, visit our parent website:
                        https://hypervsolutions.net/
                      </p>
                    </div>
                    <div className="mx-3 mx-lg-5">
                      <img
                        src={logo5}
                        alt="SBE Logo"
                        style={{ height: "auto", maxWidth: "350px" }}
                      />
                    </div>
                  </div>
                  <br />
                  <br />

                  <div className="candidate-title mx-3 mx-sm-5 px-3 px-sm-5 text-center">
                    <h1
                      className="m-b5 "
                      style={{
                        fontSize: "clamp(14px, 5vw, 20px)",
                        fontWeight: "semibold",
                      }}
                    >
                      Experience the difference of innovation and inclusivity at
                      Novajobs.us . Explore our website today and unlock your
                      path to success.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus1;
