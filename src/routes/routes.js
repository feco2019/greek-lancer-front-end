import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Registration from '../components/core/Registration';
import Home from "../components/core/Home";
import Login from "../components/core/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;