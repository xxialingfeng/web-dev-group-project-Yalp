import * as client from "./userClient";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as followsClient from "../follows/client";

function Account() {

  const navigate = useNavigate();
  console.log({ navigate });
  const { id } = useParams();
  console.log({ id });
  const [account, setAccount] = useState(null);
  console.log({ account });
  // const [followers, setFollowers] = useState([]);
  // const [following, setFollowing] = useState([]);
  // const { currentUser } = useSelector((state) => state.userReducer);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const updateUser = async () => {
    const status = await client.updateUser(account._id, account);
  };
  const dispatch = useDispatch();
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/signin");
  };
  // const followUser = async () => {
  //   const status = await followsClient.userFollowsUser(id);
  // };
  // const unfollowUser = async () => {
  //   const status = await followsClient.userUnfollowsUser(id);
  // };
  // const fetchFollowers = async (id) => {
  //   console.log("I am fetch followers");
  //   const followers = await followsClient.findFollowersOfUser(id);
  //   setFollowers(followers);
  // };
  // const fetchFollowing = async (id) => {
  //   console.log("I am fetch following");
  //   const following = await followsClient.findFollowedUsersByUser(id);
  //   setFollowing(following);
  // };
  // const alreadyFollowing = () => {
  //   return followers.some((follows) => {
  //     return follows.follower._id === currentUser._id;
  //   });
  // };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  return (
    <div>
      <div className="login-page">
        <div className="form">
          <div className="login-header">
            <h1>Account Information</h1>
          </div>
          {account && (
            <div>
              {!id && (
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control mb-2"
                    value={account.password}
                    readOnly
                  />
                </div>
              )}

              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control mb-2"
                value={account.firstName}
                readOnly
              />

              <label htmlFor="lastName">Last Name</label>
              <input
                className="form-control mb-2"
                value={account.lastName}
                readOnly
              />

              <label htmlFor="email">Email</label>
              <input
                className="form-control mb-2"
                value={account.email}
                readOnly
              />

              <label htmlFor="role">Roles</label>
              <input
                className="form-control mb-2"
                value={account.role}
                readOnly
              />
              {/* <h3>Followers</h3>
          <div className="list-group">
            {followers.map((follows, index) => (
              <p>
                {follows.follower.username}
                {follows.follower._id}
              </p>
            ))}
          </div>
          <h3>Following</h3>
          <div className="list-group">
            {following.map((follows, index) => (
               <p>
               {follows.follower.username}
               {follows.follower._id}
             </p>
            ))}
          </div> */}
          {!id && (
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-primary button-margin "
                >
                  <Link to="/updateaccount" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Update
                  </Link>
                </button>
                <button className="btn btn-danger button-margin" onClick={signout}>
                  Signout
                </button>
              </div>
          )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Account;
// 9163d452af7d59a5ad0afe6701a76365f37cd914