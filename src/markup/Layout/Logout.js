import { connect, useDispatch } from "react-redux";
import { Link, useNavigate, withRouter } from "react-router-dom";
import React from "react";
import { logout } from "../../store/actions/AuthActions";
import { isAuthenticated } from "../../store/selectors/AuthSelectors";
import { getRequest } from "../../utils/apiServices";

function LogoutPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = async () => {
    try {
      const token = localStorage.getItem("jobSeekerLoginToken");
      const url = `https://api.novajobs.us/api/jobseeker/auth/logout`;

      if (token) {
        const response = await getRequest(url, token);
        if (response.error) {
          console.error(response.message);
        } else {
          localStorage.removeItem("jobSeekerLoginToken");
          navigate("/user/login");
        }
      } else {
        navigate("/user/login");
      }
    } catch (error) {
      navigate("/user/login");
    }
  };
  return (
    <>
      <button
        to={"#"}
        title="READ MORE"
        className="site-button"
        onClick={onLogout}
      >
        <i className="fa fa-lock"></i> Logout
      </button>
    </>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     isAuthenticated: isAuthenticated(state),
//   };
// };

export default LogoutPage;
