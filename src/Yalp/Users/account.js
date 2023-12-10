import * as client from "./userClient";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Account() {

  const navigate = useNavigate();
  console.log({ navigate });
  const { id } = useParams();
  console.log({ id });
  const [account, setAccount] = useState(null);
  console.log({ account });
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
              <div>
                <label htmlFor="password">Password</label>
                <input
                  className="form-control mb-2"
                  value={account.password}
                  readOnly
                />
              </div>

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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
