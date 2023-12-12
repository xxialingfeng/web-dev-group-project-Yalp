import * as client from "./userClient";
import { Link } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signin = async (e) => {
    try {
      e.preventDefault();
      const credentials = { username: username, password: password };
      if (!credentials.username) {
        setError("Username cannot be empty");
        return; // Exit the function early
      }

      if (!credentials.password) {
        setError("Password cannot be empty");
        return; // Exit the function early
      }
      console.log({ username });
      console.log({ password });
      const user = await client.signin(credentials);
      console.log({ user });
      dispatch(setCurrentUser(user));
      navigate("/profile");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h2>
                Log In</h2>
              <p>Please enter your credentials to log in.</p>
            </div>
          </div>
          {error && <div className="alert alert-danger">{error.message}</div>}
          <form className="login-form">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary" onClick={signin}>
              Sign in
            </button>
            <p className="message">Not registered? <Link to="/register"
            className={`nav-link`}>Create an account</Link>
          </p>
          <Link to="/home"
            className={`nav-link message`}>Back to home page</Link> 
          </form>
          {/* TODO: change the link to real home page */}

        </div>
      </div>
    </div>
  );
}
export default Signin;