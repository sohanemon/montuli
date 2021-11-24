import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
let Navigation = () => {
  return (
    <div>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">Montuli</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};
export default Navigation;
