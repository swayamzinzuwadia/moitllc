// AppRouter.js
import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Contact from "./pages/contact";
import Content from "./pages/AboutUs";
// import ContainerOutsideExample from "./components/navbar";
const AppRouter = () => {
  return (
    <Router>
      {/* <ContainerOutsideExample /> */}
      <Routes>
          
          <Route path="/" element={<HomePage/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/about-us" element={<Content/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
