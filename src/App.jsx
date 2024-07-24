import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Homepage from "./markup/Pages/Homepage1";
import Homepage2 from "./markup/Pages/Homepage2";
import Jobprofile from "./markup/Pages/Jobprofile";
import Jobmyresume from "./markup/Pages/Jobmyresume";
import Jobsappliedjob from "./markup/Pages/Jobsappliedjob";
import Jobsalert from "./markup/Pages/Jobsalert";
import Jobsavedjobs from "./markup/Pages/Jobsavedjobs";
import Jobcvmanager from "./markup/Pages/Jobcvmanager";
import Changepasswordpage from "./markup/Pages/Changepasswordpage";
import Companyprofile from "./markup/Pages/Companyprofile";
import Companyresume from "./markup/Pages/Companyresume";
import Componypostjobs from "./markup/Pages/Componypostjobs";
import Companymanage from "./markup/Pages/Companymanage";
import Companytransactions from "./markup/Pages/Companytransactions";
import Browsecandidates from "./markup/Pages/Browsecandidates";
import Aboutus from "./markup/Pages/Aboutus";
import Jobdetail from "./markup/Pages/Jobdetail";
import Companies from "./markup/Pages/Companies";
import Freejobalerts from "./markup/Pages/Freejobalerts";
import Browsejoblist from "./markup/Pages/Browsejoblist";
import Browsejobgrid from "./markup/Pages/Browsejobgrid";
import Browsejobfilterlist from "./markup/Pages/Browsejobfilterlist";
import Browsejobfiltergrid from "./markup/Pages/Browsejobfiltergrid";
import Categoryalljob from "./markup/Pages/Categoryalljob";
import Categorycompanyjob from "./markup/Pages/Categorycompanyjob";
import Categorydesignationsjob from "./markup/Pages/Categorydesignationsjob";
import Categoryjobs from "./markup/Pages/Categoryjobs";
import Categorylocationjobs from "./markup/Pages/Categorylocationjobs";
import Categoryskilljobs from "./markup/Pages/Categoryskilljobs";
import Portfoliogrid2 from "./markup/Pages/Portfoliogrid2";
import Loginpage1 from "./markup/Pages/Loginpage1";
import Loginpage2 from "./markup/Pages/Loginpage2";
import Loginpage3 from "./markup/Pages/Loginpage3";
import Register1 from "./markup/Pages/Register1";
import Register2 from "./markup/Pages/Register2";
import Error404 from "./markup/Pages/Error404";
import Contact from "./markup/Pages/Contact";
import Blogclassic from "./markup/Pages/Blogclassic";
import Blogclassicsidebar from "./markup/Pages/Blogclassicsidebar";
import Blogdetailgrid from "./markup/Pages/Blogdetailgrid";
import Blogdetailgridsidebar from "./markup/Pages/Blogdetailgridsidebar";
import Blogleftimg from "./markup/Pages/Blogleftimg";
import Blogdetail from "./markup/Pages/Blogdetail";
import ScrollToTop from "./markup/Element/ScrollToTop";
import UserPrivateRoute from "./markup/protectedRoute";
import ApplicantsJobPage from "./markup/Pages/ApplicantsJobPage";
import EmployeeJobPage from "./employeeMarkup/Pages/JobPage";
import "./css/plugins.css";
import "./css/style.css";
import "./css/templete.css";
import "./css/skin/skin-1.css";
import "./plugins/slick/slick.min.css";
import "./plugins/slick/slick-theme.min.css";
import "./css/share.css";
import "bootstrap/dist/css/bootstrap.min.css";

