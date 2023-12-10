import React, { useState, useEffect } from "react";
import * as client from "../client";
import {
  BsFillCheckCircleFill,
  BsPencil,
  BsTrash3Fill,
  BsPlusCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
function UserList(props) {
  const [users, setUsers] = useState(props.users);
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "USER",
  });
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      console.log(JSON.stringify(u));
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="mt-3">
      <h2>Manage Users</h2>
      <div className="mb-5">
        <div className="row mb-2">
          <div className="col col-2">Username</div>
          <div className="col col-3">
            <input
              className="form-control"
              value={user.username}
              placeholder="Username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col col-2">Password</div>
          <div className="col col-3">
            <input
              className="form-control "
              value={user.password}
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col col-2">First Name</div>
          <div className="col col-3">
            <input
              className="form-control"
              value={user.firstName}
              placeholder="First Name"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col col-2">Last Name</div>
          <div className="col col-3">
            <input
              className="form-control me-1"
              value={user.lastName}
              placeholder="Last Name"
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col col-2">Email</div>
          <div className="col col-3">
            <input
              className="form-control me-1"
              value={user.email}
              placeholder="Last Name"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col col-2">Role</div>
          <div className="col col-3">
            <select
              className="form-control"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col col-2"></div>
          <div className="col col-3">
            <Link onClick={updateUser} className="btn btn-primary me-3">
              Update
            </Link>

            <Link onClick={createUser} className="btn btn-success me-3">
              Add
            </Link>
          </div>
        </div>
      </div>

      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id + user.username}>
              <td>
                <Link
                  to={`/kanbas/account/${user._id}`}
                  className="text-decoration-none"
                >
                  {user.username}
                </Link>
              </td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="text-nowrap">
                <button className="btn btn-warning me-2">
                  <BsPencil onClick={() => selectUser(user)} />
                </button>{" "}
                <button className="btn btn-danger me-2">
                  <BsTrash3Fill onClick={() => deleteUser(user)} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  //   console.log(users);
  //   return (
  //     <div>
  //       {users.map((user, index) => (
  //         <div className="row">
  //           <div className="col"> {user.firstname} </div>
  //           <div className="col"> {user.lastname} </div>
  //           <div className="col"> {user.username} </div>
  //           <div className="col"> {user.role} </div>
  //           <div className="col"> {user.email} </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
}

export default UserList;
