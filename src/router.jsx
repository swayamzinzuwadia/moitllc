// AppRouter.js
import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Contact from "./pages/contact";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
