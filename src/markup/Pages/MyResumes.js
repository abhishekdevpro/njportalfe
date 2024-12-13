import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import FixedHeader from "../Layout/fixedHeader";
import Profilesidebar from "../Element/Profilesidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyResumes() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jobSeekerLoginToken");
    if (token) {
      axios
        .get("https://api.novajobs.us/api/user/resume-list", {
          headers: { Authorization: token },
        })
        .then((response) => {
          const resumes = response.data.resumelist || [];
          if (resumes.length === 0) {
            toast.info("No resumes available.");
          }
          setResumes(resumes);
        })
        .catch((error) => {
          console.error("Error fetching resume list:", error);
          toast.error("Failed to fetch resumes.");
        });
    } else {
      console.error("Token not found in localStorage");
    }
  }, []);
  return (
    <>
      <Header2 />
      <FixedHeader />

      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <Profilesidebar data={"resume-list"} />
                <div className="col-xl-9 col-lg-8 m-b30 browse-job">
                  <h6>Resumes List</h6>
                  <ToastContainer />
                  <div className="container mx-auto p-4 text-center h-3/4">
                    <div className="overflow-x-auto post-bx">
                      <table className="min-w-full bg-white text-black rounded-md">
                        <thead>
                          <tr>
                            <th className="py-2 px-4">Sr. no.</th>
                            <th className="py-2 px-4">Resume Name</th>
                            <th className="py-2 px-4">Created</th>
                          </tr>
                        </thead>
                        <tbody>
                          {resumes.length > 0 ? (
                            resumes.map((resume, index) => (
                              <tr key={index} className="border-2">
                                <td className="py-2 px-4">{index + 1}.</td>
                                <td className="py-2 px-4">
                                  {resume.resue_name || "No Name"}
                                </td>
                                <td className="py-2 px-4">
                                  {new Date(
                                    resume.created_at
                                  ).toLocaleDateString()}
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="3">Please Upload Resume.</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
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
export default MyResumes;
