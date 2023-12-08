import * as client from "./client";
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

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
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
              value={account.username}
              onChange={(e) =>
                setAccount({ ...account, username: e.target.value })
              }
            />
            <label htmlFor="password">Password</label>
            <input
              className="form-control mb-2"
              value={account.password}
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
            />
            </div>

            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control mb-2"
              value={account.firstName}
              onChange={(e) =>
                setAccount({ ...account, firstName: e.target.value })
              }
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control mb-2"
              value={account.lastName}
              onChange={(e) =>
                setAccount({ ...account, lastName: e.target.value })
              }
            />

            <label htmlFor="email">Email</label>
            <input
              className="form-control mb-2"
              value={account.email}
              onChange={(e) => setAccount({ ...account, email: e.target.value })}
            />
            <div className="d-flex justify-content-end">
            <button
                  className="btn btn-primary button-margin " onClick={updateUser}
                >
                  <Link to="/project/account" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Update
                  </Link>
                </button>
            <button className="btn btn-primary button-margin " onClick={updateUser}>
              Save
            </button>
            <button className="btn btn-danger button-margin" onClick={signout}>
              Cancel
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
