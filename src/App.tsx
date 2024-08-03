import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./page/Auth";
import Signup from "./page/Signup";
import Dashboard from "./page/dashboard/Dashboard";
import Welcome from "./page/dashboard/Welcome";
import ForgotPassword from "./page/ForgotPassword";
import ResetPassword from "./page/ResetPassword";
import Homepage from "./page/dashboard/Homepage";
import Details from "./page/dashboard/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/" element={<Welcome />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail" element={<Details/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
