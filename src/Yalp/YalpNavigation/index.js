import bg from "../assets/groupMeal.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function YalpNavigation() {
  return (
    <div className="nav-bar" style={{ position: "relative" }}>
      <img
        src={bg}
        style={{
          width: "100%",
          position: "absolute",
          height: "50px",
          zIndex: "-1",
        }}
      />
      <div className="content d-flex">
        <span
          style={{
            marginRight: "30px",
            marginLeft: "10px",
            marginTop: "10px",
            fontWeight: "bold",
          }}
        >
          Yalp
        </span>
        <div
          class="input-group mb-5"
          style={{ width: "600px", marginTop: "10px", marginRight: "50px" }}
        >
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div
            className="input-group-text"
            style={{ backgroundColor: "#B22222", width: "50px" }}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "white" }}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div
          className="nav-links"
          style={{ marginTop: "10px", marginRight: "40px" }}
        >
          <button className="btn">Yalp for a business?</button>
        </div>
        <div className="auth-buttons" style={{ marginTop: "10px" }}>
          <button
            className="btn"
            style={{
              backgroundColor: "#B22222",
              color: "white",
              marginRight: "30px",
              width: "150px",
            }}
          >
            Login
          </button>
          <button
            className="btn"
            style={{
              backgroundColor: "#ddd",
              marginRight: "30px",
              width: "150px",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
export default YalpNavigation;
