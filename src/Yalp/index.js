import { Routes, Route, Navigate } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import YalpNavigation from "./YalpNavigation";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import { Restaurant } from "./Restaurants";
import UserManagement from "./UserManagement";
import Container from "react-bootstrap/Container";
function Yalp() {
  return (
    <Provider store={store}>
      <div>
        <NavigationBar />
        <div>
          <Container>
            <Routes>
              <Route path="/*" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route
                path="/restaurants/:restaurantId"
                element={<Restaurant />}
              />
              <Route path="/users" element={<UserManagement />} />
            </Routes>
          </Container>
        </div>
      </div>
    </Provider>
  );
}

export default Yalp;
