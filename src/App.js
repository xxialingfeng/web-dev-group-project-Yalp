import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import YalpNavigation from "./Yalp/YalpNavigation";
import Home from "./Yalp/Home";
import { Restaurant } from "./Yalp/Restaurants";
function App() {
  return (
    <BrowserRouter>
      <YalpNavigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Restaurants/*" element={<Restaurant />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
