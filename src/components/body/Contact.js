// import React from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      tel: "",
      mail: "",
      agree: false,
      contactType: "tel.",
      messege: "",
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange = (e) => {
    let value =
      e.target.name === "checkbox" ? e.target.checked : e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
  };

  render() {
    document.title = "Contacts | Montuli Cafe";
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12 text-center display-3 p-3">
            Send Your Feedback
          </div>
          <div className="col-12">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="fname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    value={this.state.fname}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    value={this.state.lname}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                </Col>
              </FormGroup>{" "}
              <FormGroup row>
                <Label htmlFor="tel" md={2}>
                  telphone
                </Label>
                <Col md={10}>
                  <Input
                    onChange={(e) => this.handleInputChange(e)}
                    type="number"
                    placeholder="telephone"
                    name="tel"
                    value={this.state.tel}
                  />
                </Col>
              </FormGroup>{" "}
              <FormGroup row>
                <Label htmlFor="mail" md={2}>
                  mail
                </Label>
                <Col md={10}>
                  <Input
                    onChange={(e) => this.handleInputChange(e)}
                    type="email"
                    placeholder="mail"
                    name="mail"
                    value={this.state.mail}
                  />
                </Col>
              </FormGroup>{" "}
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <Label>
                    <input
                      onChange={(e) => this.handleInputChange(e)}
                      type="checkbox"
                      name="agree"
                      checked={this.state.agree}
                    />
                    <strong className="pl-1"> May We Contact You</strong>
                  </Label>
                </Col>
                <Col md={{ size: 3, offset: 2 }}>
                  <Input
                    onChange={(e) => this.handleInputChange(e)}
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                  >
                    <option>Telephone</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="messege" md={2}>
                  Messege
                </Label>
                <Col md={10}>
                  <Input
                    onChange={(e) => this.handleInputChange(e)}
                    type="textarea"
                    name="messege"
                    value={this.state.messege}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="secondary">
                    {" "}
                    Send{" "}
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
