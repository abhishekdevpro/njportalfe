import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Tab, Nav, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showToastError, showToastSuccess } from "../../utils/toastify";
import FixedHeader from "../Layout/fixedHeader";
import {
  setJobApplicationData,
  setJobApplicationValues,
} from "../../store/reducers/jobApplicationSlice";
import moment from "moment";
import testImg from "../../images/jobpageicon.png";
import "react-quill/dist/quill.snow.css";
import {
  setJobSeekerAnswer,
  setScreeningQuestion,
  setUserAnswer,
} from "../../store/reducers/jobApplicationScreeningQues";
import { submit } from "redux-form";
import JobPageSkeleton from "../skeleton/jobPage";
import TwoBoxWithLinesSkeleton from "../skeleton/twoBoxLines";
import { useParams } from "react-router-dom";
import SkeletonImg from "../../images/jobpage/No data-pana.png";
import { FaSearch, FaBars } from 'react-icons/fa';
import { ToastContainer } from "react-toastify";

function JobPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedJob, setSelectedJob] = useState(null);
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("contact-info");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const jobApplicationData = useSelector(
    (state) => state.jobApplicationSlice.jobApplicationData
  );
  const token = localStorage.getItem("jobSeekerLoginToken");
  const jobFromState = location.state?.job || null;

  const screeningQuestion = useSelector(
    (state) => state.jobApplicationScreeningQues.selectedScreeningQuestions
  );

  const jobApplicationValues = useSelector(
    (state) => state.jobApplicationSlice.jobApplicationValues
  );

  const [countries, setCountries] = useState([{ id: 0, name: "" }]);
  const [states, setStates] = useState([{ id: 0, name: "" }]);
  const [cities, setCities] = useState([{ id: 0, name: "" }]);
  const [workplace_type, setWorkplace_type] = useState([{ id: 0, name: "" }]);
  const [experience, setExperience] = useState([{ id: 0, name: "" }]);
  const [job_type, setJobType] = useState([{ id: 0, name: "" }]);
  const [jobCategories, setJobCategories] = useState([{ id: 0, name: "" }]);
  const [activeDropDown, setActiveDropDown] = useState("");
  const [category, Setcategory] = useState("");

  // Extract search params from the URL
  const queryParams = new URLSearchParams(location.search);
  const initialSearchParams = {
    category: queryParams.get('category') || '',
    state_id: queryParams.get('state_id') || '',
    city_id: queryParams.get('city_id') || '',
    workplace_type: queryParams.get('workplace_type') || '',
    job_type: queryParams.get('job_type') || '',
    experience_level: queryParams.get('experience_level') || '',
    title_keywords: queryParams.get('title_keywords') || '',
  };

  const [searchParams, setSearchParams] = useState(initialSearchParams);
  const [jobsPerPage] = useState(10);
const [page, setPage] = useState(1)
const [jobData, setJobData] = useState([]); // Store the job data

