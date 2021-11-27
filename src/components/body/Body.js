import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import { Route, Routes, Redirect } from "react-router-dom";
let Body = () => {
  return (
    <div>
      <switch>
        <Routes>
          <Route path="/" exact element={Home} />
          <Route path="menu" exact element={<Menu />} />
          <Route path="Contact" exact element={<Contact />} />
          <Route path="About" exact element={<About />} />
        </Routes>
      </switch>
    </div>
  );
};
export default Body;
