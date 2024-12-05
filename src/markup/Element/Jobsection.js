import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import { setJobApplicationData } from "../../store/reducers/jobApplicationSlice";
import TwoBoxWithLinesSkeleton from "../skeleton/twoBoxLines";

function Jobsection() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("jobSeekerLoginToken");
  const jobApplicationData = useSelector(
    (state) => state.jobApplicationSlice.jobApplicationData
  );
  const [skeleton, setSkeleton] = useState(true);
  const [logo, setLogo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
      const sortedData = response.data.data.sort(
        (a, b) =>
          new Date(b.job_detail.updated_at) - new Date(a.job_detail.updated_at)
      );
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
    fetchJobApplicationData(); // Fetch job application data on component mount
  }, []); // Empty dependency array ensures it runs only once

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
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Pagination logic
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = jobApplicationData.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobApplicationData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
          </div>
          <div className="row">
            <div className="col-lg-9">
              {jobApplicationData ? (
                <ul className="post-job-bx browse-job">
                  {currentJobs.map((item, index) => (
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
                          <div className="job-post-info">
                            <h4>
                              <Link
                                to={{
                                  pathname: `/user/job/${item.job_detail.id}`,
                                  state: { job: jobApplicationData },
                                }}
                              >
                                {item.job_detail.job_title}
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
              {/* Pagination Controls */}
              <div className="pagination d-flex flex-wrap justify-content-center">
                <button
                  className="btn btn-outline-primary me-2 mb-2"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => {
                  if (
                    index < 5 ||
                    (index === totalPages - 1 && totalPages > 5)
                  ) {
                    return (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`btn ${
                          currentPage === index + 1
                            ? "btn-primary"
                            : "btn-outline-secondary"
                        } me-2 mb-2`}
                      >
                        {index + 1}
                      </button>
                    );
                  } else if (index === 5 && totalPages > 5) {
                    return (
                      <span key="ellipsis" className="me-2 mb-2">
                        ...
                      </span>
                    );
                  } else {
                    return null;
                  }
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="btn btn-outline-primary mb-2"
                >
                  Next
                </button>
              </div>
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
                      <strong className="testimonial-name">Amanda V.</strong>{" "}
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
