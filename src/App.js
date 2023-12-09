import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import YalpNavigation from "./Yalp/YalpNavigation";
import { Restaurant } from "./Yalp/Restaurants";
import Yalp from "./Yalp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/*" element={<Navigate to="/yalp" />}></Route> */}
        <Route path="/*" element={<Yalp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
