// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import SBELogo from "../../assests/SBE-Logo.png";
// import NewDBELogo from "../../assests/New-dbe-logo.png";
// import india from "../../images/WhatsApp_Image_2024-05-11_at_19.51.05-removebg-preview.png";
// import axios from "axios";
// import { showToastError, showToastSuccess } from "../../utils/toastify";

// function Footer() {
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setEmail(value);

//     // Email validation regex
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(value)) {
//       setEmailError("Please enter a valid email address.");
//     } else {
//       setEmailError("");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (emailError) {
//       return;
//     }

//     axios({
//       method: "POST",
//       url: "https://api.novajobs.us/api/jobseeker/user-subscribe",
//       data: { email },
//     })
//       .then((res) => {
//         console.log(res?.data?.message);
//         showToastSuccess(res?.data?.message);
//         setEmail("");
//       })
//       .catch((err) => {
//         console.log(err);
//         showToastError(err?.response?.data?.message);
//       });
//   };

//   return (
//     <footer className="site-footer text-break">
//       <div className="footer-top">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 ">
//               <div className="widget">
//                 <Link to={"https://novajobs.us/"}>
//                   <img
//                     src={require("./../../images/logo/NovaUS.png")}
//                     width="180"
//                     className="m-b15"
//                     alt=""
//                   />
//                 </Link>

//                 <p className="text-capitalize m-b20">
//                 NOVAJOBS US is an AI-Enabled HR Technology company based at
//                   South  Carolina, USA
//                 </p>

//                 <div className="subscribe-form m-b20 d-flex ">
//   <form
//     onSubmit={handleSubmit}
//     className="dzSubscribe"
//     action="script/mailchamp.php"
//     method="post"
//   >
//     <div className="input-group ">
//       <input
//         type="email"
//         name="email"
//         id="email"
//         onChange={handleChange}
//         value={email}
//         required
//         className="form-control mt-2"
//         placeholder="Your Email Address"
//         style={{ color: "#1c2957" }}
//       />
//       <div className="input-group-append mt-2">
//         <button type="submit" className="site-button radius-xl">
//           Subscribe
//         </button>
//       </div>
//     </div>
//     {emailError && <p style={{ color: "red" }}>{emailError}</p>}
//   </form>
// </div>


//                 <ul className="list-inline d-flex ">
//                   <li>
//                     <Link
//                       to={"https://www.facebook.com/Novausjobs"}
//                       className="site-button white facebook circle "
//                     >
//                       <i className="fa fa-facebook"></i>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to={"https://www.linkedin.com/company/nova-us-jobs/"}
//                       className="site-button white linkedin circle "
//                     >
//                       <i className="fa fa-linkedin"></i>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="col-xl-7 col-lg-8 col-md-12 col-sm-12">
//               <div className="widget border-0">
//                 <h5 className="m-b30 F-heading text-break">
//                   Frequently Asked Questions
//                 </h5>
//                 <div className="row">
//                   <div className="col-xl- col-lg-4 col-md-4 col-sm-6 col-6 ">
//                     <ul className="list-3 d-flex row gap-3 text-break">
//                       <li>
//                         <Link to={"/employee/privacy-rights"}>
//                           * Privacy Rights
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to={"/employee/term-of-use-nova-jobs"}>
//                         * Terms of Use
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to={"/employee/accessibility-center"}>
//                         * Accessibility Center
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to={"/employee/cookies-digital-advertising"}>
//                         * Cookies & Digital Advertising
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 ">
//                     <ul className="list-3 d-flex row gap-3 text-break">
//                       <li>
//                         <Link to={"/employee/cooking-advertising-overview"}>
//                         *  Cookies & Advertising
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to={"/employee/data-privacy-framework"}>
//                         *  Data Privacy Framework
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to={"/employee/data-sharing-helps-you"}>
//                         *Help Data Sharing
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
//                     <ul className="list-3 d-flex row gap-3 text-break">
//                       <li>
//                         <Link
//                           to={
//                             "/employee/international-transfer-of-personal-information"
//                           }
//                         >
//                         *  International Transfer
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to={"/employee/online-interview-scams"}>
//                          * Online Interview Scams
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to={"/employee/resume-security"}>
//                         *  Resume Security
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to={"/employee/retention-period-resume-visibility"}
//                         >
//                         *  Retention Period
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 ">
//                     <ul className="list-3 d-flex row gap-3 text-break">
//                       <li>
//                         <Link to={"/employee/scope-privacy-notice"}>
//                         *  Scope Privacy Notice
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to={"/employee/security-bug-reporting"}>
//                         *  Security Bug Reporting
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to={"/employee/security-center-account-management"}
//                         >
//                         *  Security Center Account Management
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to={"/employee/safeguard-from-email-scams"}>
//                         *  Email Scams
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mb-4">
//                     <ul className="list-3 d-flex row gap-3 w10  text-break">
//                       <li>
//                         <Link to={"/employee/general-contact-information"}>
//                         *  General Contact Information
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to={"/employee/howitworks-for-candidates"}>
//                         * How It Works For Candidates
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to={"/employee/howitworks-for-employee"}>
//                         *  How It Works For Employees
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to={"/employee/information-novaus-jobs"}>
//                         *  Novajobs US Information
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12 text-center">
//               <span>
//                 © Copyright by{" "}
//                 <img
//                   src={india}
//                   alt=""
//                   style={{
//                     width: "40px",
//                   }}
//                 />{" "}
//                 <strong style={{ color: "white", fontWeight: "bold" }}>
//                   Hyper V Solutions
//                 </strong>{" "}
//                 | All Rights Reserved
//               </span>
//               <span className="float-right">
//                 <span className="m-2">
//                   <img src={SBELogo} alt="SBE Logo" style={{ height: "50px" }} />
//                 </span>
//                 <span className="m-2">
//                   <img src={NewDBELogo} alt="SBE Logo" style={{ height: "50px" }} />
//                 </span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import SBELogo from "../../assests/SBE-Logo.png";
import NewDBELogo from "../../assests/New-dbe-logo.png";
import india from "../../images/WhatsApp_Image_2024-05-11_at_19.51.05-removebg-preview.png";
import axios from "axios";
import { showToastError, showToastSuccess } from "../../utils/toastify";

function Footer() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailPattern.test(value) ? "Please enter a valid email address." : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError) return;

    axios({
      method: "POST",
      url: "https://api.novajobs.us/api/jobseeker/user-subscribe",
      data: { email },
    })
      .then((res) => {
        showToastSuccess(res?.data?.message);
        setEmail("");
      })
      .catch((err) => {
        showToastError(err?.response?.data?.message);
      });
  };

  return (
    <footer className="site-footer text-break">
      <div className="footer-top py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
              <div className="widget">
                <Link to={"https://novajobs.us/"}>
                  <img
                    src={require("./../../images/logo/NovaUS.png")}
                    width="180"
                    className="mb-4"
                    alt="Nova Jobs US Logo"
                  />
                </Link>
                <p className="text-capitalize mb-4">
                  NOVAJOBS US is an AI-Enabled HR Technology company based at
                  South Carolina, USA
                </p>
                <form onSubmit={handleSubmit} className="mb-4">
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Email Address"
                      style={{ color: "#1c2957" }}
                      required
                    />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-primary ">
                        Subscribe
                      </button>
                    </div>
                  </div>
                  {emailError && <small className="text-danger">{emailError}</small>}
                </form>
                <ul className="list-inline d-flex">
                  <li className="me-3">
                    <Link
                      to={"https://www.facebook.com/Novausjobs"}
                      className="site-button white facebook circle"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"https://www.linkedin.com/company/nova-us-jobs/"}
                      className="site-button white linkedin circle"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="widget border-0">
                <h5 className="mb-4 F-heading">Frequently Asked Questions</h5>
                <div className="row">
                  {[
                    ["Privacy Rights", "Terms of Use", "Accessibility Center", "Cookies & Digital Advertising"],
                    ["Cookies & Advertising", "Data Privacy Framework", "Help Data Sharing"],
                    ["International Transfer", "Online Interview Scams", "Resume Security", "Retention Period"],
                    ["Scope Privacy Notice", "Security Bug Reporting", "Security Center Account Management", "Email Scams"],
                    ["General Contact Information", "How It Works For Candidates", "How It Works For Employees", "Novajobs US Information"]
                  ].map((column, index) => (
                    <div key={index} className="col-md-4 col-sm-6 mb-3">
                      <ul className="list-3">
                        {column.map((item, itemIndex) => (
                          <li key={itemIndex} className="mb-2">
                            <Link to={`/employee/${item.toLowerCase().replace(/ /g, '-')}`}>
                              * {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span>
                © Copyright by{" "}
                <img
                  src={india}
                  alt="India flag"
                  style={{ width: "40px", marginRight: "5px" }}
                />{" "}
                <strong style={{ color: "white", fontWeight: "bold" }}>
                  Hyper V Solutions
                </strong>{" "}
                | All Rights Reserved
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <img src={SBELogo} alt="SBE Logo" style={{ height: "50px", marginRight: "10px" }} />
              <img src={NewDBELogo} alt="DBE Logo" style={{ height: "50px" }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
// comment
export default Footer;