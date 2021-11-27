import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Body from "./body/Body";
import { BrowserRouter as Router } from "react-router-dom";
let MainComponent = () => {
  return (
    <div>
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </div>
  );
};
export default MainComponent;
