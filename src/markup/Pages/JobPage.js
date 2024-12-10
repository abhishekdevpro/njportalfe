

// const JobPage = ()=>{
//   return(
//     <>
//       <UserHeader2 />
//       <Jobsection />
//     </>
//   )


// }

// export default JobPage;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showToastError } from "../../utils/toastify";
import moment from "moment";
import SkeletonImg from "../../images/jobpage/No data-pana.png";

function JobPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Pagination State
  const [page, setPage] = useState(1);
  const [perPage] = useState(7);
  const [jobApplicationData, setJobApplicationData] = useState([]);
  const [hasMoreJobs, setHasMoreJobs] = useState(true);
  const [loading, setLoading] = useState(false);

  // Selected Job State
  const [selectedJob, setSelectedJob] = useState(null);

  // Token for Authorization
  const token = localStorage.getItem("jobSeekerLoginToken");

  // Fetch Jobs Function
  const fetchJobs = async (currentPage, initialLoad = false) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/jobseeker/job-lists?page_no=${currentPage}&page_size=${perPage}&is_publish=1`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const newJobs = response.data.data || [];

      // Update jobs based on whether it's initial load or load more
      if (initialLoad) {
        setJobApplicationData(newJobs);
        // Select first job by default on initial load
        if (newJobs.length > 0) {
          setSelectedJob(newJobs[0]);
        }
      } else {
        // Append new jobs for load more
        setJobApplicationData(prevJobs => [...prevJobs, ...newJobs]);
      }

      // Check if there are more jobs to load
      setHasMoreJobs(newJobs.length === perPage);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      showToastError("Failed to fetch jobs");
      setLoading(false);
    }
  };

  // Initial Load Effect
  useEffect(() => {
    fetchJobs(page, true);
  }, []);

  // Load More Handler
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchJobs(nextPage);
  };

  // Select Job Handler
  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="container">
          <div className="row">
            {/* Job List Section */}
            <div className="col-xl-4 col-lg-5 m-b30">
              <div className="sticky-top">
                <div className="candidate-info company-info rounded-5">
                  <ul 
                    className="job-list-container rounded-4"
                    style={{
                      maxHeight: "calc(100vh - 200px)",
                      overflowY: "auto",
                    }}
                  >
                    {jobApplicationData.map((job, index) => (
                      <li 
                        key={`${job.s_no}-${index}`} 
                        onClick={() => handleSelectJob(job)}
                        style={{ 
                          cursor: 'pointer', 
                          backgroundColor: selectedJob?.s_no === job.s_no ? '#f0f0f0' : 'white' 
                        }}
                      >
                        <div className="d-flex">
                          <div style={{ width: "80%" }}>
                            <h4>{job.job_detail.job_title}</h4>
                            <p>{job.companies.company_name}</p>
                            <div className="d-flex justify-content-between">
                              <span>{job.companies.cities.name}, {job.companies.states.name}</span>
                              <span>{moment(job.job_detail.created_at).fromNow()}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Load More Button */}
                  {hasMoreJobs && (
                    <div className="text-center mt-3">
                      <button 
                        className="btn btn-primary"
                        onClick={handleLoadMore}
                        disabled={loading}
                      >
                        {loading ? 'Loading...' : 'Load More Jobs'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Job Details Section */}
            <div className="col-xl-8 col-lg-7 m-b30">
              {selectedJob ? (
                <div className="job-details-card">
                  <h2>{selectedJob.job_detail.job_title}</h2>
                  <div className="company-info">
                    <h3>{selectedJob.companies.company_name}</h3>
                    <p>
                      {selectedJob.companies.cities.name}, 
                      {selectedJob.companies.states.name}
                    </p>
                  </div>

                  <div className="job-description">
                    <h4>Job Description</h4>
                    <div 
                      dangerouslySetInnerHTML={{
                        __html: selectedJob.job_detail.job_description
                      }} 
                    />
                  </div>

                  <div className="job-meta">
                    <p>Posted {moment(selectedJob.job_detail.created_at).fromNow()}</p>
                    <div className="skills">
                      <h4>Required Skills</h4>
                      {selectedJob.job_detail.skills_arr.map((skill, index) => (
                        <span key={index} className="badge badge-secondary mr-2">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <img 
                    src={SkeletonImg} 
                    alt="No jobs available" 
                    style={{ maxWidth: "300px" }} 
                  />
                  <p>Select a job to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JobPage;