import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
class Navigation extends Component {
  state = {
    navOpen: false,
  };
  toogleNavbar = () => {
    this.setState({ navOpen: !this.state.navOpen });
  };

  render() {
    return (
      <div>
        <Navbar dark color="dark" expand="sm">
          <div className="container" style={{ textAlign: "center" }}>
            <NavbarToggler onClick={this.toogleNavbar} />
            <NavbarBrand href="/">Montuli Cafe</NavbarBrand>
            <Collapse isOpen={this.state.navOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/menu" className="nav-link">
                    Menu
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/Contact" className="nav-link">
                    Contact
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/About" className="nav-link">
                    About
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
