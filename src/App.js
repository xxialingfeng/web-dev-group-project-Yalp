import store from "./store";
import { useSelector, useDispatch, Provider } from "react-redux";
import User from "./User";
import { HashRouter } from "react-router-dom";
function App() {
  // const { currentUser } = useSelector((state) => state.userReducer);
  return (
    <Provider store={store}>
    <HashRouter>
      <div>
        <User />
      </div>
      {/* <h2>{currentUser}</h2> */}

    </HashRouter>
    </Provider>);
}
export default App;
