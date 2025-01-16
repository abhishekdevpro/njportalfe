import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import axios from "axios";

import FixedHeader from "../Layout/fixedHeader";
import moment from "moment";
import JobPageSkeleton from "../skeleton/jobPage";
import noDataFound from "../../images/nodata.png";
import Profilesidebar from "../Element/Profilesidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  setJobSeekerAnswer,
  setScreeningQuestion,
} from "../../store/reducers/jobApplicationScreeningQues";
import { Form, Tab } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { showToastError, showToastSuccess } from "../../utils/toastify";
const postBlog = [
  { title: "PHP Web Developer" },
  { title: "Software Developer" },
  { title: "Branch Credit Manager" },
];
function Jobsappliedjob() {
  const navigate = useNavigate();
  const [skeleton, setSkeleton] = useState(true);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const jobApplicationData = useSelector(
    (state) => state.jobApplicationSlice.jobApplicationData
  );
  const token = localStorage.getItem("jobSeekerLoginToken");
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.novajobs.us/api/jobseeker/jobs-applied",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data.data, "jobapplied");
        setData(response.data.data);
        setSkeleton(false);
      })
      .catch((err) => console.log(err, "job applied"));
  }, []);
  const [selectedJob, setSelectedJob] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSelectJob = (job) => {
    console.log(job, "selected job");
    setSelectedJob(job);
  };

  useEffect(() => {
    if (selectedJob && selectedJob.screen_questions) {
      dispatch(setScreeningQuestion(selectedJob.screen_questions));
    }
  }, [selectedJob]);

  useEffect(() => {
    if (jobApplicationData && jobApplicationData.length > 0) {
      setSelectedJob(jobApplicationData[0]);
    } else {
      console.log("No job application data available");
    }
    console.log(jobApplicationData, "error");
  }, [jobApplicationData]);

  const screeningQuestion = useSelector(
    (state) => state.jobApplicationScreeningQues.selectedScreeningQuestions
  );
  const [activeTab, setActiveTab] = useState("contact-info");
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
  console.log(selectedJob?.job_detail?.id, "job id");
  const handleSubmit = () => {
    axios({
      method: "POST",
      url: "http://93.188.167.106:3001/api/jobseeker/jobs-applied",
      headers: {
        Authorization: token,
      },
      data: {
        job_id: selectedJob.job_detail.id,
        screen_questions: screeningQuestion,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        showToastError(err?.response?.data?.message);
      });
  };
  const handleShowModal = (item) => {
    setSelectedJob(item);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedJob(null);
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
  // Toggle favorite jobs for mobile view
  const toggleFabJobsmobile = async () => {
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
  return (
    <>
      <Header2 />
      <FixedHeader />

      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-4 m-b30">
                  <div className="sticky-top">
                    <div className="candidate-info">
                      <ul>
                        <li>
                          <Link to={"/user/jobs-profile"}>
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <span>Profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/user/jobs-my-resume"}>
                            <i
                              className="fa fa-file-text-o"
                              aria-hidden="true"
                            ></i>
                            <span>My Resume</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/user/jobs-saved-jobs"}>
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            <span>Saved Jobs</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/user/jobs-applied-job"}
                            className="active"
                          >
                            <i
                              className="fa fa-briefcase"
                              aria-hidden="true"
                            ></i>
                            <span>Applied Jobs</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/user/jobs-alerts"}>
                            <i className="fa fa-bell-o" aria-hidden="true"></i>
                            <span>Job Alerts</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/user/jobs-cv-manager"}>
                            <i
                              className="fa fa-id-card-o"
                              aria-hidden="true"
                            ></i>
                            <span>CV Manager</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/user/skill-test"}>
                            <i
                              className="fa fa-id-card-o"
                              aria-hidden="true"
                            ></i>
                            <span>Skill Test</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/user/jobs-change-password"}>
                            <i className="fa fa-key" aria-hidden="true"></i>
                            <span>Change Password</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"./"}>
                            <i
                              className="fa fa-sign-out"
                              aria-hidden="true"
                            ></i>
                            <span>Log Out</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <Profilesidebar data={"applied-jobs"} />
                <div className="col-xl-9 col-lg-8 m-b30 browse-job">
                  <div className="job-bx-title  clearfix">
                    <h5 className="font-weight-700 pull-left text-uppercase">
                      Applied Jobs
                    </h5>
                    <div className="float-right">
                      <span className="select-title">Sort by freshness</span>
                      <select className="custom-btn">
                        <option>Last 2 Months</option>
                        <option>Last Months</option>
                        <option>Last Weeks</option>
                        <option>Last 3 Days</option>
                      </select>
                    </div>
                  </div>
                  {skeleton === true ? (
                    <JobPageSkeleton />
                  ) : (
                    <div>
                      {data ? (
                        <ul className="post-job-bx browse-job">
                          {data.map((item, index) => {
                            const formattedCreatedDate = moment(
                              item.job_detail.created_at
                            ).fromNow();
                            const formattedDate = moment(
                              item.job_applied.created_at
                            ).format("MMMM-DD-YYYY");
                            return (
                              <li key={index}>
                                <div className="post-bx">
                                  <div className="job-post-info m-a0">
                                    <h4 className="d-none d-md-block">
                                      <Link
                                        to={`/user/job/${item.job_detail.id}`}
                                      >
                                        {item.job_detail.job_title}
                                      </Link>
                                    </h4>
                                    <h4
                                      className=" d-md-none"
                                      onClick={() => handleShowModal(item)}
                                    >
                                      {item.job_detail.job_title}
                                    </h4>
                                    <ul>
                                      {item.countries.name ||
                                      item.states.name ||
                                      item.cities.name ? (
                                        <li>
                                          <i className="fa fa-map-marker"></i>{" "}
                                          {item.countries.name},{" "}
                                          {item.states.name},{item.cities.name}
                                        </li>
                                      ) : null}
                                      {item.job_category.name ? (
                                        <li>
                                          <i className="fa fa-bookmark-o"></i>{" "}
                                          {item.job_category.name}
                                        </li>
                                      ) : null}
                                      {item.job_type.name ? (
                                        <li>{item.job_type.name}</li>
                                      ) : null}
                                      {item.job_workplace_types.name ? (
                                        <li>{item.job_workplace_types.name}</li>
                                      ) : null}
                                    </ul>
                                    {/* <p>{item.job_detail.job_description}</p> */}
                                    {/* <ul>
      <li>
        <Link to={"/user/company-profile"}>
          @company-name
        </Link>
      </li>
      <li>
        <i className="fa fa-map-marker"></i> Sacramento,
        California
      </li>
      <li>
        <i className="fa fa-money"></i> 25,000
      </li>
    </ul> */}
                                    <div className="job-time m-t15 m-b10">
                                      {/* Applied on:{" "} */}
                                      {/* {Date(item.job_applied.created_at)} */}
                                      Applied on :{formattedDate}
                                      {item.job_detail.skills_arr ? (
                                        <div>
                                          {item.job_detail.skills_arr.map(
                                            (item, index) => {
                                              return (
                                                <span key={index}>{item}</span>
                                              );
                                            }
                                          )}
                                        </div>
                                      ) : null}
                                    </div>
                                    <div className="posted-info clearfix d-flex justify-content-between ">
                                      <p className="m-tb0 text-primary w-50 ">
                                        <span className="text-black m-r10">
                                          Posted:
                                        </span>{" "}
                                        {formattedCreatedDate}
                                      </p>
                                      <div
                                        className="d-flex align-items-center  w-50 justify-content-end "
                                        style={{ gap: "7px" }}
                                      >
                                        {/* <Link
                                          to={"/user/jobs-my-resume"}
                                          className="site-button button-sm float-right"
                                        >
                                          Job Details
                                        </Link>
                                        <button
                                          onClick={() => {
                                            handleShow();
                                            handleSelectJob(item);
                                          }}
                                          className="site-button button-sm float-right"
                                        >
                                          Apply
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <div className="d-flex w-100  justify-content-center ">
                          <img
                            src={noDataFound}
                            alt="no data found"
                            style={{ width: "400px" }}
                          />
                        </div>
                      )}
                      <Modal
                        show={showModal}
                        onHide={handleCloseModal}
                        centered
                        size="lg"
                      >
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body className="p-0">
                          {selectedJob && (
                            <div className="m-b20   ">
                              <div>
                                <div className="candidate-title ">
                                  <div className=" align-items-center mt-6 p-2">
                                    <div>
                                      <Link to="#">
                                        <h5 className="mb-1">
                                          {selectedJob.job_detail.job_title}
                                        </h5>
                                      </Link>
                                    </div>
                                    <div className="">
                                      {localStorage.getItem(
                                        "jobSeekerLoginToken"
                                      ) ? (
                                        <>
                                          {selectedJob.job_detail
                                            .is_job_applied ? (
                                            <button
                                              className="site-button btn btn-primary "
                                              // onClick={handleShow}
                                            >
                                              View Status
                                            </button>
                                          ) : (
                                            <button
                                              className=" site-button btn btn-primary  "
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
                                            onClick={() =>
                                              navigate("/user/login")
                                            }
                                          >
                                            Apply now
                                          </button>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                  <div className="job-details-content">
                                    {selectedJob.job_workplace_types.name &&
                                      selectedJob.job_type.name &&
                                      selectedJob.job_category.name && (
                                        <p className="p-2">
                                          {selectedJob.job_workplace_types.name}{" "}
                                          | {selectedJob.job_type.name} |{" "}
                                          {selectedJob.job_category.name}
                                        </p>
                                      )}
                                    {selectedJob?.job_detail?.skills_arr && (
                                      <div
                                        className="d-flex"
                                        style={{
                                          gap: "4px",
                                          overflowX: "auto", // Enable horizontal scrolling
                                          whiteSpace: "nowrap", // Prevent items from wrapping
                                          maxWidth: "100%",
                                        }}
                                      >
                                        {selectedJob.job_detail.skills_arr.map(
                                          (item, index) => (
                                            <p
                                              key={index}
                                              className="btn btn-primary mr-1 mb-1 badge"
                                            >
                                              {item}
                                            </p>
                                          )
                                        )}
                                      </div>
                                    )}
                                    {selectedJob.job_detail.skills && (
                                      <p>
                                        Skills: {selectedJob.job_detail.skills}
                                      </p>
                                    )}
                                    <p>
                                      You must create an nova account before
                                      continuing to the company website to apply
                                    </p>
                                    <div className="d-inline-block border-end border-1 border-btn btn-outline-secondary w-100 mb-4"></div>
                                    <h6>job details</h6>
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
                                        <p>
                                          <i className="fa fa-map-marker mr-2"></i>
                                          {selectedJob.companies.cities.name},{" "}
                                          {selectedJob.companies.states.name},{" "}
                                          {selectedJob.companies.countries.name}
                                        </p>
                                      </div>
                                    )}{" "}
                                  </div>

                                  <div className="d-inline-block border-end border-1 border-btn btn-outline-secondary w-100 my-3"></div>
                                  <h6>Full job description</h6>
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
                                        selectedJob.screen_questions
                                          .screen_question_keywords ? (
                                          <div>
                                            <div
                                              style={{
                                                fontSize: "20px",
                                                paddingBottom: "10px",
                                              }}
                                            >
                                              Screening questions
                                            </div>
                                            {selectedJob.screen_questions.screen_question_keywords.map(
                                              (item, index) => (
                                                <div key={index}>
                                                  <h4>{item.name}</h4>
                                                  {item.screen_questions ? (
                                                    <div>
                                                      {item.screen_questions.map(
                                                        (
                                                          ques,
                                                          questionIndex
                                                        ) => (
                                                          <div
                                                            key={questionIndex}
                                                            style={{
                                                              paddingBottom:
                                                                "30px",
                                                            }}
                                                          >
                                                            <h5>{ques.name}</h5>
                                                            {ques.screen_questions_options
                                                              ? ques.screen_questions_options.map(
                                                                  (
                                                                    option,
                                                                    optionIndex
                                                                  ) => (
                                                                    <Form.Check
                                                                      key={
                                                                        optionIndex
                                                                      }
                                                                      type="radio"
                                                                      label={
                                                                        option.option
                                                                      }
                                                                      id={`${ques.id}-${optionIndex}`}
                                                                      className="site-button"
                                                                      name={
                                                                        ques.name
                                                                      }
                                                                      style={{
                                                                        marginRight:
                                                                          "30px",
                                                                        padding:
                                                                          "10px 30px",
                                                                      }}
                                                                      onClick={() => {
                                                                        dispatch(
                                                                          setJobSeekerAnswer(
                                                                            {
                                                                              index:
                                                                                index,
                                                                              questionIndex:
                                                                                questionIndex,
                                                                              answer:
                                                                                option.option,
                                                                            }
                                                                          )
                                                                        );
                                                                      }}
                                                                    />
                                                                  )
                                                                )
                                                              : null}
                                                          </div>
                                                        )
                                                      )}
                                                    </div>
                                                  ) : null}
                                                </div>
                                              )
                                            )}
                                          </div>
                                        ) : null}
                                      </form>
                                    </Tab.Pane>

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
                                    {console.log(selectedJob, "selected job")}
                                    <input
                                      type="checkbox"
                                      defaultChecked={
                                        selectedJob.job_detail.is_job_favorite
                                      }
                                      name={selectedJob.job_detail.id}
                                      onClick={() => {
                                        toggleFabJobsmobile();
                                      }}
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          )}
                          {selectedJob ? (
                            <div className="  ">
                              <h5>About Company</h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: selectedJob.companies.about,
                                }}
                              />
                            </div>
                          ) : null}
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={handleCloseModal}
                          >
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  )}

                  <div className="pagination-bx m-t30">
                    <ul className="pagination">
                      <li className="previous">
                        <Link to={"#"}>
                          <i className="ti-arrow-left"></i> Prev
                        </Link>
                      </li>
                      <li className="active">
                        <Link to={"#"}>1</Link>
                      </li>
                      <li>
                        <Link to={"#"}>2</Link>
                      </li>
                      <li>
                        <Link to={"#"}>3</Link>
                      </li>
                      <li className="next">
                        <Link to={"#"}>
                          Next <i className="ti-arrow-right"></i>
                        </Link>
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
export default Jobsappliedjob;
