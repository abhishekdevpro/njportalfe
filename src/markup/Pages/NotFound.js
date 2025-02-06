import { useNavigate } from "react-router-dom";
import logo from "../../images/logo/NovaUS.png"; // Adjust the path if needed

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center p-4">
      <div className="mb-3">
        <img
          src={logo}
          alt="logo"
          className="img-fluid"
          style={{ height: "50px" }}
        />
      </div>
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="h4 fw-semibold text-dark mt-3">Oops! Page Not Found</h2>
      <p className="text-secondary mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-4 d-flex gap-3">
        <button
          onClick={() => navigate("/")}
          className="btn btn-primary px-4 py-2"
        >
          Go to Home
        </button>
        {/* <button
          onClick={() => navigate("/login")}
          className="btn btn-success px-4 py-2"
        >
          Go to Login
        </button> */}
      </div>
    </div>
  );
};

export default NotFound;
