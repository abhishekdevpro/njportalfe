import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import CountUp from "react-countup";
import IndexBanner from "./../Element/IndexBanner";
import Jobcategories from "./../Element/Jobcategories";
import Featureblog from "./../Element/Featureblog";
import Jobsection from "./../Element/Jobsection";
import Owltestimonial from "./../Element/Owlblog1";
import "../../css/indexBanner.css";
import {
  FaEdit,
  FaFileAlt,
  FaPen,
  FaRegEdit,
  FaRegFile,
  FaRegFileAlt,
  FaRegFileArchive,
  FaRegFilePdf,
  FaRegUser,
  FaStar,
} from "react-icons/fa";

//Images
var bnr2 = require("./../../images/background/bg4.jpg");
var bnr3 = require("./../../images/lines.png");

function Homepage() {
  return (
    <div className="page-wraper">
      <Header />
      <div className="page-content">
        <IndexBanner />
        {/* <div
          className="section-full p-tb70  text-white text-center bg-img-fix"
          style={{ backgroundImage: "url(" + bnr2 + ")" ,}}
        >
          <div
            style={{ top: "0px" }}
            className="overlay-black-dark position-absolute w-100 h-100"
          ></div>
          <div className="two-box-container " style={{ color: "white" }}>
            <div className="red-box">
              <div>
                <FaStar />
              </div>
              <div className="d-flex flex-column" style={{ gap: "7px" }}>
                <h3
                  style={{
                    fontSize: "17px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Looking For a Job
                </h3>
              </div>
            </div>
            <div className="blue-box"></div>
          </div>
        </div> */}

        <div
          className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix"
          style={{ backgroundImage: "url(" + bnr2 + ")" }}
        >
          <div className="container">
            <div className="section-head text-center text-white">
              <div className="two-box-container " style={{ color: "white" }}>
                <div className="bg-danger red-box">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "7px",
                      alignItems: "flex-start",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <FaStar />
                      <h3
                        style={{
                          fontSize: "17px",
                          color: "white",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Looking For a Job
                      </h3>
                    </div>
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                    List your profile, check your resume score, search jobs, with advance filters and power of AI

                    </p>
                    <Link
                      to={"/user/job"}
                      style={{ color: "white" }}
                    ><button type="button" className="btn text-white hoverlogo-3d" style={{backgroundColor:"#080F3A"}}>Apply Now</button>
                      
                    </Link>
                  </div>
                </div>
                <div className="blue-box">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "7px",
                      alignItems: "flex-start",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <FaRegEdit />

                      <h3
                        style={{
                          fontSize: "17px",
                          color: "white",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Are you an Employer?
                      </h3>
                    </div>

                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                     List your company, post jobs, search talent with advanced filters and power of AI{" "}
                    </p>
                    <Link
                      to={"/employee/register-2"}
                      style={{ color: "white" }}
                    ><button type="button" class="btn btn-danger hoverlogo-3d">Search Talent</button>
                      
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-column bg-white align-items-center"
          style={{ gap: "20px", padding: "20px" }}
        >
          <h2
            className="m-0 "
            style={{
              fontSize: "28px",
              fontWeight: "600",
              lineHeight: "1.3em",
              textAlign: "center",
              color: "#09213c",
            }}
          >
            Why You Choose us Among
            <br />
            other Job Sites.
          </h2>
          {/* <p
            style={{ textAlign: "center", lineHeight: "1.4em", margin: "0px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde
            fugiat aspernatur officia?
            <br /> Eveniet cumque saepe, praesentium consectetur recusandae
            dignissimos et quia molestiae.
          </p> */}

          <div className="two-box-container">
            <div className="card">
              <div className="card-icon">
                <FaRegFileAlt />
              </div>
              <h3>Check Resume Score</h3>
              <p>Our AI Gives Immediate Score On Your Resume.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <FaRegFilePdf />
              </div>
              <h3>Build Your Public Profile</h3>
              <p>Add Your Details To Reach leading Companies.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <FaRegUser />
              </div>
              <h3>AI Skill Testing Tool</h3>
              <p>
              AI Skill Testing Tool & Earn Rewards.
              </p>
            </div>
          </div>
        </div>
        <div className="section-full job-categories content-inner-2 bg-white">
          <div className="container">
            <div className="section-head d-flex head-counter clearfix">
              <div className="mr-auto text-break">
                <h2 className="m-b5">Popular Categories</h2>
                <h6 className="fw3">
                  8+ Categories waiting for your application
                </h6>
              </div>
             {/* <div className="head-counter-bx text-break">
                <h2 className="m-b5 counter">
                  <CountUp end={100} duration={5} />+
                </h2>
                <h6 className="fw3">Jobs Posted</h6>
              </div>
              <div className="head-counter-bx">
                <h2 className="m-b5 counter">
                  <CountUp end={100} duration={5} />+
                </h2>
                <h6 className="fw3">Employers Listed</h6>
              </div>
              <div className="head-counter-bx">
                <h2 className="m-b5 counter">
                  <CountUp end={100} duration={5} />%
                </h2>
                <h6 className="fw3 text-break">AI Verified Opportunities</h6>
              </div> */}
            </div>
            <Jobcategories />
          </div>
        </div>
        <Featureblog />
        <Jobsection />
        <div
          className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix"
          style={{ backgroundImage: "url(" + bnr2 + ")" }}
        >
          <div className="container">
            <div className="section-head text-center text-white">
              <h2 className="m-b5">Testimonials</h2>
             
            </div>
            <Owltestimonial />
          </div>
        </div>
       {/*<div
          className="section-full content-inner-2 overlay-white-middle"
          style={{
            backgroundImage: "url( " + bnr3 + ")",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        >
          <div className="container">
            <div className="section-head text-black text-center">
              <h2 className="m-b0">Membership Plans</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>
            </div>
            <div className="section-content box-sort-in button-example m-t80">
              <div className="pricingtable-row">
                <div className="row max-w1000 m-auto">
                <div className="col-12 col-md-4">
                    <div className="pricingtable-wrapper style2 bg-white">
                      <div className="pricingtable-inner">
                        <div className="pricingtable-price">
                          <h4 className="font-weight-300 m-t10 m-b0">Basic</h4>
                          <div className="pricingtable-bx">
                            <span>Free</span>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet adipiscing elit sed do
                          eiusmod tempors labore et dolore magna siad enim
                          aliqua
                        </p>
                        <div className="m-t20">
                          <Link
                            to={"/employee/register"}
                            className="site-button radius-xl"
                          >
                            <span className="p-lr30">Sign Up</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="pricingtable-wrapper style2 bg-primary text-white active">
                      <div className="pricingtable-inner">
                        <div className="pricingtable-price">
                          <h4 className="font-weight-300 m-t10 m-b0">
                            Professional
                          </h4>
                          <div className="pricingtable-bx">
                            {" "}
                            $ <span>29</span> / Per Installation{" "}
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet adipiscing elit sed do
                          eiusmod tempors labore et dolore magna siad enim
                          aliqua
                        </p>
                        <div className="m-t20">
                          <Link
                            to={"/employee/register"}
                            className="site-button white radius-xl"
                          >
                            <span className="text-primary p-lr30">Sign Up</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="pricingtable-wrapper style2 bg-white">
                      <div className="pricingtable-inner">
                        <div className="pricingtable-price">
                          <h4 className="font-weight-300 m-t10 m-b0">
                            Extended
                          </h4>
                          <div className="pricingtable-bx">
                            {" "}
                            $ <span>29</span> / Per Installation{" "}
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet adipiscing elit sed do
                          eiusmod tempors labore et dolore magna siad enim
                          aliqua
                        </p>
                        <div className="m-t20">
                          <Link
                            to={"/employee/register"}
                            className="site-button radius-xl"
                          >
                            <span className="p-lr30">Sign Up</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
export default Homepage;
