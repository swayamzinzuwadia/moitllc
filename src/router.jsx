// AppRouter.js
import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Contact from "./pages/contact";
// import Content from "./pages/AboutUs";
import AboutUs from "./pages/Aboutus";
// import ContainerOutsideExample from "./components/navbar";
const AppRouter = () => {
  return (
    <Router>
      {/* <ContainerOutsideExample /> */}
      <Routes>
          
          <Route path="/" element={<HomePage/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
