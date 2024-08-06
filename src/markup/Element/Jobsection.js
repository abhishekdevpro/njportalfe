import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import { setJobApplicationData } from "../../store/reducers/jobApplicationSlice";
import TwoBoxWithLinesSkeleton from "../skeleton/twoBoxLines";

// Add your other imports like ToastContainer and other components

function Jobsection() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("employeeLoginToken");
  const jobApplicationData = useSelector(
    (state) => state.jobApplicationSlice.jobApplicationData
  );
  const [skeleton, setSkeleton] = useState(true);
  const [logo, setLogo] = useState("");

  const fetchJobApplicationData = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/jobseeker/job-lists?page_size=7&is_publish=1",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response, "resData");

      // Sort the job application data by updated_at in descending order
      console.log(response.data.data,"Check")
      const sortedData = response.data.data.sort(
        (a, b) =>
          new Date(b.job_detail.updated_at) - new Date(a.job_detail.updated_at)
      );
      console.log("sorteddata",sortedData)

      dispatch(setJobApplicationData(sortedData));
      setSkeleton(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getLogo = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://api.novajobs.us/api/employeer/employeer-profile",
        headers: {
          Authorization: token,
        },
      });
      setLogo(`${response.data.data.company_detail.logo}`);
    } catch (error) {
      console.error("Error fetching logo:", error);
    }
  };

  useEffect(() => {
    getLogo(); // Fetch logo on component mount
  }, []); // Empty dependency array ensures it runs only once

  useEffect(() => {
    fetchJobApplicationData();
  }, []);

  const showToastMessage = () => {
    toast("Login To Continue");
  };

  const toggleFabJobs = async (id) => {
    try {
      await axios({
        url: "https://api.novajobs.us/api/jobseeker/job-favorites",
        method: "POST",
        headers: { Authorization: token },
        data: {
          job_id: id,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="section-full bg-white content-inner-2">
      <ToastContainer />
      {skeleton === true ? (
        <TwoBoxWithLinesSkeleton />
      ) : (
        <div className="container">
          <div className="d-flex job-title-bx section-head">
            <div className="mr-auto">
              <h2 className="m-b5">Recent Jobs</h2>
              <h6 className="fw4 m-b0">20+ Recently Added Jobs</h6>
            </div>
            {/*<div className="align-self-end mx-2">
              <Link to={"/user/jobthirdparty"} className="site-button button-sm">
                Thirdparty
              </Link>
            </div> */}
            <div className="align-self-end">
              <Link to={"/user/job"} className="site-button button-sm">
                Browse All Jobs <i className="fa fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              {jobApplicationData ? (
                <ul className="post-job-bx browse-job">
                  {jobApplicationData.map((item, index) => (
                    <li key={index}>
                      <div className="post-bx">
                        <div className="d-flex m-b30">
                          <div className="job-post-company">
                            <span>
                              <img
                                src={require("./../../images/logo/icon1.png")}
                                alt="Company Logo"
                              />
                            </span>
                          </div>
                          {console.log(logo, "logo this is logo")}
                          <div className="job-post-info">
                            <h4>
                              <Link
                                to={{
                                  pathname: `/user/job/${item.s_no}`,
                                  state: { job: jobApplicationData },
                                }}
                              >
                                {" "}
                                {item.job_detail.job_title}{" "}
                              </Link>
                            </h4>
                            <h6>{item.companies.company_name}</h6>
                            <ul>
                          
                              <li>
                                <i className="fa fa-map-marker"></i>{" "}
                                {item.cities.name}, {item.states.name},{" "}
                                {item.countries.name}
                              </li>
                              {item.job_category.name ? (
                                <li>
                                  <i className="fa fa-bookmark-o"></i>{" "}
                                  {item.job_category.name}
                                </li>
                              ) : null}
                              <li>
                                {console.log(
                                  "time",
                                  item.job_detail.updated_at
                                )}
                                <i className="fa fa-clock-o"></i> 
                                {moment(item.job_detail.created_at).fromNow()}
                              </li>
                            </ul>
                            {item.job_detail.skills_arr ? (
                              <div className="mx-1">
                                {item.job_detail.skills_arr.map(
                                  (skill, index) => (
                                    <span
                                      key={index}
                                      className="badge badge-primary m-2"
                                    >
                                      {skill}
                                    </span>
                                  )
                                )}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="job-time mr-auto">
                            <Link to={"#"}>
                              <span>{item.job_type.name}</span>
                            </Link>
                          </div>
                          <div className="salary-bx">
                            <span>{item.job_workplace_types.name}</span>
                          </div>
                        </div>
                        {localStorage.getItem("jobSeekerLoginToken") ? (
                          <label className="like-btn">
                            <input
                              type="checkbox"
                              defaultChecked={item.job_detail.is_job_favorite}
                              name={item.job_detail.id}
                              onClick={() => {
                                toggleFabJobs(item.job_detail.id);
                              }}
                            />
                            <span className="checkmark"></span>
                          </label>
                        ) : (
                          <label
                            className="like-btn"
                            onClick={() => {
                              showToastMessage();
                            }}
                          >
                            <input
                              type="checkbox"
                              defaultChecked={false}
                              disabled
                            />
                            <span className="checkmark"></span>
                          </label>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="col-lg-3">
              <div className="sticky-top">
                <div className="candidates-are-sys m-b30">
                  <div className="candidates-bx">
                    <div className="testimonial-pic radius">
                      <img
                        src={require("./../../images/testimonials/pic3.jpg")}
                        alt=""
                        width="100"
                        height="100"
                      />
                    </div>
                    <div className="testimonial-text">
                      <p>
                        I just got my resume Ai screened for free, improved it
                        and landed my dream Job. Thank you NovaJobs...
                      </p>
                    </div>
                    <div className="testimonial-detail">
                      {" "}
                      <strong className="testimonial-name">
                        Amanda V.
                      </strong>{" "}
                      <span className="testimonial-position">Florida, USA</span>{" "}
                    </div>
                  </div>
                </div>
                <div className="quote-bx">
                  <div className="quote-info">
                    <h4>Make A Difference With Our AI Resume Builder!</h4>
                    <p>
                      AI Resume is built in minutes, with multiple premium
                      templates.
                    </p>
                    <Link to={"/user/register-2"} className="site-button">
                      Get Started For Free
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Jobsection;
