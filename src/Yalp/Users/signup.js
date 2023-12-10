import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as client from "./userClient";
import "./index.css";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: null,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async (e) => {
    try {
      e.preventDefault();
      if (!credentials.username) {
        setError("Username cannot be empty");
        return; // Exit the function early
      }

      if (!credentials.password) {
        setError("Password cannot be empty");
        return; // Exit the function early
      }


      await client.signup(credentials);
      const user = await client.signin(credentials);
      dispatch(setCurrentUser(user));
      navigate("/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  }; 
  // TODO: Cannot sign up
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
          {error && <div className="error">{error}</div>}
          <br/>
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
              onChange={(e) => setCredentials({ ...credentials, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
            <button className="btn btn-primary" onClick={signup}>
              Sign up
            </button>
            <p className="message">Already have an account? <Link to="/signin"
          className={`nav-link`}>Log in</Link></p>
          <Link to="/home"
            className={`nav-link message`}>Back to home page</Link>
             {/* TODO: change the link to real home page */}
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;