useEffect(() => {
  const fetchJobApplicationData = async () => {
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/jobseeker/job-lists?page_size=10&is_publish=1&page_no=${page}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response);
      dispatch(setJobApplicationData(response.data.data));
      setShowSkeleton(false);

      // Append new data to existing data
      setJobData(prevJobData => [...prevJobData, ...response.data.data]);

      // If we have an ID from params, find and set the matching job
      if (id) {
        const matchingJob = response.data.data.find(job => job.s_no.toString() === id);
        if (matchingJob) {
          setSelectedJob(matchingJob);
        } else {
          console.log(`No job found with id: ${id}`);
        }
      } else if (jobFromState) {
        setSelectedJob(jobFromState);
      } else if (response.data.data.length > 0) {
        setSelectedJob(response.data.data[0]);
      }

      // Perform search based on initial search params
      // handleSearch();
    } catch (error) {
      console.error('Error fetching job data:', error);
    }
  };

  fetchJobApplicationData();
}, [id, jobFromState, dispatch, token, page]);
  // useEffect(() => {
  //   const fetchJobApplicationData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://api.novajobs.us/api/jobseeker/job-lists?page_size=10&is_publish=1&page_no=${page}`,
  //         {
  //           headers: {
  //             Authorization: token,
  //           },
  //         }
  //       );
  //       console.log(response);
  //       dispatch(setJobApplicationData(response.data.data));
  //       setShowSkeleton(false);

  //       // If we have an ID from params, find and set the matching job
  //       if (id) {
  //         const matchingJob = response.data.data.find(job => job.s_no.toString() === id);
  //         if (matchingJob) {
  //           setSelectedJob(matchingJob);
  //         } else {
  //           console.log(`No job found with id: ${id}`);
  //         }
  //       } else if (jobFromState) {
  //         setSelectedJob(jobFromState);
  //       } else if (response.data.data.length > 0) {
  //         setSelectedJob(response.data.data[0]);
  //       }

  //       // Perform search based on initial search params
  //       // handleSearch();
  //     } catch (error) {
  //       console.error('Error fetching job data:', error);
  //     }
  //   };

  //   fetchJobApplicationData();
  // }, [id, jobFromState, dispatch, token,page]);

  const loadmore=()=>{
    setPage(prevpage => prevpage +1); 
 }
 console.log(page,"page");

  useEffect(() => {
    if (jobApplicationValues.jobCategory !== "") {
      setActiveDropDown("active_dropDown");
    }
  }, [jobApplicationValues.jobCategory]);

  useEffect(() => {
    getCountry();
    getExperience();
    getWorkplaceType();
    getJobTypes();
    getCategory();
  }, []);

  useEffect(() => {
    dispatch(
      setJobApplicationValues({
        ...jobApplicationValues,
        state_id: 0,
        city_id: 0,
      })
    );
    getState();
  }, [jobApplicationValues.country_id]);

  useEffect(() => {
    dispatch(
      setJobApplicationValues({
        ...jobApplicationValues,
        city_id: 0,
      })
    );
    getCities();
  }, [jobApplicationValues.state_id]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleFabJobs = async () => {
    try {
      await axios({
        url: "https://api.novajobs.us/api/jobseeker/job-favorites",
        method: "POST",
        headers: { Authorization: token },
        data: {
          job_id: selectedJob.job_detail.id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNext = () => {
    if (activeTab === "contact-info") {
      setActiveTab("additional-info");
    } else if (activeTab === "additional-info") {
      setActiveTab("resume-info");
    } else if (activeTab === "resume-info") {
      setActiveTab("immediate-info");
    }
  };

  const handlePrev = () => {
    if (activeTab === "immediate-info") {
      setActiveTab("resume-info");
    } else if (activeTab === "resume-info") {
      setActiveTab("additional-info");
    } else if (activeTab === "additional-info") {
      setActiveTab("contact-info");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "country_id" || name === "city_id" || name === "state_id") {
      const selectedIndex = e.target.selectedIndex;
      const text = e.target.options[selectedIndex].text;
      dispatch(
        setJobApplicationValues({
          ...jobApplicationValues,
          [name === "country_id" ? "country" : name === "city_id" ? "city" : "state"]: text,
          [name]: value,
        })
      );
    } else {
      dispatch(
        setJobApplicationValues({ ...jobApplicationValues, [name]: value })
      );
    }
  };

  const getJobTypes = async () => {
    try {
      const res = await axios.get("https://api.novajobs.us/api/jobseeker/job-types", {
        headers: { Authorization: token },
      });
      setJobType(res.data.data);
    } catch (err) {
      console.log(err, "job type error");
    }
  };

  const getCategory = async () => {
    try {
      const res = await axios.get("https://api.novajobs.us/api/jobseeker/job-categories", {
        headers: {
          Authorization: token
        },
      });
      Setcategory(res.data.data);
    } catch (err) {
      console.log(err, 'error')
    }
  }

  const getWorkplaceType = async () => {
    try {
      const response = await axios.get("https://api.novajobs.us/api/jobseeker/workplace-types", {
        headers: { Authorization: token },
      });
      setWorkplace_type(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getExperience = async () => {
    try {
      const response = await axios.get("https://api.novajobs.us/api/jobseeker/experience-level", {
        headers: { Authorization: token },
      });
      setExperience(response.data.data);
    } catch (err) {
      console.log(err);
      showToastError(err?.response?.data?.message);
    }
  };

  const getCountry = async () => {
    try {
      const response = await axios.get("https://api.novajobs.us/api/jobseeker/countries", {
        headers: { Authorization: token },
      });
      setCountries(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getState = async () => {
    try {
      const response = await axios.get(`https://api.novajobs.us/api/jobseeker/stats/231`, {
        headers: { Authorization: token },
      });
      setStates(response.data.data);
    } catch (err) {
      console.log(err, "STATE");
      setStates([]);
      setCities([]);
    }
  };

  const getCities = async () => {
    try {
      const response = await axios.get(`https://api.novajobs.us/api/jobseeker/cities/${jobApplicationValues.state_id}`, {
        headers: { Authorization: token },
      });
      setCities(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  
  // const baseUrl =
  //   // "https://api.novajobs.us/api/jobseeker/job-lists/?page_size=7&is_publish=1";
   

  const params = new URLSearchParams();
  // Handle Search Based on Params
  const handleSearch = () => {
    const { category, state_id, city_id, workplace_type, job_type, experience_level, title_keywords } = jobApplicationValues;
    const params = new URLSearchParams();

    if (category) params.append("category", category);
    if (state_id) params.append("state_id", state_id);
    if (city_id) params.append("city_id", city_id);
    if (workplace_type) params.append("workplace_type", workplace_type);
    if (job_type) params.append("job_type", job_type);
    if (experience_level) params.append("experience_level", experience_level);
    if (title_keywords) params.append("title_keywords", title_keywords);

    // const url = `${baseUrl}&${params.toString()}`;
    const url = ` https://api.novajobs.us/api/jobseeker/job-lists?page_size=7&is_publish=1&${params.toString()}`;
    handleGetReq(url);
  };

  // Perform GET request to fetch filtered job listings
  const handleGetReq = (url) => {
    axios({
      method: "GET",
      url: url,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        dispatch(setJobApplicationData(response.data.data || []));
      })
      .catch((err) => {
        console.error("Error fetching filtered jobs:", err);
      });
  };
 




  const submitApplication = async () => {
    if (selectedJob && selectedJob.job_apply_url) {
      // Redirect to the job_apply_url
      window.location.href = selectedJob.job_apply_url;
    } else {
      try {
        await axios({
          url: "https://api.novajobs.us/api/jobseeker/jobs-applied",
          method: "POST",
          headers: {
            Authorization: token,
          },
          data: {
            job_id: selectedJob.job_detail.id,
            screen_questions: screeningQuestion,
          },
        });
        showToastSuccess("Job applied successfully");
      } catch (err) {
        console.log(err);
        console.log(err.response.data.message);
        showToastError(err?.response?.data?.message);
      }
    }
  };
 
  return (
    <>
      <Header />
      {localStorage.getItem("jobSeekerLoginToken") ? <FixedHeader /> : null}
<ToastContainer/>
      <div>
        {showSkeleton === true ? (
          <div className="bg-white w-100 ">
            <TwoBoxWithLinesSkeleton />
          </div>
        ) : (
          <div className="page-content bg-white">
            <div className="content-block">
              <div className="section-full bg-white p-t50 p-b20">
              <div className="container">
  <div className="row justify-content-center align-items-center">
    <div className="col-lg-2 col-md-4 col-sm-6 col-12">
      <div className="form-group">
                     
                        <label htmlFor="jobCategory">Choose Category</label>
                        {category ? (
                          <select
                            type="text"
                            className={`form-control dropdown-menu-job_page ${
                              jobApplicationValues.category === ""
                                ? null
                                : "active_dropDown"
                            }`}
                            id="jobCategory"
                            name="jobCategory"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            value={jobApplicationValues.category}
                          >
                            <option value="">Select a Category</option>
                            {category.map((item, index) => {
                              return (
                                <option
                                  key={index}
                                  value={item.id}
                                  country={item.name}
                                >
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-lg-2  col-md-5 col-12 ">
                      <div className="form-group">
                        <label htmlFor="state_id">State:</label>
                        {states ? (
                          <select
                            type="text"
                            c
                            className={`form-control dropdown-menu-job_page ${
                              jobApplicationValues.state_id === ""
                                ? null
                                : "active_dropDown"
                            }`}
                            id="state_id"
                            name="state_id"
                            onChange={handleChange}
                            value={jobApplicationValues.state_id}
                          >
                            <option value="">Select a State</option>
                            {states.map((item, index) => {
                              return (
                                <option key={index} value={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-lg-2  col-md-5 col-12  ">
                      <div className="form-group">
  <label htmlFor="city_id">City:</label>
  {cities && cities.length > 0 ? (
    <select
      type="text"
      className={`form-control dropdown-menu-job_page ${
        jobApplicationValues.city_id === 0 ? null : "active_dropDown"
      }`}
      id="city_id"
      name="city_id"
      onChange={handleChange}
      value={jobApplicationValues.city_id}
    >
      <option value="" className="option">
        Select A City
      </option>

      {cities.map((item, index) => (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  ) : (
    <p className="border border-black p-2 rounded-1 fw-light text-black option">Select the State first</p>
  )}
</div>

                    </div>

                    <div className="col-lg-2  col-md-5 col-12 ">
                      <div className="form-group">
                        <label htmlFor="workplace_type">WorkPlace Type:</label>
                        {workplace_type ? (
                          <select
                            type="text"
                            className={`form-control dropdown-menu-job_page ${
                              jobApplicationValues.workplace_type === ""
                                ? null
                                : "active_dropDown"
                            }`}
                            // placeholder="London"
                            id="workplace_type"
                            name="workplace_type"
                            onChange={handleChange}
                            value={jobApplicationValues.workplace_type}
                          >
                            <option value="">Select WorkPlace</option>
                            {workplace_type.map((item, index) => {
                              return (
                                <option key={index} value={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-2  col-md-5 col-12 ">
                      <div className="form-group">
                        <label htmlFor="job_type">Job Type:</label>
                        {job_type ? (
                          <select
                            type="text"
                            className={`form-control dropdown-menu-job_page ${
                              jobApplicationValues.job_type === ""
                                ? null
                                : "active_dropDown"
                            }`}
                            // placeholder="London"
                            id="job_type"
                            name="job_type"
                            onChange={handleChange}
                            value={jobApplicationValues.job_type}
                          >
                            <option value="">Select Job Type</option>
                            {job_type.map((item, index) => {
                              return (
                                <option key={index} value={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-2  col-md-5 col-12  ">
                      <div className="form-group">
                        <label htmlFor="experience_level">
                          Experience Level:
                        </label>
                        {experience ? (
                          <select
                            type="text"
                            className={`form-control dropdown-menu-job_page ${
                              jobApplicationValues.experience_level === ""
                                ? null
                                : "active_dropDown"
                            }`}
                            // placeholder="London"
                            id="experience_level"
                            name="experience_level"
                            onChange={handleChange}
                            value={jobApplicationValues.experience_level}
                          >
                            <option value="">Select Experience</option>
                            {experience.map((item, index) => {
                              return (
                                <option key={index} value={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div
                    className="d-flex justify-content-center "
                    style={{ gap: "12px" }}
                  >
                    <div
                      className=" w-75 d-flex flex-column   p-2 "
                      style={{
                        backgroundColor: "#f5f5f5",
                        alignItems: "center",
                      }}
                    >
                       <input
                        type="text"
                        className="form-control"
                        id="title_keywords"
                        name="title_keywords"
                        onChange={handleChange}
                        value={jobApplicationValues.title_keywords || ""}
                        placeholder="Enter job title keywords"
                      />
                    </div>
                    <button
                         onClick={handleSearch}
                      className="border-0 site-button d-flex align-items-center "
                      style={{
                        cursor: "pointer",
                        outline: "none",
                        gap: "7px",
                      }}
                    >
                      <FaSearch />
                      Search
                    </button>
                  </div>
                </div>
                {console.log(jobApplicationData,"Datajob")}
                {jobData.length !== 0 ? (
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-4 col-lg-5 m-b30 rounded-5 ">
                        <div className="sticky-top ">
                          {jobData ? (
                            <div className="candidate-info company-info rounded-5 ">
                              <ul
                                className="job-list-container rounded-4"
                                style={{
                                  maxHeight: "calc(100vh - 200px)",
                                  overflowY: "auto",
                                  boxShadow: "0 0 10px 0 rgba(0, 24, 128, 0.1)",
                                }}
                              >
                                {jobData.map((job) => (
                                  <div>
                                    <li key={job.s_no}>
                                      {console.log(job.s_no,'no')}
                                      <Link
                                        to="#"
                                        onClick={() => setSelectedJob(job)}
                                      >
                                        <div
                                          style={{
                                            display: "flex",
                                            width: "100%",
                                            position: "relative",
                                          }}
                                        >
                                          {/*<div
                                            style={{
                                              width: "30%",
                                            }}
                                          >
                                            <img
                                              src={testImg}
                                              alt=""
                                              style={{
                                                width: "80px",
                                                height: "80px",
                                              }}
                                            />
                                          </div> */}
                                          <div
                                            style={{
                                              width: "80%",
                                              overflow: "hidden",
                                            }}
                                          >
                                            {job.job_detail.job_title && (
                                              <p
                                                className="mb-0"
                                                style={{
                                                  color: "black",
                                                  fontWeight:"500",
                                                  fontSize: "20px",
                                                }}
                                              >
                                                {job.job_detail.job_title}
                                              </p>
                                            )} 
                                            <div
                                              className="d-flex flex-row mt-2 "
                                              style={{
                                                gap: "7px",
                                                fontWeight: "500",
                                              }}
                                            >
                                              {job.companies.company_name}
                                              <p
                                                className="mb-0"
                                                onClick={() => {
                                                  navigate(
                                                    `/user/company/${job.companies.id}`
                                                  );
                                                }}
                                              ></p>
                                            </div>
                                            <div
                                              className="d-flex flex-row mb-0 "
                                              style={{
                                                gap: "3px",
                                                fontSize:'12px'
                                                
                                              }}
                                            >
                                              {job.companies.cities.name}{","}{job.companies.states.name}
                                              <p
                                                className="mb-0"
                                                onClick={() => {
                                                  navigate(
                                                    `/user/company/${job.companies.id}`
                                                  );
                                                }}
                                              ></p>
                                            </div>

                                            {/*<div className="d-flex">
                                            <span
                                              style={{
                                                marginBottom: "0px",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                              }}
                                            >
                                              Skills required:
                                            </span>
                                            
                                            <span
                                              className="d-flex flex-row mb-0 "
                                              style={{ gap: "7px" }}
                                            >
                                              {job.job_detail.skills_arr.map(
                                                (item, index) => (
                                                  <span
                                                    style={{
                                                      fontSize: "12px",
                                                    }}
                                                   className="badge badge-primary mr-1 mb-1"
                                                    key={index}
                                                  >
                                                    {item}
                                                  </span>
                                                )
                                              )}
                                            </span>
                                            </div> */}

                                            <div
                                              className=" gap-0 align-items-center joblist"
                                              style={{
                                                gap: "0px",
                                                fontSize: "13px",

                                                height: "auto",
                                              }}
                                            >
                                              {/* {job.job_category && (
                                            <p
                                              style={{
                                                margin: "0px",
                                              }}>
                                              {job.job_category.name}
                                            </p>
                                          )}
                                          {job.job_type && (
                                            <p
                                              style={{
                                                margin: "0px",
                                              }}>
                                              {job.job_type.name}
                                            </p>
                                          )} */}
                                              <div
                                                className="d-flex "
                                                style={{
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <div>
                                                  {job.job_workplace_types
                                                    .name && (
                                                    <p
                                                      style={{
                                                        margin: "0px",
                                                      }}
                                                    >Workplace: {" "}
                                                      {
                                                        job.job_workplace_types
                                                          .name
                                                      }
                                                    </p>
                                                  )}
                                                </div>
                                                <div className="float-end">
                                                  {job.job_detail
                                                    .updated_at && (
                                                    <p
                                                      style={{
                                                        margin: "0px",
                                                        fontWeight: "600",
                                                      }}
                                                    >
                                                      {moment(
                                                        job.job_detail
                                                          .created_at
                                                      ).fromNow()}
                                                    </p>
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Link>
                                    </li>
                                  </div>
                                ))}
                              </ul>
                              <div className="text-center mt-3">
          <button className="site-button" onClick={loadmore}>
            View More
          </button>
        </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-7 m-b30 ">
                        {selectedJob && (
                          <div className="m-b20 job-bx rounded-4 ">
                            <div>
                              <div className="candidate-title ">
                                <div className="d-flex gap-4 justify-content-between align-items-center mt-6 p-2">
                                <div><Link to="#">
                                  <h3 className="mb-1">
                                    {selectedJob.job_detail.job_title}
                                  </h3>
                                </Link></div>
                                <div
                                  className=""
                                >{localStorage.getItem("jobSeekerLoginToken") ? (
                                  <>
                                    {selectedJob.job_detail.is_job_applied ? (
                                      <button
                                        className="site-button btn btn-primary"
                                        // onClick={handleShow}
                                      >
                                        View Status
                                      </button>
                                    ) : (
                                      <button
                                        className=" site-button btn btn-primary "
                                        onClick={() => {
                                          handleClose();
                                          submitApplication();
                                        }}
                                        // onClick={handleClose} yehi h formal submit
                                      > 
                                        Apply
                                      </button>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    <button
                                      className=" site-button btn btn-primary justify-end "
                                      onClick={() => navigate("/user/login")}
                                    >
                                      Apply now
                                    </button>
                                  </>
                                )}</div>
                                </div>
                                
                                <div className="job-details-content">
                                  {selectedJob.job_workplace_types.name &&
                                    selectedJob.job_type.name &&
                                    selectedJob.job_category.name && (
                                      <p className="p-2">
                                        {selectedJob.job_workplace_types.name} |{" "}
                                        {selectedJob.job_type.name} |{" "}
                                        {selectedJob.job_category.name}
                                      </p>
                                    )}
                                  <div
                                    className="d-flex"
                                    style={{ gap: "4px" }}
                                  >
                                    {selectedJob.job_detail.skills_arr.map(
                                      (item, index) => (
                                        <p key={index} className="btn btn-primary mr-1 mb-1">
                                          {item}
                                        </p>
                                      )
                                    )}
                                  </div>
                                  {selectedJob.job_detail.skills && (
                                    <p>
                                      Skills: {selectedJob.job_detail.skills}
                                    </p>
                                  )}
                                   
                                <p>You must create an nova account before continuing to the company website to apply</p>
                                 <div className="d-inline-block border-end border-1 border-btn btn-outline-secondary w-100 mb-4"></div>
                                <h5>Job details</h5>
                                
                                  {selectedJob.companies.id && (
                                    <div
                                      className="d-flex "
                                      style={{
                                        gap: "50px",
                                      }}
                                    >
                                      <p
                                        style={{
                                          cursor: "pointer",
                                        }}
                                        onClick={() => {
                                          navigate(
                                            `/user/company/${selectedJob.companies.id}`
                                          );
                                        }}
                                      >
                                        <i
                                          class="fa fa-briefcase"
                                          aria-hidden="true"
                                        ></i>
                                        {"  "}
                                        {selectedJob.companies.company_name}
                                      </p>
                                      <p>
                                        <i
                                          class="fa fa-registered"
                                          aria-hidden="true"
                                        ></i>

                                        {"  "}
                                        {selectedJob.companies.founded_date}
                                      </p>
                                    </div>
                                  )}
                                  
                                  {selectedJob.companies.id && (
                                    <div
                                      className="d-flex"
                                      style={{
                                        gap: "100px",
                                      }}
                                    >
                                     {/*
                                      <p>
                                        <i
                                          class="fa fa-users"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        {
                                          selectedJob.companies.company_size
                                            .range
                                        }
                                      </p>
                                     */}
                                      <p>
                                        <i
                                          class="fa fa-location-arrow"
                                          aria-hidden="true"
                                        ></i>
                                        {"  "}
                                        {
                                          selectedJob.companies.cities.name
                                        }, {selectedJob.companies.states.name}
                                      </p>
                                    </div>
                                  )}{" "}
                                </div>
                                <div className="d-inline-block border-end border-1 border-btn btn-outline-secondary w-100 my-3"></div>
                                <h5>Full job description</h5>
                                {selectedJob.job_detail.job_description && (
                                  <p className="mb-1">
                                    <div
                                      className="ql-editor"
                                      style={{
                                        fontSize: "13px",
                                      }}
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          selectedJob.job_detail
                                            .job_description,
                                      }}
                                    />
                                  </p>
                                )}
                              </div>
                              {selectedJob.job_detail.created_at && (
                                <p>
                                  Posted{" "}
                                  {moment(
                                    selectedJob.job_detail.created_at
                                  ).fromNow()}
                                </p>
                              )}
                              <div className="d-flex justify-content-start align-items-center">
                                

                                <Modal
                                  show={show}
                                  onHide={handleClose}
                                  backdrop="static"
                                  keyboard={false}
                                >
                                  <Modal.Header
                                    closeButton
                                    style={{ backgroundColor: "#ffff" }}
                                    className="mt-4"
                                  >
                                    <Modal.Title style={{ color: "#000" }}>
                                      <p> Apply to {selectedJob.company}</p>
                                    </Modal.Title>
                                  </Modal.Header>
                                 
                                    
                                     
                                      
                                <Tab.Pane eventKey="contact-info">
  <form className="col-12 p-a0">
    {selectedJob.screen_questions &&
    selectedJob.screen_questions.screen_question_keywords ? (
      <div>
        <div style={{ fontSize: "20px", paddingBottom: "10px" }}>
          Screening questions
        </div>
        {selectedJob.screen_questions.screen_question_keywords.map(
          (item, index) => (
            <div key={index}>
              <h4>{item.name}</h4>
              {item.screen_questions ? (
                <div>
                  {item.screen_questions.map((ques, questionIndex) => (
                    <div
                      key={questionIndex}
                      style={{ paddingBottom: "30px" }}
                    >
                      <h5>{ques.name}</h5>
                      {ques.screen_questions_options ? (
                        ques.screen_questions_options.map((option, optionIndex) => (
                          <Form.Check
                            key={optionIndex}
                            type="radio"
                            label={option.option}
                            id={`${ques.id}-${optionIndex}`}
                            className="site-button"
                            name={ques.name}
                            style={{
                              marginRight: "30px",
                              padding: "10px 30px",
                            }}
                            onClick={() => {
                              dispatch(
                                setJobSeekerAnswer({
                                  index: index,
                                  questionIndex: questionIndex,
                                  answer: option.option,
                                })
                              );
                            }}
                          />
                        ))
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          )
        )}
      </div>
    ) : null}
  </form>
</Tab.Pane>


                                       {/* <Tab.Pane eventKey="additional-info">
                                          
                                          <form className="col-12 p-a0">
                                            <h6 className="font-weight-600">
                                              Additional info
                                            </h6>
                                            <div class="form-group">
                                              <label for="englishProficiency">
                                                What is your level of
                                                proficiency in English?
                                              </label>
                                              <select
                                                class="form-control"
                                                id="englishProficiency"
                                                required
                                              >
                                                <option value="">
                                                  Select an option
                                                </option>
                                                <option>Beginner</option>
                                                <option>Intermediate</option>
                                                <option>Advanced</option>
                                                <option>Fluent</option>
                                              </select>
                                            </div>
                                            <div class="form-group">
                                              <label for="salaryRange">
                                                Are you okay with the salary
                                                range between 30k - 35K?
                                              </label>
                                              <select
                                                class="form-control"
                                                id="salaryRange"
                                                required
                                              >
                                                <option value="">
                                                  Select an option
                                                </option>
                                                <option>Yes</option>
                                                <option>No</option>
                                              </select>
                                            </div>
                                            <div class="form-group">
                                              <label for="customerServiceExperience">
                                                How many years of Customer
                                                Service experience do you
                                                currently have?
                                              </label>
                                              <input
                                                type="number"
                                                class="form-control"
                                                id="customerServiceExperience"
                                                placeholder="Enter years of experience"
                                                min="0"
                                                max="99"
                                                required
                                              />
                                            </div>
                                            <div class="form-group">
                                              <label for="workLocation">
                                                Are you comfortable to work on
                                                both Gurgaon and Delhi branches?
                                              </label>
                                              <select
                                                class="form-control"
                                                id="workLocation"
                                                required
                                              >
                                                <option value="">
                                                  Select an option
                                                </option>
                                                <option>Yes</option>
                                                <option>No</option>
                                              </select>
                                            </div>
                                          </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="resume-info">
                                          
                                          <form className="col-12 p-a0">
                                            <h6 className="font-weight-600">
                                              Resume info
                                            </h6>
                                            <div class="form-group">
                                              <label for="resume">
                                                Upload resume (DOC, DOCX, PDF,
                                                up to 2 MB)
                                              </label>
                                              <input
                                                type="file"
                                                class="form-control-file"
                                                id="resume"
                                                name="resume"
                                                accept=".doc, .docx, .pdf"
                                                required
                                              />
                                              <small class="form-text text-muted">
                                                Accepted file types: DOC, DOCX,
                                                PDF. Maximum file size: 2 MB.
                                              </small>
                                            </div>
                                          </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="immediate-info">
                                          <form className="col-12 p-a0">
                                            <h6 className="font-weight-600">
                                              immediate info
                                            </h6>

                                            <div class="form-group">
                                              <label for="immediateStart">
                                                We must fill this position
                                                urgently. Can you start
                                                immediately?
                                              </label>
                                              <select
                                                class="form-control"
                                                id="immediateStart"
                                                required
                                              >
                                                <option value="">
                                                  Select an option
                                                </option>
                                                <option>Yes</option>
                                                <option>No</option>
                                              </select>
                                            </div>
                                          </form>
                                        </Tab.Pane> */}
                                      
                                    
                                
                                  <Modal.Footer>
                                    {activeTab !== "contact-info" && (
                                      <button
                                        className="site-button mr-2"
                                        onClick={handlePrev}
                                      >
                                        Previous
                                      </button>
                                    )}
                                    {activeTab === "contact-info" && (
                                      <button
                                        className="site-button"
                                        onClick={() => {
                                          handleClose();
                                          submitApplication();
                                        }}
                                        // onClick={handleClose}
                                      >
                                        Submit
                                      </button>
                                    )}
                                  </Modal.Footer>
                                </Modal>

                                <label className="like-btn" labl>
                               
                                  <input
                                    type="checkbox"
                                    defaultChecked={
                                      selectedJob.job_detail.is_job_favorite
                                    }
                                    name={selectedJob.job_detail.id}
                                    onClick={() => {
                                      toggleFabJobs();
                                    }}
                                  />
                                  <span className="checkmark"></span>
                                  
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedJob ? (
                          <div className="job-bx rounded-5 ">
                            <h3>About Company</h3>
                            {selectedJob.companies.about}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-100 d-flex align-items-center justify-content-center ">
                    <img
                      src={SkeletonImg}
                      alt="no data there"
                      style={{ width: "40%" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );

  // return (
  //   <>
  //     <Header />
  //     {localStorage.getItem("jobSeekerLoginToken") ? <FixedHeader /> : null}

  //     <div className="page-content bg-white">
  //       {showSkeleton ? (
  //         <div className="bg-white w-100">
  //           <TwoBoxWithLinesSkeleton />
  //         </div>
  //       ) : (
  //         <div className="content-block">
  //           <div className="section-full bg-white py-5">
  //             <div className="container">
  //               <div className="row justify-content-center">
  //                 <div className="col-12 col-md-6 col-lg-2 mb-3">
  //                   <div className="form-group">
  //                     <label htmlFor="jobCategory">Choose Category</label>
  //                     <select
  //                       className={`form-control ${jobApplicationValues.jobCategory ? "active_dropDown" : ""}`}
  //                       id="jobCategory"
  //                       name="jobCategory"
  //                       onChange={handleChange}
  //                       value={jobApplicationValues.jobCategory}
  //                     >
  //                       <option value="">Select a Category</option>
  //                       {jobCategories.map((item, index) => (
  //                         <option key={index} value={item.id}>
  //                           {item.name}
  //                         </option>
  //                       ))}
  //                     </select>
  //                   </div>
  //                 </div>

  //                 <div className="col-12 col-md-6 col-lg-2 mb-3">
  //                   <div className="form-group">
  //                     <label htmlFor="state_id">State:</label>
  //                     <select
  //                       className={`form-control ${jobApplicationValues.state_id ? "active_dropDown" : ""}`}
  //                       id="state_id"
  //                       name="state_id"
  //                       onChange={handleChange}
  //                       value={jobApplicationValues.state_id}
  //                     >
  //                       <option value="">Select a State</option>
  //                       {states.map((item, index) => (
  //                         <option key={index} value={item.id}>
  //                           {item.name}
  //                         </option>
  //                       ))}
  //                     </select>
  //                   </div>
  //                 </div>

  //                 <div className="col-12 col-md-6 col-lg-2 mb-3">
  //                   <div className="form-group">
  //                     <label htmlFor="city_id">City:</label>
  //                     <select
  //                       className={`form-control ${jobApplicationValues.city_id !== 0 ? "active_dropDown" : ""}`}
  //                       id="city_id"
  //                       name="city_id"
  //                       onChange={handleChange}
  //                       value={jobApplicationValues.city_id}
  //                     >
  //                       <option value="">Select A City</option>
  //                       {cities.map((item, index) => (
  //                         <option key={index} value={item.id}>
  //                           {item.name}
  //                         </option>
  //                       ))}
  //                     </select>
  //                   </div>
  //                 </div>

  //                 <div className="col-12 col-md-6 col-lg-2 mb-3">
  //                   <div className="form-group">
  //                     <label htmlFor="workplace_type">WorkPlace Type:</label>
  //                     <select
  //                       className={`form-control ${jobApplicationValues.workplace_type ? "active_dropDown" : ""}`}
  //                       id="workplace_type"
  //                       name="workplace_type"
  //                       onChange={handleChange}
  //                       value={jobApplicationValues.workplace_type}
  //                     >
  //                       <option value="">Select WorkPlace</option>
  //                       {workplace_type.map((item, index) => (
  //                         <option key={index} value={item.id}>
  //                           {item.name}
  //                         </option>
  //                       ))}
  //                     </select>
  //                   </div>
  //                 </div>

  //                 <div className="col-12 col-md-6 col-lg-2 mb-3">
  //                   <div className="form-group">
  //                     <label htmlFor="job_type">Job Type:</label>
  //                     <select
  //                       className={`form-control ${jobApplicationValues.job_type ? "active_dropDown" : ""}`}
  //                       id="job_type"
  //                       name="job_type"
  //                       onChange={handleChange}
  //                       value={jobApplicationValues.job_type}
  //                     >
  //                       <option value="">Select Job Type</option>
  //                       {job_type.map((item, index) => (
  //                         <option key={index} value={item.id}>
  //                           {item.name}
  //                         </option>
  //                       ))}
  //                     </select>
  //                   </div>
  //                 </div>

  //                 <div className="col-12 col-md-6 col-lg-2 mb-3">
  //                   <div className="form-group">
  //                     <label htmlFor="experience_level">Experience Level:</label>
  //                     <select
  //                       className={`form-control ${jobApplicationValues.experience_level ? "active_dropDown" : ""}`}
  //                       id="experience_level"
  //                       name="experience_level"
  //                       onChange={handleChange}
  //                       value={jobApplicationValues.experience_level}
  //                     >
  //                       <option value="">Select Experience</option>
  //                       {experience.map((item, index) => (
  //                         <option key={index} value={item.id}>
  //                           {item.name}
  //                         </option>
  //                       ))}
  //                     </select>
  //                   </div>
  //                 </div>
  //               </div>

  //               <div className="row justify-content-center mt-4">
  //                 <div className="col-12 col-md-8">
  //                   <div className="input-group">
  //                     <input
  //                       type="text"
  //                       name="search_input"
  //                       id="search_input"
  //                       onChange={handleChange}
  //                       value={jobApplicationValues.search_input}
  //                       className="form-control"
  //                       placeholder="Search here..."
  //                     />
  //                     <div className="input-group-append">
  //                       <button
  //                         onClick={handleGetReq}
  //                         className="btn site-button"
  //                         type="button"
  //                       >
  //                         <FaSearch className="mr-2" /> Search
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>

  //             {jobApplicationData.length !== 0 ? (
  //               <div className="container mt-5">
  //                 <div className="row">
  //                   <div className="col-lg-4 mb-4">
  //                     <div className="sticky-top">
  //                       <div className="candidate-info company-info rounded-4 overflow-hidden">
  //                         <ul className="job-list-container list-unstyled" style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
  //                           {jobApplicationData.map((job) => (
  //                             <li key={job.s_no} className="p-3 border-bottom">
  //                               <Link to="#" onClick={() => setSelectedJob(job)} className="text-decoration-none">
  //                                 <div className="d-flex align-items-center">
  //                                   <div className="flex-grow-1">
                                      // <h5 className="mb-1">{job.job_detail.job_title}</h5>
                                      // <p className="mb-1">{job.companies.company_name}</p>
                                      // <p className="mb-1 small">{job.companies.cities.name}, {job.companies.states.name}</p>
  //                                     <div className="d-flex flex-wrap">
  //                                       {job.job_detail.skills_arr.slice(0, 3).map((item, index) => (
  //                                         <span key={index} className="badge badge-primary mr-1 mb-1">{item}</span>
  //                                       ))}
  //                                     </div>
  //                                     <p className="mb-0 small">{job.job_workplace_types.name} | {job.job_type.name}</p>
  //                                     <p className="mb-0 small text-muted">{moment(job.job_detail.updated_at).fromNow()}</p>
  //                                   </div>
  //                                 </div>
  //                               </Link>
  //                             </li>
  //                           ))}
  //                         </ul>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-8">
  //                     {selectedJob && (
  //                       <div className="job-bx rounded-4 p-4 mb-4 ">
  //                         <div className="d-flex justify-content-between align-items-center mb-4 mt-6 ">
  //                           <h3>{selectedJob.job_detail.job_title}</h3>
  //                           {localStorage.getItem("jobSeekerLoginToken") ? (
  //                             selectedJob.job_detail.is_job_applied ? (
  //                               <button className="btn site-button btn-primary">View Status</button>
  //                             ) : (
  //                               <button className="btn site-button btn-primary" onClick={() => { handleClose(); submitApplication(); }}>
  //                                 Apply
  //                               </button>
  //                             )
  //                           ) : (
  //                             <button className="btn site-button" onClick={() => navigate("/user/login")}>
  //                               Apply now
  //                             </button>
  //                           )}
  //                         </div>
                          
  //                         <p>{selectedJob.job_workplace_types.name} | {selectedJob.job_type.name} | {selectedJob.job_category.name}</p>
                          
  //                         <div className="mb-3">
  //                           {selectedJob.job_detail.skills_arr.map((item, index) => (
  //                             <span key={index} className="badge badge-primary mr-1 mb-1">{item}</span>
  //                           ))}
  //                         </div>
                          
  //                       {token?<p className="mb-4">You must create a Nova account before continuing to the company website to apply</p>:""}
                          
  //                         <h5 className="mb-3">Job details</h5>
                          
  //                         <div className="mb-3">
  //                           <p><i className="fa fa-briefcase mr-2"></i>{selectedJob.companies.company_name}</p>
  //                           <p><i className="fa fa-calendar mr-2"></i>Founded: {selectedJob.companies.founded_date}</p>
  //                           <p><i className="fa fa-map-marker mr-2"></i>{selectedJob.companies.cities.name}, {selectedJob.companies.states.name}</p>
  //                         </div>
                          
  //                         <h5 className="mb-3">Full job description</h5>
                          
  //                         <div className="ql-editor" dangerouslySetInnerHTML={{ __html: selectedJob.job_detail.job_description }} />
                          
  //                         <p className="mt-4">Posted {moment(selectedJob.job_detail.created_at).fromNow()}</p>
                          
  //                         <div className="d-flex align-items-center mt-4">
  //                           <label className="like-btn mr-3">
  //                             <input
  //                               type="checkbox"
  //                               defaultChecked={selectedJob.job_detail.is_job_favorite}
  //                               name={selectedJob.job_detail.id}
  //                               onClick={toggleFabJobs}
  //                             />
  //                             <span className="checkmark"></span>
  //                           </label>
  //                           <span>Save Job</span>
  //                         </div>
  //                       </div>
  //                     )}
                      
  //                     {selectedJob && (
  //                       <div className="job-bx rounded-4 p-4">
  //                         <h3 className="mb-3">About Company</h3>
  //                         <p>{selectedJob.companies.about}</p>
  //                       </div>
  //                     )}
  //                   </div>
  //                 </div>
  //               </div>
  //             ) : (
  //               <div className="container mt-5">
  //                 <div className="row justify-content-center">
  //                   <div className="col-md-6 text-center">
  //                     <img src={SkeletonImg} alt="No data available" className="img-fluid mb-3" style={{ maxWidth: "300px" }} />
  //                     <p>No job listings found. Try adjusting your search criteria.</p>
  //                   </div>
  //                 </div>
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       )}
  //     </div>

  //     <Footer />
  //   </>
  // );
  // return (
  //   <>
  //     <Header />
  //     {localStorage.getItem("jobSeekerLoginToken") ? <FixedHeader /> : null}

  //     <div className="page-content bg-white">
  //       {showSkeleton ? (
  //         <div className="bg-white w-100">
  //           <TwoBoxWithLinesSkeleton />
  //         </div>
  //       ) : (
  //         <div className="content-block">
  //           <div className="section-full bg-white py-3 py-md-5">
  //             <div className="container">
  //               <div className="row justify-content-center">
  //                 {['jobCategory', 'state_id', 'city_id', 'workplace_type', 'job_type', 'experience_level'].map((field) => (
  //                   <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-3" key={field}>
  //                     <div className="form-group">
  //                       <label htmlFor={field}>{field.replace('_', ' ').charAt(0).toUpperCase() + field.replace('_', ' ').slice(1)}:</label>
  //                       <select
  //                         className={`form-control ${jobApplicationValues[field] ? "active_dropDown" : ""}`}
  //                         id={field}
  //                         name={field}
  //                         onChange={handleChange}
  //                         value={jobApplicationValues[field]}
  //                       >
  //                         <option value="">Select {field.replace('_', ' ')}</option>
  //                         {/* Map options here based on the field */}
  //                       </select>
  //                     </div>
  //                   </div>
  //                 ))}
  //               </div>

  //               <div className="row justify-content-center mt-4">
  //                 <div className="col-12 col-md-8">
  //                   <div className="input-group">
  //                     <input
  //                       type="text"
  //                       name="search_input"
  //                       id="search_input"
  //                       onChange={handleChange}
  //                       value={jobApplicationValues.search_input}
  //                       className="form-control"
  //                       placeholder="Search here..."
  //                     />
  //                     <div className="input-group-append">
  //                       <button
  //                         onClick={handleGetReq}
  //                         className="btn site-button"
  //                         type="button"
  //                       >
  //                         <FaSearch className="mr-2" /> Search
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>

  //             {jobApplicationData.length !== 0 ? (
  //               <div className="container mt-5">
  //                 <div className="row">
  //                   <div className={`col-lg-4 mb-4 sidebar ${sidebarOpen ? 'open' : ''}`}>
  //                     <div className="sticky-top">
  //                       <div className="candidate-info company-info rounded-4 overflow-hidden">
  //                         <ul className="job-list-container list-unstyled" style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
  //                           {jobApplicationData.map((job) => (
  //                             <li key={job.s_no} className="p-3 border-bottom">
  //                               <Link to="#" onClick={() => { setSelectedJob(job); setSidebarOpen(false); }} className="text-decoration-none">
  //                                 <div className="d-flex align-items-center">
  //                                   <div className="flex-grow-1">
  //                                     <h5 className="mb-1">{job.job_detail.job_title}</h5>
  //                                     <p className="mb-1">{job.companies.company_name}</p>
  //                                     <p className="mb-1 small">{job.companies.cities.name}, {job.companies.states.name}</p>
  //                                     <div className="d-flex flex-wrap">
  //                                       {job.job_detail.skills_arr.slice(0, 3).map((item, index) => (
  //                                         <span key={index} className="badge badge-primary mr-1 mb-1">{item}</span>
  //                                       ))}
  //                                     </div>
  //                                     <p className="mb-0 small">{job.job_workplace_types.name} | {job.job_type.name}</p>
  //                                     <p className="mb-0 small text-muted">{moment(job.job_detail.updated_at).fromNow()}</p>
  //                                   </div>
  //                                 </div>
  //                               </Link>
  //                             </li>
  //                           ))}
  //                         </ul>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-8">
  //                     <button className="btn btn-primary d-lg-none mb-3" onClick={toggleSidebar}>
  //                       <FaBars /> {sidebarOpen ? 'Close' : 'Open'} Sidebar
  //                     </button>
  //                     {selectedJob && (
  //                       <div className="job-bx rounded-4 p-3 p-md-4 mb-4">
  //                         <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 mt-3 mt-md-6">
  //                           <h3 className="mb-3 mb-md-0">{selectedJob.job_detail.job_title}</h3>
  //                           {localStorage.getItem("jobSeekerLoginToken") ? (
  //                             selectedJob.job_detail.is_job_applied ? (
  //                               <button className="btn site-button btn-primary mt-2 mt-md-0">View Status</button>
  //                             ) : (
  //                               <button className="btn site-button btn-primary mt-2 mt-md-0" onClick={submitApplication}>
  //                                 Apply
  //                               </button>
  //                             )
  //                           ) : (
  //                             <button className="btn site-button mt-2 mt-md-0" onClick={() => navigate("/user/login")}>
  //                               Apply now
  //                             </button>
  //                           )}
  //                         </div>
                          
  //                         <p>{selectedJob.job_workplace_types.name} | {selectedJob.job_type.name} | {selectedJob.job_category.name}</p>
                          
  //                         <div className="mb-3">
  //                           {selectedJob.job_detail.skills_arr.map((item, index) => (
  //                             <span key={index} className="badge badge-primary mr-1 mb-1">{item}</span>
  //                           ))}
  //                         </div>
                          
  //                         <h5 className="mb-3">Job details</h5>
                          
  //                         <div className="mb-3">
  //                           <p><i className="fa fa-briefcase mr-2"></i>{selectedJob.companies.company_name}</p>
  //                           <p><i className="fa fa-calendar mr-2"></i>Founded: {selectedJob.companies.founded_date}</p>
  //                           <p><i className="fa fa-map-marker mr-2"></i>{selectedJob.companies.cities.name}, {selectedJob.companies.states.name}</p>
  //                         </div>
                          
  //                         <h5 className="mb-3">Full job description</h5>
                          
  //                         <div className="ql-editor" dangerouslySetInnerHTML={{ __html: selectedJob.job_detail.job_description }} />
                          
  //                         <p className="mt-4">Posted {moment(selectedJob.job_detail.created_at).fromNow()}</p>
                          
  //                         <div className="d-flex align-items-center mt-4">
  //                           <label className="like-btn mr-3">
  //                             <input
  //                               type="checkbox"
  //                               defaultChecked={selectedJob.job_detail.is_job_favorite}
  //                               name={selectedJob.job_detail.id}
  //                               onClick={toggleFabJobs}
  //                             />
  //                             <span className="checkmark"></span>
  //                           </label>
  //                           <span>Save Job</span>
  //                         </div>
  //                       </div>
  //                     )}
                      
  //                     {selectedJob && (
  //                       <div className="job-bx rounded-4 p-3 p-md-4">
  //                         <h3 className="mb-3">About Company</h3>
  //                         <p>{selectedJob.companies.about}</p>
  //                       </div>
  //                     )}
  //                   </div>
  //                 </div>
  //               </div>
  //             ) : (
  //               <div className="container mt-5">
  //                 <div className="row justify-content-center">
  //                   <div className="col-md-6 text-center">
  //                     <img src={SkeletonImg} alt="No data available" className="img-fluid mb-3" style={{ maxWidth: "300px" }} />
  //                     <p>No job listings found. Try adjusting your search criteria.</p>
  //                   </div>
  //                 </div>
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       )}
  //     </div>

  //     <Footer />

  //     <style jsx>{`
  //       .sidebar {
  //         transition: all 0.3s ease-in-out;
  //       }
  //       @media (max-width: 991px) {
  //         .sidebar {
  //           position: fixed;
  //           top: 0;
  //           left: -100%;
  //           height: 100vh;
  //           width: 80%;
  //           max-width: 300px;
  //           background-color: white;
  //           z-index: 1000;
  //           overflow-y: auto;
  //           padding: 20px;
  //           box-shadow: 0 0 10px rgba(0,0,0,0.1);
  //         }
  //         .sidebar.open {
  //           left: 0;
  //         }
  //       }
  //     `}</style>
  //   </>
  // );
};


export default JobPage;
