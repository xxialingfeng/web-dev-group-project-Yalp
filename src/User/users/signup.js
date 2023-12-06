import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as client from "./client";
import "./index.css";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h2>Sign Up</h2>
              <p>Please enter your credentials to sign up.</p>
            </div>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <form className="login-form">
            <input
              type="text"
              placeholder="username"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  username: e.target.value,
                })
              }
            />
            <input
              type="password"
              placeholder="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  password: e.target.value,
                })
              }
            />
            <label htmlFor="role">Roles: </label>
            <select
              className="form-control mb-2"
              // onChange={(e) => setAccount({ ...account, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="RESTAURANT">Restaurant</option>
              <option value="ADMIN">Admin</option>
            </select>
            <br/>
            <br/>
            <button className="btn btn-primary" onClick={signup}>
              Sign up
            </button>
            <p className="message">Already have an account? <Link to="/project/signin"
          className={`nav-link`}>Log in</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;