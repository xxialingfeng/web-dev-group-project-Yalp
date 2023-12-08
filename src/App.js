import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import YalpNavigation from "./Yalp/YalpNavigation";
import Home from "./Yalp/Home";
import LandingPage from "./Yalp/LandingPage";
import Search from "./Yalp/search";
import Details from "./Yalp/details";

function App() {
  return (
    <BrowserRouter>
      <YalpNavigation />
      {/* <LandingPage /> */}

      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="search/:searchTerm/:searchLocation" element={<Search />} />
        <Route path="details/:businessId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
