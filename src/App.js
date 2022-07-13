import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./routes/Main";
import Home from "./routes/Home";
import Menus from "./routes/Menus";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />}></Route>
        <Route path="/Main" element={<Main />}></Route>
        <Route path="/cafe/:id" element={<Menus />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
