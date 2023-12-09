import Signin from "./users/signin";
import Signup from "./users/signup";
import Account from "./users/account";
import UpdateAccount from "./users/updateAccount";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav";
import Home from "./home"

function User() {
  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/project/home"element={<Home />}/>
          <Route path="/project/signin" element={<Signin />} />
            <Route path="/project/signup" element={<Signup />} />
            <Route path="/project/account" element={<Account />} />
            <Route path="/project/updateaccount" element={<UpdateAccount />} />
            <Route path="/project/account/:id" element={<Account />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

  export default User;