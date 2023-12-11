import { Routes, Route, Navigate } from "react-router-dom";
// import { store, persistor } from "./store";
import store from "./store";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import YalpNavigation from "./YalpNavigation";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import Signin from "./Users/signin";
import Signup from "./Users/signup";
import Account from "./Users/account";
import UpdateAccount from "./Users/updateAccount";
import Search from "./search";
import Details from "./details";

import { Restaurant } from "./Restaurants";
import UserManagement from "./UserManagement";
import Container from "react-bootstrap/Container";
import CurrentUser from "./Users/currentUser";
function Yalp() {
  const { currentUser } = useSelector((state) => state.userReducer);
  console.log(currentUser);
  return (
    <Provider store={store}>

      <CurrentUser>

      <div>
        <NavigationBar />
        <div>
          <div>
            {currentUser && (
              <div>
                <p>Username: {currentUser.username}</p>
                <p>Password: {currentUser.password}</p>
                {/* You can display additional information from the currentUser if needed */}
              </div>
            )}
          </div>
          <Container>
            <Routes>
              <Route path="/*" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route
                path="/restaurants/:restaurantId"
                element={<Restaurant />}
              />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/account" element={<Account />} />
              <Route path="/updateaccount" element={<UpdateAccount />} />
              <Route path="/account/:id" element={<Account />} />
              <Route path="search/*" element={<Search />} />
              <Route
                path="search/:searchTerm/:searchLocation"
                element={<Search />}
              />
              <Route path="details/:businessId" element={<Details />} />
            </Routes>
          </Container>
        </div>
      </div>
      </CurrentUser>
    </Provider>
  );
}

export default Yalp;