import EmployeeLogin from "./employeeMarkup/Pages/Loginpage2";
import EmployeeRegister1 from "./employeeMarkup/Pages/Register1";
import EmployeeHomepage from "./employeeMarkup/Pages/Homepage1";
import EmployeeJobProfile from "./employeeMarkup/Pages/Jobprofile";
import EmployeePrivateRoute from "./employeeMarkup/protectedRoute";
import EmployeeApplicantsJobPage from "./employeeMarkup/Pages/ApplicantJobPage";
import EmployeeJobmyresume from "./employeeMarkup/Pages/Jobmyresume";
import EmployeeJobsappliedjob from "./employeeMarkup/Pages/Jobsappliedjob";
import EmployeeJobsalert from "./employeeMarkup/Pages/Jobsalert";
import EmployeeJobsavedjobs from "./employeeMarkup/Pages/Jobsavedjobs";
import EmployeeJobcvmanager from "./employeeMarkup/Pages/Jobcvmanager";
import EmployeeChangepasswordpage from "./employeeMarkup/Pages/Changepasswordpage";
import EmployeeCompanyprofile from "./employeeMarkup/Pages/Companyprofile";
import EmployeeCompanyresume from "./employeeMarkup/Pages/Companyresume";
import EmployeeComponypostjobs from "./employeeMarkup/Pages/Componypostjobs";
import EmployeeCompanymanage from "./employeeMarkup/Pages/Companymanage";
import EmployeeCompanytransactions from "./employeeMarkup/Pages/Companytransactions";
import EmployeeBrowsecandidates from "./employeeMarkup/Pages/Browsecandidates";
import EmployeeAboutus from "./employeeMarkup/Pages/Aboutus";
import EmployeeJobdetail from "./employeeMarkup/Pages/Jobdetail";
import EmployeeCompanies from "./employeeMarkup/Pages/Companies";
import EmployeeFreejobalerts from "./employeeMarkup/Pages/Freejobalerts";
import EmployeeBrowsejoblist from "./employeeMarkup/Pages/Browsejoblist";
import EmployeeBrowsejobgrid from "./employeeMarkup/Pages/Browsejobgrid";
import EmployeeBrowsejobfilterlist from "./employeeMarkup/Pages/Browsejobfilterlist";
import EmployeeBrowsejobfiltergrid from "./employeeMarkup/Pages/Browsejobfiltergrid";
import EmployeeCategoryalljob from "./employeeMarkup/Pages/Categoryalljob";
import EmployeeCategorydesignationsjob from "./employeeMarkup/Pages/Categorydesignationsjob";
import EmployeeCategoryjobs from "./employeeMarkup/Pages/Categoryjobs";
import EmployeeCategorylocationjobs from "./employeeMarkup/Pages/Categorylocationjobs";
import EmployeeCategoryskilljobs from "./employeeMarkup/Pages/Categoryskilljobs";
import EmployeePortfoliogrid2 from "./employeeMarkup/Pages/Portfoliogrid2";
import EmployeeRegister2 from "./employeeMarkup/Pages/Register2";
import EmployeeError404 from "./employeeMarkup/Pages/Error404";
import EmployeeContact from "./employeeMarkup/Pages/Contact";
import EmployeeBlogclassic from "./employeeMarkup/Pages/Blogclassic";
import EmployeeBlogclassicsidebar from "./employeeMarkup/Pages/Blogclassicsidebar";
import EmployeeBlogdetailgrid from "./employeeMarkup/Pages/Blogdetailgrid";
import EmployeeBlogdetailgridsidebar from "./employeeMarkup/Pages/Blogdetailgridsidebar";
import EmployeeBlogleftimg from "./employeeMarkup/Pages/Blogleftimg";
import EmployeeBlogdetail from "./employeeMarkup/Pages/Blogdetail";
import JobPage from "./markup/Pages/JobPage";
import ProfilePage from "./employeeMarkup/Pages/ProfilePage";
import SkillTest from "./markup/Pages/SkillTest";
import EducationPage from "./markup/Pages/EducationPage";
import EmployeeCategorycompanyjob from "./employeeMarkup/Pages/Categorycompanyjob";
import Messages from "./markup/Pages/Messages";
import TermOfUse from "./markup/Pages/TermOfUse";
import DataPrivacyFramework from "./markup/Pages/DataPrivacyFramework";
import CookingAdvertising from "./markup/Pages/Cooking&Advertising";
import DataSharingHelps from "./markup/Pages/DataSharingHelps";
import ScopePrivacyNotice from "./markup/Pages/ScopePrivacyNotice";
import InformationNovaUsJobs from "./markup/Pages/InformationNovaUsJobs";
import RetentionPeriod from "./markup/Pages/RetentionPeriod";
import CookiesDigitalAdvertising from "./markup/Pages/Cookies&DigitalAdvertising";
import PrivacyRights from "./markup/Pages/PrivacyRights";
import InternationalTransfer from "./markup/Pages/InternationalTransfer";
import GeneralContactInformation from "./markup/Pages/GeneralContactInformation";
import SecurityCenterAccountManagement from "./markup/Pages/SecurityCenterAccountManagement";
import EmailScams from "./markup/Pages/EmailScams";
import OnlineInterviewScams from "./markup/Pages/OnlineInterviewScams";
import SecurityBugReporting from "./markup/Pages/SecurityBugReporting";
import AccessibilityCenter from "./markup/Pages/AccessibilityCenter";
import HowItWorksEmployee from "./markup/Pages/HowItWorksEmployee";
import HowItWorksCandidates from "./markup/Pages/HowItWorksCandidates";
import CompanyPage from "./markup/Pages/CompanyPageView";
import EmailVerification from "./markup/Pages/EmailVerification";
import NewPasswordSet from "./markup/Pages/NewPasswordSet";
import ForgotPassword from "./markup/Pages/ForgotPassword";
import ForgotPasswordemployee from "./employeeMarkup/Pages/ForgotPasswordemployee";
import ResetPassword from "./markup/Pages/ResetPassword";
import ResetPasswordemployee from "./employeeMarkup/Pages/ResetPasswordemployee";
import ResumeSecurity from "./markup/Pages/ResumeSecurity";
import LandingPage from "./employeeMarkup/Pages/LandingPage";
import Verifyemail from "./markup/Pages/Verifyemail";
import Aboutus1 from "./markup/Pages/Aboutus1";
import Jobreferral from "./markup/Element/Jobreferral";
import VerifyEmailemployee from "./employeeMarkup/Pages/Verifyemailemploye";

