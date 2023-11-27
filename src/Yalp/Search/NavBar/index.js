import React from "react";
import Search from "..";
import SearchBar from "../../LandingPage/SearchBar";
import bg from "../../assets/groupMeal.jpeg";

function NavBar() {
  return (
    <div className="nav-bar">
      <img
        src={bg}
        style={{
          width: "100%",
          position: "absolute",
          height: "400px",
          zIndex: "-1",
        }}
      />
      <div className="d-flex">
        <SearchBar />
        <button className="btn btn-danger">Sign in</button>
        <button className="btn btn-danger">Register</button>
      </div>
    </div>
  );
}

export default NavBar;
