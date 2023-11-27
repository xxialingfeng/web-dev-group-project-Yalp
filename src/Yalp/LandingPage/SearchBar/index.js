import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar(props) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  // function submit(e) {
  //   if (typeof props.search == "function") {
  //     props.search(term, location);
  //   }
  //   e.preventDefault();
  // }

  return (
    // <form onSubmit={submit}>
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        Search
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="burgers, sandwiches, beef,etc."
        onChange={(e) => setTerm(e.target.value)}
        //   aria-label="Username"
        //   aria-describedby="basic-addon1"
      />
      <span className="input-group-text" id="basic-addon1">
        Near
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Where"
        onChange={(e) => setLocation(e.target.value)}
        //   aria-label="Username"
        //   aria-describedby="basic-addon1"
      />
      {/* <button onClick={submit} type="button" className="btn btn-danger">
        <FaSearch />
      </button> */}
    </div>
    // </form>
  );
}

export default SearchBar;
