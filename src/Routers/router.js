import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { ActiveSprint, CommingSoon, NotFound } from "../pages";
const Nav = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ActiveSprint />} />
        <Route path="/backlog" element={<CommingSoon />} />
        <Route path="/calender" element={<CommingSoon />} />
        <Route path="/report" element={<CommingSoon />} />
        <Route path="/issues" element={<CommingSoon />} />
        <Route path="/team" element={<CommingSoon />} />
        <Route path="/setting" element={<CommingSoon />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Nav;
