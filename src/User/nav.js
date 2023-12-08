import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  const links = [
    { to: "/project/home", label: "Home" },
    // { to: "/project/search", label: "Search" },
    { to: "/project/signin", label: "Signin" },
    { to: "/project/signup", label: "Signup" },
    { to: "/project/account", label: "Account" },
    // { to: "/project/admin/users", label: "Admin" },
    // { to: "/project/courses", label: "Courses" },
  ];
const active = (path) => (pathname.includes(path) ? "active" : "");
return (
  <div className="list-group">
    {links.map((link) => (
      <button
      key={link.to}
      className={`list-group-item ${active(link.to)} btn btn-danger button-margin` }
    >
      <Link to={link.to} style={{ textDecoration: 'none', color: 'inherit' }}>
        {link.label}
      </Link>
    </button>
    ))}
  </div>
);
}

export default Nav;
