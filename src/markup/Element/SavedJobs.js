import axios from "axios";
import { showToastError } from "../../utils/toastify";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setJobApplicationData } from "../../store/reducers/jobApplicationSlice";
import moment from "moment";
import noDataFound from "../../images/nodata.png";
import JobPageSkeleton from "../skeleton/jobPage";

const postBlog = [
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
];

const SavedJobs = () => {
  const dispatch = useDispatch();
  const [skeleton, setSkeleton] = useState(true);

  const token = localStorage.getItem("jobSeekerLoginToken");
  const jobApplicationData = useSelector(
    (state) => state.jobApplicationSlice.jobApplicationData
  );
  const fetchJobApplicationData = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/jobseeker/job-favorites",
        // "https://api.novajobs.us/api/jobseeker/job-lists?page_size=7&is_publish=1",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      dispatch(setJobApplicationData(response.data.data));
      setSkeleton(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobApplicationData();
  }, []);

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
    <div className="section-full bg-white c">
      <div className="container">
        <div className="d-flex ">
          <div className=""></div>
        </div>
        <div className="row">
          {skeleton === true ? (
            <div>
              Please wait Or Check have saved any job?
              <JobPageSkeleton />{" "}
            </div>
          ) : (
            <div className="col-lg-12">
              {jobApplicationData ? (
                <ul className="post-job-bx browse-job">
                  {jobApplicationData.map((item, index) => (
                    <li key={index}>
                      <div className="post-bx">
                        <div className="d-flex m-b30">
                          <div className="job-post-company">
                            <span>
                              <img alt="" src={postBlog[0].image} />
                            </span>
                          </div>
                          <div className="job-post-info">
                            <h4>
                              <Link to={`/user/job/${item.job_detail.id}`}>
                                {item.job_detail.job_title}
                              </Link>
                            </h4>
                            <ul>
                              <li>
                                <i className="fa fa-map-marker"></i>{" "}
                                {item.countries.name}, {item.states.name},
                                {item.cities.name}
                              </li>
                              {item.job_category.name ? (
                                <li>
                                  <i className="fa fa-bookmark-o"></i>{" "}
                                  {item.job_category.name}
                                </li>
                              ) : null}
                              <li>
                                <i className="fa fa-clock-o"></i>{" "}
                                {moment(item.job_detail.created_at).fromNow()}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="job-time mr-auto">
                            <Link to={"#"}>
                              <span>{item.job_type.name}</span>
                            </Link>
                          </div>
                          <div className="salary-bx">
                            <span> {item.job_workplace_types.name}</span>
                          </div>
                        </div>
                        <label
                          className="like-btn"
                          labl
                          onClick={() => {
                            toggleFabJobs(item.job_detail.id);
                          }}
                        >
                          <input
                            type="checkbox"
                            defaultChecked={item.job_detail.is_job_favorite}
                            name={item.job_detail.id}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                  ))}
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
            </div>
          )}

          <div className="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
};
export default SavedJobs;
