import { useSelector, useDispatch } from "react-redux";

function Home() {
  const { currentUser } = useSelector((state) => state.userReducer);
  console.log(currentUser);
  return (
    <div>
      <h1>Home</h1>
      {currentUser && (
        <div>
          <p>Username: {currentUser.username}</p>
          <p>Username: {currentUser.password}</p>
          {/* You can display additional information from the currentUser if needed */}
        </div>
      )}
      {!currentUser && (
        <div>
          <p>No currentUser</p>
        </div>
      )}
    </div>
  );
}

export default Home;
