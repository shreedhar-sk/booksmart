import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    userId: "",
    password: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., validation and API requests) here
    console.log(credentials);
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="container vh-100">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card glassmorphism">
            <div className="card-header bg-primary text-white">
              <h3 className="text-center">Sign In</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="text" className="text-white">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the Name"
                    className="form-control"
                    name="name"
                    value={credentials.name}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="text" className="text-white">
                    AdminId:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Admin Id"
                    className="form-control"
                    name="userId"
                    value={credentials.userId}
                    onChange={onChange}
                  />
                </div>
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
                <button type="submit" className="m-3 btn btn-primary btn-block">
                  Sign In
                </button>
                <Link to="/login" className="m-3 btn btn-danger">
                  Already a User
                </Link>
              </form>
              <hr className="text-white" />
              <div className="text-center">
                <p className="text-white">Or sign in with:</p>
                <button className="btn btn-danger m-3">
                  <i className="fab fa-google mr-2"></i> Sign in with Google
                </button>
                <button className="btn btn-primary">
                  <i className="fab fa-facebook-f mr-2"></i> Sign in with
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
