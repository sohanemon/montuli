import React, { Component } from "react";
import { Form, FormGroup } from "reactstrap";

export class CommentForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">Comment</div>
        <div className="row">
          <div className="col">
            <Form>
              <FormGroup row>
                <input
                  type="text"
                  placeholder="Enter your Comment..."
                  name="commentForm"
                  className="text-secondary"
                />
              </FormGroup>
              <FormGroup row>
                <a class="btn btn-outline-secondary" href="#" role="button">
                  Send your Comment
                </a>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentForm;
