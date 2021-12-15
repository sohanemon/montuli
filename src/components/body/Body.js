import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import { Route, Routes, Redirect, Switch } from "react-router-dom";
let Body = () => {
  return (
    <div>
      {/* <Switch> */}
      <Routes>
        <Route path="/Homw" exact element={Home} />
        <Route path="Menu" exact element={<Menu />} />
        <Route path="Contact" exact element={<Contact />} />
        <Route path="About" exact element={<About />} />
        {/* <Redirect from="/" to="/Home" /> */}
      </Routes>
      {/* </Switch> */}
    </div>
  );
};
export default Body;
