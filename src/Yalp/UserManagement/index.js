import React, { useEffect, useState } from "react";
import * as client from "../client";
import UserList from "../Components/UserList";

function UserManagement() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    client.findAllUsers().then((users) => setUsers(users));
  }, []);
  return (
    <div>
      <div>
        <UserList users={users} />
      </div>
    </div>
  );
}

export default UserManagement;
