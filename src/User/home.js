import { useSelector, useDispatch, Provider } from "react-redux";

function Home() {
  const { currentUser } = useSelector((state) => state.userReducer);
  console.log(currentUser);
  return (
    <div>
      <h1>Home</h1>
      <h1>TEST</h1>
    </div>
  );
}

export default Home;
