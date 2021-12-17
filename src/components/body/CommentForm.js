import React, { Component } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { connect } from "react-redux";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishid: "",
      author: "",
      rating: "",
      comment: "",
    };
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      dishid: this.props.id,
    });
  };
  handleSubmit = (e) => {
    this.props.dispatch({
      type: "ADD_COMMENT",
      payload: { ...this.state },
    });
    this.setState({
      dishid: "",
      author: "",
      rating: "",
      comment: "",
    });

    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <div className="row ">Comment</div>
        <div className="row">
          <div className="col">
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <FormGroup row>
                <div className="container-fluid">
                  <div className="row">
                    <input
                      required
                      className="col-8"
                      type="text"
                      name="author"
                      onChange={(e) => this.handleInputChange(e)}
                      placeholder="Enter your name"
                    />
                    <Input
                      className="col"
                      type="select"
                      name="rating"
                      required
                      onChange={(e) => this.handleInputChange(e)}
                    >
                      <option disabled selected className="text-muted">
                        Rating?
                      </option>
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </Input>
                  </div>
                </div>
              </FormGroup>
              <FormGroup row>
                <Input
                  onChange={(e) => this.handleInputChange(e)}
                  type="textarea"
                  placeholder="Enter your Comment..."
                  name="comment"
                  className="text-secondary "
                />
              </FormGroup>
              <FormGroup row>
                <button class="btn btn-outline-secondary" href="#">
                  Send your Comment
                </button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(CommentForm);
