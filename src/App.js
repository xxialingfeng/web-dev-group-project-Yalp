import './App.css';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import YalpNavigation from './Yalp/YalpNavigation';
import Home from "./Yalp/Home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