import Admin from "./adminPanel/Admin";
import Vendor from "./adminPanel/Vendor";
import User from "./adminPanel/User";
import Dashboard from "./adminPanel/Dashboard";
import Employee from "./adminPanel/Employee";
import Wallet from "./adminPanel/Wallet";
import Addteam from "./adminPanel/Addteam";
import AssignRole from "./adminPanel/AssignRole";
import AssignTask from "./adminPanel/Assigntask";
import JobSeekers from "./adminPanel/JobSeekers";
import Jobs from "./adminPanel/Jobs";
import Notifications from "./adminPanel/Notifications";
import Team from "./adminPanel/Team";
import Adminlogin from "./adminPanel/Adminlogin";
import PrivateRouteadmin from "./adminPanel/PrivateRouteadmin";
import Addvendor from "./adminPanel/Addvendor";
import Editadmin from "./adminPanel/Editadmin";
import Listteam from "./adminPanel/Listteam";
import Listnumber from "./adminPanel/Listnumber";
import Listvendor from "./adminPanel/Listvendor";
import Jobslist from "./adminPanel/Joblist";
import Jobseekerlist from "./adminPanel/Jobseekerlist";
import Employeelist from "./adminPanel/Employeelist";
import CompanyListAdmin from "./adminPanel/CompanyListAdmin";
import CompanyNameAdmin from "./adminPanel/CompanyNameAdmin";

import VerifyEmail from "./vendor/VerifyEmail";
import Vendorlogin from "./vendor/Vendorlogin";
import PrivateRoutevendor from "./vendor/PrivateRoutevendor";
import VendorCompanyprofile from "./vendor/Vendorprofile";
import VendorCompanySideBar from "./vendor/Vendorsidebar";
import VendorComponypostjobs from "./vendor/Vendorpostjob";
import Vendorwallet from "./vendor/Vendorwallet";
import VendorCompanymanage from "./vendor/Vendormanagejob";
import Vendorapplicant from "./vendor/Vendorapplicant";
import VendorChangepasswordpage from "./vendor/VendorChangepasswordpage";
import Vendorbulkuploadjobopeneing from "./vendor/Vendorbulkuploadjobopeneing copy";
import Vendorbulkuploadjobseeker from "./vendor/Vendorbulkuploadjobseeker";
import Vendorregistration from "./vendor/Vendorregistration";
import JobPagethirdparty from "./markup/Pages/JobPagethirdparty";
import ProtectedRoute from "./services/ProtectedRoute";
import EmployeeProtectedRoute from "./services/EmployeeProtectedRoute";
import { EmployeeAuthProvider } from "./services/EmployeeAuthContext";

