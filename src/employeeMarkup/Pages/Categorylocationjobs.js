import React from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import Jobsearchform from "./../Element/Jobsearchform";

var bnr = require("./../../images/banner/bnr1.jpg");

function EmployeeCategorylocationjobs() {
  return (
    <>
      <Header />
      <div className="page-content">
        <div
          className="dez-bnr-inr jobs-category overlay-black-middle"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <Jobsearchform />
              <div className="category-jobs-info">
                <div className="nav">
                  <ul>
                    <li>
                      <Link to={"/employer/category-all-jobs"}>All Jobs</Link>
                    </li>

                    <li>
                      <Link to={"/employer/category-jobs"}>
                        Jobs by Category
                      </Link>
                    </li>
                    <li className="active">
                      <Link to={"/employer/category-location-jobs"}>
                        Jobs by Location
                      </Link>
                    </li>
                    <li>
                      <Link to={"/employer/category-designations-jobs"}>
                        Jobs by Designation
                      </Link>
                    </li>
                    <li>
                      <Link to={"/employer/category-skill-jobs"}>
                        Jobs by Skill
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-block">
          <div className="section-full content-inner jobs-category-bx">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 m-b30 clearfix">
                  <div className="job-bx bg-white">
                    <div className="job-bx-title clearfix">
                      <h6 className="font-weight-700 pull-left text-uppercase">
                        Browse Jobs by Top Locations
                      </h6>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-sm-6">
                        <ul className="category-list">
                          <li>
                            <Link to={""}>Email Marketing</Link>
                          </li>
                          <li>
                            <Link to={""}>Lead Generation</Link>
                          </li>
                          <li>
                            <Link to={""}>Public Relations</Link>
                          </li>
                          <li>
                            <Link to={""}>Telemarketing Jobs</Link>
                          </li>
                          <li>
                            <Link to={""}>Display Advertising</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <ul className="category-list">
                          <li>
                            <Link to={""}>Marketing Strategy</Link>
                          </li>
                          <li>
                            <Link to={""}>Search Engine Marketing</Link>
                          </li>
                          <li>
                            <Link to={""}>Other - Sales & Marketing</Link>
                          </li>
                          <li>
                            <Link to={""}>Display Advertising</Link>
                          </li>
                          <li>
                            <Link to={""}>Market & Customer</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <ul className="category-list">
                          <li>
                            <Link to={""}>Search Engine Optimization</Link>
                          </li>
                          <li>
                            <Link to={""}>Social Media Marketing</Link>
                          </li>
                          <li>
                            <Link to={""}>Search Engine Marketing</Link>
                          </li>
                          <li>
                            <Link to={""}>Marketing Strategy</Link>
                          </li>
                          <li>
                            <Link to={""}>Email Marketing</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <ul className="category-list">
                          <li>
                            <Link to={""}>Lead Generation</Link>
                          </li>
                          <li>
                            <Link to={""}>Public Relations</Link>
                          </li>
                          <li>
                            <Link to={""}>Telemarketing Jobs</Link>
                          </li>
                          <li>
                            <Link to={""}>Display Advertising</Link>
                          </li>
                          <li>
                            <Link to={""}>Marketing Strategy</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="masonry" className="row">
                <div className="card-container clearfix col-lg-3 col-sm-6 m-b30">
                  <div className="job-bx bg-white">
                    <div className="job-bx-title clearfix">
                      <h6 className="font-weight-700 pull-left m-b0 font-13 text-uppercase">
                        Jobs In London
                      </h6>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to={""}>Email Marketing</Link>
                      </li>
                      <li>
                        <Link to={""}>Lead Generation</Link>
                      </li>
                      <li>
                        <Link to={""}>Public Relations</Link>
                      </li>
                      <li>
                        <Link to={""}>Telemarketing Jobs</Link>
                      </li>
                      <li>
                        <Link to={""}>Display Advertising</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-container clearfix col-lg-3 col-sm-6 m-b30">
                  <div className="job-bx bg-white">
                    <div className="job-bx-title clearfix">
                      <h6 className="font-weight-700 pull-left m-b0 font-13 text-uppercase">
                        Jobs In London
                      </h6>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to={""}>Marketing Strategy</Link>
                      </li>
                      <li>
                        <Link to={""}>Search Engine Marketing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-container clearfix col-lg-3 col-sm-6 m-b30">
                  <div className="job-bx bg-white">
                    <div className="job-bx-title clearfix">
                      <h6 className="font-weight-700 pull-left m-b0 font-13 text-uppercase">
                        Jobs In London
                      </h6>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to={""}>Search Engine Optimization</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-container clearfix col-lg-3 col-sm-6 m-b30">
                  <div className="job-bx bg-white">
                    <div className="job-bx-title clearfix">
                      <h6 className="font-weight-700 pull-left m-b0 font-13 text-uppercase">
                        Jobs In London
                      </h6>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to={""}>Lead Generation</Link>
                      </li>
                      <li>
                        <Link to={""}>Public Relations</Link>
                      </li>
                      <li>
                        <Link to={""}>Telemarketing Jobs</Link>
                      </li>
                      <li>
                        <Link to={""}>Display Advertising</Link>
                      </li>
                      <li>
                        <Link to={""}>Marketing Strategy</Link>
                      </li>
                      <li>
                        <Link to={""}>Telemarketing Jobs</Link>
                      </li>
                      <li>
                        <Link to={""}>Display Advertising</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-container clearfix col-lg-3 col-sm-6 m-b30">
                  <div className="job-bx bg-white">
                    <div className="job-bx-title clearfix">
                      <h6 className="font-weight-700 pull-left m-b0 font-13 text-uppercase">
                        Jobs In London
                      </h6>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to={""}>Email Marketing</Link>
                      </li>
                      <li>
                        <Link to={""}>Lead Generation</Link>
                      </li>
                      <li>
                        <Link to={""}>Public Relations</Link>
                      </li>
                      <li>
                        <Link to={""}>Display Advertising</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-container clearfix col-lg-3 col-sm-6 m-b30">
                  <div className="job-bx bg-white">
                    <div className="job-bx-title clearfix">
                      <h6 className="font-weight-700 pull-left m-b0 font-13 text-uppercase">
                        Jobs In London
                      </h6>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to={""}>Marketing Strategy</Link>
                      </li>
                      <li>
                        <Link to={""}>Search Engine Marketing</Link>
                      </li>
                      <li>
                        <Link to={""}>Other - Sales & Marketing</Link>
                      </li>
                      <li>
                        <Link to={""}>Market & Customer</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-container clearfix col-lg-3 col-sm-6 m-b30">
                  <div className="job-bx bg-white">
                    <div className="job-bx-title clearfix">
                      <h6 className="font-weight-700 pull-left m-b0 font-13 text-uppercase">
                        Jobs In London
                      </h6>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to={""}>Search Engine Optimization</Link>
                      </li>
                      <li>
                        <Link to={""}>Social Media Marketing</Link>
                      </li>
                      <li>
                        <Link to={""}>Search Engine Marketing</Link>
                      </li>
                      <li>
                        <Link to={""}>Search Engine Marketing</Link>
                      </li>
                      <li>
                        <Link to={""}>Marketing Strategy</Link>
                      </li>
                      <li>
                        <Link to={""}>Email Marketing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-container clearfix col-lg-3 col-sm-6 m-b30">
                  <div className="job-bx bg-white">
                    <div className="job-bx-title clearfix">
                      <h6 className="font-weight-700 pull-left m-b0 font-13 text-uppercase">
                        Jobs In London
                      </h6>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to={""}>Lead Generation</Link>
                      </li>
                      <li>
                        <Link to={""}>Public Relations</Link>
                      </li>
                      <li>
                        <Link to={""}>Telemarketing Jobs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-container clearfix col-lg-3 col-sm-6 m-b30">
                  <div className="job-bx bg-white">
                    <div className="job-bx-title clearfix">
                      <h6 className="font-weight-700 pull-left m-b0 font-13 text-uppercase">
                        Jobs In London
                      </h6>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to={""}>Email Marketing</Link>
                      </li>
                      <li>
                        <Link to={""}>Lead Generation</Link>
                      </li>
                      <li>
                        <Link to={""}>Public Relations</Link>
                      </li>
                      <li>
                        <Link to={""}>Display Advertising</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-container clearfix col-lg-3 col-sm-6 m-b30">
                  <div className="job-bx bg-white">
                    <div className="job-bx-title clearfix">
                      <h6 className="font-weight-700 pull-left m-b0 font-13 text-uppercase">
                        Jobs In London
                      </h6>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to={""}>Marketing Strategy</Link>
                      </li>
                      <li>
                        <Link to={""}>Search Engine Marketing</Link>
                      </li>
                      <li>
                        <Link to={""}>Other - Sales & Marketing</Link>
                      </li>
                      <li>
                        <Link to={""}>Market & Customer</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-container clearfix col-lg-3 col-sm-6 m-b30">
                  <div className="job-bx bg-white">
                    <div className="job-bx-title clearfix">
                      <h6 className="font-weight-700 pull-left m-b0 font-13 text-uppercase">
                        Jobs In London
                      </h6>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to={""}>Search Engine Optimization</Link>
                      </li>
                      <li>
                        <Link to={""}>Social Media Marketing</Link>
                      </li>
                      <li>
                        <Link to={""}>Search Engine Marketing</Link>
                      </li>
                      <li>
                        <Link to={""}>Search Engine Marketing</Link>
                      </li>
                      <li>
                        <Link to={""}>Marketing Strategy</Link>
                      </li>
                      <li>
                        <Link to={""}>Email Marketing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-container clearfix col-lg-3 col-sm-6 m-b30">
                  <div className="job-bx bg-white">
                    <div className="job-bx-title clearfix">
                      <h6 className="font-weight-700 pull-left m-b0 font-13 text-uppercase">
                        Jobs In London
                      </h6>
                    </div>
                    <ul className="category-list">
                      <li>
                        <Link to={""}>Lead Generation</Link>
                      </li>
                      <li>
                        <Link to={""}>Public Relations</Link>
                      </li>
                      <li>
                        <Link to={""}>Telemarketing Jobs</Link>
                      </li>
                    </ul>
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
export default EmployeeCategorylocationjobs;
