import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/profilesidebar.css";
import axios from "axios";

function Profilesidebar({ data }) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("jobSeekerLoginToken");
    if (storedToken) {
      console.log("Stored token:", storedToken); // Log the stored token when component mounts
      setToken(storedToken);
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem("jobSeekerLoginToken");
    navigate("/user/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.novajobs.us/api/jobseeker/auth/login",
        {
          // Add your login credentials here if needed
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login response:", response); // Log the entire response for reference
      const generatedToken = response?.data?.data?.token;
      console.log("Generated token:", generatedToken); // Log the token

      localStorage.setItem("jobSeekerLoginToken", generatedToken);
      setToken(generatedToken);
      navigate("/user");
    } catch (error) {
      console.error("Login error:", error);
      console.log(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${sidebarOpen ? "open" : ""} overflow-y`}>
        <div className="sticky-top overflow-y">
          <div className="candidate-info overflow-y">
            <ul>
              <li>
                <Link
                  to={"/user/jobs-profile"}
                  className={data === "profile" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  // ${token}
                  to={`https://nj-rbuild-fe.vercel.app/?tokenbyurl=${token}`}
                  // to={`http://localhost:3000/?tokenbyurl=${token}`}
                  className={data === "resume" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-file-text-o" aria-hidden="true"></i>
                  <span>AI Resume Builder</span>
                </Link>
              </li>
              {/* <li>
                <Link
                  to={`https://airesume.novajobs.us/${token}`}
                  className={data === "resume" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-file-text-o" aria-hidden="true"></i>
                  <span>AI Resume Builder</span>
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to={"/user/jobs-my-resume"}
                  className={data === "resume" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-file-text-o" aria-hidden="true"></i>
                  <span>My Resume</span>
                </Link>
              </li> */}
              <li>
                <Link
                  to={"/user/jobs-saved-jobs"}
                  className={data === "saved-jobs" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                  <span>Saved Jobs</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/jobs-applied-job"}
                  className={data === "applied-jobs" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-briefcase" aria-hidden="true"></i>
                  <span>Applied Jobs</span>
                </Link>
              </li>

              <li>
                <Link
                  to={"/user/skill-test"}
                  className={data === "skill-test" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-id-card-o" aria-hidden="true"></i>
                  <span>Skill Test</span>
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className={data === "skill-test-history" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-id-card-o" aria-hidden="true"></i>
                  <span>Skill Test History</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/community"}
                  className={data === "community" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-id-card-o" aria-hidden="true"></i>
                  <span>Community</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/messages"}
                  className={data === "messages" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-id-card-o" aria-hidden="true"></i>
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className={data === "ultra-aura" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-id-card-o" aria-hidden="true"></i>
                  <span>Ultra Aura</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/jobs-referral"}
                  className={data === "jobs-referral" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-id-card-o" aria-hidden="true"></i>
                  <span>Add Referral </span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/jobs-alerts"}
                  className={data === "alerts-jobs" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-bell-o" aria-hidden="true"></i>
                  <span>Notifications</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/jobs-change-password"}
                  className={data === "password" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-key" aria-hidden="true"></i>
                  <span>Change Password</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/login"}
                  onClick={() => {
                    onLogout();
                    setSidebarOpen(false);
                  }}
                >
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                  <span>Log Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profilesidebar;
