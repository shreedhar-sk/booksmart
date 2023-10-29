import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic here to send a POST request to your backend for user authentication
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-background">
      <div className="container vh-100">
        <div className="row justify-content-center">
          <div className="col-md-6 mt-5">
            <div className="card glassmorphism">
              <div className="card-header bg-primary text-white">
                <h3 className="text-center">Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" className="text-white">
                      Email:
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={credentials.email}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-white">
                      Password:
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={credentials.password}
                      onChange={onChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 btn btn-primary btn-block"
                  >
                    Log in
                  </button>
                </form>
              </div>
              <div className="text-center mt-3">
                <p className="text-white">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
