import React, { Component, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { TypeAnimation } from 'react-type-animation';
import "../../css/indexBanner.css";
import SBELogo from "../../assests/SBE-Logo.png";
import NewDBELogo from '../../assests/New-dbe-logo.png';
var bnr1 = require("./../../images/main-slider/slide2.jpg");

class IndexBanner extends Component {
  componentDidMount() {
    var i = 0;
    // Placeholder Animation Start
    var inputSelector = document.querySelectorAll("input, textarea");
    for (i = 0; i < inputSelector.length; i++) {
      inputSelector[i].addEventListener("focus", function (event) {
        return this.parentElement.parentElement.classList.add("focused");
      });
    }
    for (i = 0; i < inputSelector.length; i++) {
      inputSelector[i].addEventListener("blur", function (event) {
        var inputValue = this.value;
        if (inputValue === "") {
          this.parentElement.parentElement.classList.remove("filled");
          this.parentElement.parentElement.classList.remove("focused");
        } else {
          this.parentElement.parentElement.classList.add("filled");
        }
      });
    }
    // Placeholder Animation End
  }

  constructor(props) {
    super(props);
    this.state = {
      searchJob: "",
    };
  }

  handleChange = (e) => {
    localStorage.setItem("title_keyword", e.target.value);
    this.setState({
      searchJob: e.target.value,
    });
  };

  render() {
    console.log(this.state.searchJob);
    return (
      <div
        className="dez-bnr-inr dez-bnr-inr-md"
        style={{ backgroundImage: "url(" + bnr1 + ")" }}
      >
        <div className="container">
          <div className="dez-bnr-inr-entry align-m">
            <div className="find-job-bx ">
           {/* <span className="d-flex justify-content-around mb-4" style={{ width: '280px' }}>
  <span className="m-2 hover-container">
    <img src={SBELogo} alt="SBE Logo" style={{ height: '90px' }} />
    <span className="hover-text">Small Business Enterprise (SBE) Certification
At Hyper V Solutions, our SBE certification underscores our commitment to supporting small businesses and fostering local economic growth. This certification enables us to engage in various opportunities, promoting innovation and collaboration within our community.
</span>
  </span>
  <span className="m-2 hover-container">
    <img src={NewDBELogo} alt="New DBE Logo" style={{ height: '90px' }} />
    <span className="hover-text">Disadvantaged Business Enterprise (DBE) Certification
    Our DBE certification at Hyper V Solutions highlights our dedication to diversity and inclusion. This certification allows us to participate in projects that prioritize equal opportunities for minority and disadvantaged businesses, driving positive change and fostering a more equitable business</span>
  </span>
</span> */}

              <div
                className="d-flex align-items-center "
                style={{ gap: "px" }}
              >
                
                <div className="hover-3d">
                  <h2> An AI-Enabled HR Job Portal</h2>
                </div>
              </div>
              <h2>
                <TypeAnimation
                  sequence={[
                    " Search Jobs",
                    1000,
                    "Check Resume AI Score",
                    1000,
                    " Make AI Resume",
                    1000,
                    "Connect with Employers",
                    1000,
                    "Get Hired",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
              <form className="dezPlaceAni">
                <div className="row">
                  <div className="col-lg-10 col-12 ">
                    <div className="form-group">
                      <label htmlFor="searchJob">
                        Job Title, Keywords, or Phrase
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name="searchJob"
                          id="searchJob"
                          onChange={this.handleChange}
                          value={this.state.searchJob}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fa fa-search"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                    {/* <div className="col-lg-3 col-md-6">
                    <div className="form-group">
                      <label>Email address</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fa fa-map-marker"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="form-group">
                      <Form.Control as="select" custom className="select-btn">
                        <option>Select Sector</option>
                        <option>Construction</option>
                        <option>Corodinator</option>
                        <option>Employer</option>
                        <option>Financial Career</option>
                        <option>Information Technology</option>
                        <option>Marketing</option>
                        <option>Quality check</option>
                        <option>Real Estate</option>
                        <option>Sales</option>
                        <option>Supporting</option>
                        <option>Teaching</option>
                      </Form.Control>
                    </div>
                  </div> */}
                  <div className="col-lg-2 col-md-6">
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/user/job";
                      }}
                      className="site-button btn-block"
                    >
                      Find Job
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default IndexBanner;
