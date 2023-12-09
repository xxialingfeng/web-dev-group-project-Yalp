import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Nav() {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state) => state.userReducer);
  const links = [
    { to: "/project/home", label: "Home" },
    { to: "/project/signin", label: "Signin" },
    { to: "/project/signup", label: "Signup" },
    { to: "/project/account", label: "Account" },
  ];
const active = (path) => (pathname.includes(path) ? "active" : "");
return (
  <div className="list-group">
    {links.map((link) => (
      (link.label === "Signin" || link.label === "Signup") && currentUser !== null ? null : (
        (link.label === "Account" && currentUser === null) ? null : (
      <button
      key={link.to}
      className={`list-group-item ${active(link.to)} btn btn-danger button-margin` }
    >
      <Link to={link.to} style={{ textDecoration: 'none', color: 'inherit' }}>
        {link.label}
      </Link>
    </button>
    )
    )
    ))}
  </div>
);
}

export default Nav;
