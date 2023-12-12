import * as userClient from "./userClient";
import * as followsClient from "../follows/client";
import { useEffect, useState } from "react";
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { useSelector } from "react-redux";

import {
  BsFillCheckCircleFill,
  BsPencil,
  BsPlusCircleFill,
  BsTrash3Fill,
} from "react-icons/bs";

function UserTable() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "USER",
  });
  const [users, setUsers] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const { currentUser } = useSelector((state) => state.userReducer);
  const { id } = useParams();

  const fetchUsers = async () => {
    const users = await userClient.findAllUsers();
    setUsers(users);
  };

  const createUser = async () => {
    try {
      const newUser = await userClient.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };

  const selectUser = async (user) => {
    try {
      const u = await userClient.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async () => {
    try {
      const status = await userClient.updateUser(user._id, user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user) => {
    try {
      await userClient.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const followUser = async (id) => {
    console.log(id);
    const status = await followsClient.userFollowsUser(id);
  };
  const unfollowUser = async () => {
    const status = await followsClient.userUnfollowsUser(id);
  };
  const fetchFollowers = async () => {
    const followers = await followsClient.findFollowersOfUser(id);
    setFollowers(followers);
  };
  const fetchFollowing = async () => {
    const following = await followsClient.findFollowedUsersByUser(id);
    setFollowing(following);
  };
  const alreadyFollowing = () => {
    return followers.some((follows) => {
      return follows.follower._id === currentUser._id;
    });
  };

  // const handleClick = (link) => {
  //   navigate(link);
  // }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <Link to={`/profile/${user._id}`} 
                // onClick={() => handleClick(`/account/${user._id}`)} 
                >{user.username}</Link>
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              {/* <td className="text-nowrap">
              {currentUser && currentUser._id !== id && (
        <>
          {alreadyFollowing() ? (
            <button onClick={()=>unfollowUser(user._id)} className="btn btn-danger float-end">
              Unfollow
            </button>
          ) : (
            <button onClick={()=>followUser(user._id)} className="btn btn-warning float-end">
              Follow
            </button>
          )}
        </>
      )}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
