import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ChoosePlace from "./pages/ChoosePlace";
import ChooseTime from "./pages/ChooseTime";
import GuestInfo from "./pages/GuestInfo";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChoosePlace />} />
        <Route path="/2" element={<ChooseTime />} />
        <Route path="/3" element={<GuestInfo />} />
        <Route path="/4" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
