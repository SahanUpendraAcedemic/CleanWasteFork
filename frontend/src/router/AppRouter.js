import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegister from "../pages/UserRegister";
import UserLogin from "../pages/UserLogin";
import HomePage from "../pages/user/HomePage";
import GcHomePage from "../pages/Garbage_collector/GcHomePage";
// import Dashboard from '../pages/Dashboard';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/register" element={<UserRegister />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/GcHome" element={<GcHomePage />} />

      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  </Router>
);

export default AppRouter;
