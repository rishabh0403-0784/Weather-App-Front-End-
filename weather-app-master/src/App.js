import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import City from "./pages/city";

import "react-toastify/dist/ReactToastify.css";
import "./styles/main.scss";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:hash" element={<City />} />
      </Routes>
    </Router>
  );
}