function App() {
  const dispatch = useDispatch();

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="services" element={<LandingPage />} />
      <Route path="aboutus" element={<Aboutus1 />} />
      <Route path="/*" element={<Error404 />} />

      <Route path="/admin/login" element={<Adminlogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRouteadmin>
            {" "}
            <Dashboard />{" "}
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/users"
        element={
          <PrivateRouteadmin>
            <User />{" "}
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/vendor"
        element={
          <PrivateRouteadmin>
            <Vendor />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/employee"
        element={
          <PrivateRouteadmin>
            <Employee />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/employeelist"
        element={
          <PrivateRouteadmin>
            <Employeelist />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/wallet"
        element={
          <PrivateRouteadmin>
            <Wallet />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/addteam"
        element={
          <PrivateRouteadmin>
            <Addteam />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/assignrole"
        element={
          <PrivateRouteadmin>
            <AssignRole />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/assigntask"
        element={
          <PrivateRouteadmin>
            <AssignTask />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/jobseekers"
        element={
          <PrivateRouteadmin>
            <JobSeekers />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/jobs"
        element={
          <PrivateRouteadmin>
            <Jobs />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/notifications"
        element={
          <PrivateRouteadmin>
            <Notifications />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/team"
        element={
          <PrivateRouteadmin>
            <Team />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/addvendor"
        element={
          <PrivateRouteadmin>
            <Addvendor />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/edit"
        element={
          <PrivateRouteadmin>
            <Editadmin />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/listvendor"
        element={
          <PrivateRouteadmin>
            <Listvendor />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/team/list-team"
        element={
          <PrivateRouteadmin>
            <Listteam />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/team/list-number"
        element={
          <PrivateRouteadmin>
            <Listnumber />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/listalljobs"
        element={
          <PrivateRouteadmin>
            <Jobslist />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/listalljobseeker"
        element={
          <PrivateRouteadmin>
            <Jobseekerlist />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/CompanyListAdmin"
        element={
          <PrivateRouteadmin>
            <CompanyListAdmin />
          </PrivateRouteadmin>
        }
      />
      <Route
        path="/admin/CompanyNameAdmin"
        element={
          <PrivateRouteadmin>
            <CompanyNameAdmin />
          </PrivateRouteadmin>
        }
      />

      <Route path="/vendor/verify" component={<VerifyEmail />} />

      <Route path="/vendor/login" element={<Vendorlogin />} />
      <Route
        path="/vendor/vendorprofile"
        element={
          <PrivateRoutevendor>
            {" "}
            <VendorCompanyprofile />{" "}
          </PrivateRoutevendor>
        }
      />
      <Route
        path="/vendor/vendorcompanySideBar"
        element={
          <PrivateRoutevendor>
            <VendorCompanySideBar />{" "}
          </PrivateRoutevendor>
        }
      />
      <Route
        path="/vendor/vendorcomponypostjobs"
        element={
          <PrivateRoutevendor>
            <VendorComponypostjobs />
          </PrivateRoutevendor>
        }
      />
      <Route
        path="/vendor/vendorwallet"
        element={
          <PrivateRoutevendor>
            <Vendorwallet />
          </PrivateRoutevendor>
        }
      />
      <Route
        path="/vendor/vendorcompanymanage"
        element={
          <PrivateRoutevendor>
            <VendorCompanymanage />
          </PrivateRoutevendor>
        }
      />
      <Route
        path="/vendor/vendorapplicant"
        element={
          <PrivateRoutevendor>
            <Vendorapplicant />
          </PrivateRoutevendor>
        }
      />
      <Route
        path="/vendor/vendorchangepasswordpage"
        element={
          <PrivateRoutevendor>
            <VendorChangepasswordpage />
          </PrivateRoutevendor>
        }
      />
      <Route
        path="/vendor/vendorbulkuploadjobopeneing"
        element={
          <PrivateRoutevendor>
            <Vendorbulkuploadjobopeneing />
          </PrivateRoutevendor>
        }
      />
      <Route
        path="/vendor/vendorbulkuploadjobseeker"
        element={
          <PrivateRoutevendor>
            <Vendorbulkuploadjobseeker />
          </PrivateRoutevendor>
        }
      />
      <Route
        path="/vendor/vendorregistration"
        element={<Vendorregistration />}
      />

      <Route path="/user">
        <Route path="" element={<Homepage />} />
        <Route path="login" element={<Loginpage2 />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
        <Route path="register" element={<Register1 />} />
        <Route path="register-2" element={<Register2 />} />
        <Route path="verify/:token" element={<Verifyemail />} />
        <Route element={<ProtectedRoute />}>
          <Route path="jobs-profile" element={<Jobprofile />} />
          <Route path="skill-test" element={<SkillTest />} />
          <Route path="skill-test" element={<SkillTest />} />
          <Route path="education-page" element={<EducationPage />} />
          <Route path="applicant-job" element={<ApplicantsJobPage />} />
          <Route
            path="category-company-jobs"
            element={<Categorycompanyjob />}
          />
          <Route path="jobs-my-resume" element={<Jobmyresume />} />
          <Route path="jobs-referral" element={<Jobreferral />} />
          <Route path="messages" element={<Messages />} />
          <Route path="jobs-saved-jobs" element={<Jobsavedjobs />} />
          <Route path="jobs-cv-manager" element={<Jobcvmanager />} />
          <Route path="jobs-change-password" element={<Changepasswordpage />} />
          <Route path="company-profile" element={<Companyprofile />} />
          <Route path="company-resume" element={<Companyresume />} />
          <Route path="company-post-jobs" element={<Componypostjobs />} />
          <Route path="company-manage-job" element={<Companymanage />} />
          <Route
            path="company-transactions"
            element={<Companytransactions />}
          />
          <Route path="browse-candidates" element={<Browsecandidates />} />
          <Route path="job-page" element={<JobPage />} />
          <Route path="about-us" element={<Aboutus />} />
          <Route path="companies" element={<Companies />} />
          <Route path="free-job-alerts" element={<Freejobalerts />} />
          <Route path="browse-job-list" element={<Browsejoblist />} />
          <Route path="browse-job-grid" element={<Browsejobgrid />} />
          <Route
            path="browse-job-filter-list"
            element={<Browsejobfilterlist />}
          />
          <Route
            path="browse-job-filter-grid"
            element={<Browsejobfiltergrid />}
          />
          <Route path="category-all-jobs" element={<Categoryalljob />} />
          <Route
            path="category-designations-jobs"
            element={<Categorydesignationsjob />}
          />
          <Route path="category-jobs" element={<Categoryjobs />} />
          <Route
            path="category-location-jobs"
            element={<Categorylocationjobs />}
          />
          <Route path="category-skill-jobs" element={<Categoryskilljobs />} />
          <Route path="portfolio-grid-2" element={<Portfoliogrid2 />} />
          <Route path="register-2" element={<Register2 />} />
          <Route path="verify" element={<Verifyemail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog-classic" element={<Blogclassic />} />
          <Route path="blog-classic-sidebar" element={<Blogclassicsidebar />} />
          <Route path="blog-detailed-grid" element={<Blogdetailgrid />} />
          <Route
            path="blog-detailed-grid-sidebar"
            element={<Blogdetailgridsidebar />}
          />
          <Route path="blog-left-img" element={<Blogleftimg />} />
          <Route path="blog-details" element={<Blogdetail />} />
          <Route path="new-password-set" element={<NewPasswordSet />} />
        </Route>
        <Route path="job" element={<JobPage />} />
        <Route path="jobthirdparty" element={<JobPagethirdparty />} />

        <Route path="company/:id" element={<CompanyPage />} />

        <Route path="job-detail/:id" element={<Jobdetail />} />

        <Route
          path="email-verification"
          element={
            // <UserPrivateRoute>
            <EmailVerification />
            // </UserPrivateRoute>
          }
        />

        <Route path="*" element={<Error404 />} />
      </Route>

      {/* routes for empployees */}

      {/* Public Routes */}
      <Route path="/employee/verify/:token" element={<VerifyEmailemployee />} />
      <Route
        path="/employee/forgot-password"
        element={<ForgotPasswordemployee />}
      />
      <Route
        path="/employee/reset-password/:token"
        element={<ResetPasswordemployee />}
      />
      <Route path="/employee/login" element={<EmployeeLogin />} />
      <Route path="/employee/register" element={<EmployeeRegister1 />} />
      <Route path="/employee/register-2" element={<EmployeeRegister2 />} />

      <Route element={<EmployeeProtectedRoute />}>
        <Route
          path="/employee"
          element={
            <EmployeePrivateRoute>
              <EmployeeHomepage />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/jobs-profile"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobProfile />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/category-company-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeCategorycompanyjob />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/applicant-job"
          element={
            <EmployeePrivateRoute>
              <EmployeeApplicantsJobPage />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/jobs-my-resume"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobmyresume />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/jobs-applied-job"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobsappliedjob />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/jobs-alerts"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobsalert />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/jobs-saved-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobsavedjobs />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/jobs-cv-manager"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobcvmanager />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/jobs-change-password"
          element={
            <EmployeePrivateRoute>
              <EmployeeChangepasswordpage />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/company-profile"
          element={
            <EmployeePrivateRoute>
              <EmployeeCompanyprofile />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/company-resume/:id"
          element={
            <EmployeePrivateRoute>
              <EmployeeCompanyresume />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/company-post-jobs/:id"
          element={
            <EmployeePrivateRoute>
              <EmployeeComponypostjobs />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/company-manage-job/:id"
          element={
            <EmployeePrivateRoute>
              <EmployeeCompanymanage />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/company-transactions"
          element={
            <EmployeePrivateRoute>
              <EmployeeCompanytransactions />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/browse-candidates"
          element={
            <EmployeePrivateRoute>
              <EmployeeBrowsecandidates />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/about-us"
          element={
            <EmployeePrivateRoute>
              <EmployeeAboutus />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/job-detail"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobdetail />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/companies"
          element={
            <EmployeePrivateRoute>
              <EmployeeCompanies />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/free-job-alerts"
          element={
            <EmployeePrivateRoute>
              <EmployeeFreejobalerts />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/browse-job-list"
          element={
            <EmployeePrivateRoute>
              <EmployeeBrowsejoblist />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/browse-job-grid"
          element={
            <EmployeePrivateRoute>
              <EmployeeBrowsejobgrid />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/browse-job-filter-list"
          element={
            <EmployeePrivateRoute>
              <EmployeeBrowsejobfilterlist />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/browse-job-filter-grid"
          element={
            <EmployeePrivateRoute>
              <EmployeeBrowsejobfiltergrid />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/category-all-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeCategoryalljob />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/category-designations-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeCategorydesignationsjob />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/category-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeCategoryjobs />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/category-location-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeCategorylocationjobs />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/category-skill-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeCategoryskilljobs />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/portfolio-grid-2"
          element={
            <EmployeePrivateRoute>
              <EmployeePortfoliogrid2 />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/contact"
          element={
            <EmployeePrivateRoute>
              <EmployeeContact />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/blog-classic"
          element={
            <EmployeePrivateRoute>
              <EmployeeBlogclassic />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/blog-classic-sidebar"
          element={
            <EmployeePrivateRoute>
              <EmployeeBlogclassicsidebar />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/blog-detailed-grid"
          element={
            <EmployeePrivateRoute>
              <EmployeeBlogdetailgrid />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/blog-detailed-grid-sidebar"
          element={
            <EmployeePrivateRoute>
              <EmployeeBlogdetailgridsidebar />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/blog-left-img"
          element={
            <EmployeePrivateRoute>
              <EmployeeBlogleftimg />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/blog-details"
          element={
            <EmployeePrivateRoute>
              <EmployeeBlogdetail />
            </EmployeePrivateRoute>
          }
        />
        <Route path="/employee/profilepage/:id" element={<ProfilePage />} />
        <Route
          path="/employee/messages"
          element={
            <EmployeePrivateRoute>
              <Messages />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="/employee/candidate-listing"
          element={<EmployeeJobPage />}
        />
      </Route>

      {/* Error Route */}
      <Route path="/employee/*" element={<EmployeeError404 />} />
    </Routes>
  );
}

export default App;
