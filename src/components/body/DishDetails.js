import React from "react";
import Comment from "./Comment";
import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
} from "reactstrap";
import CommentForm from "./CommentForm";
const DishDetails = (props) => {
  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg src={props.dish.image} />
        <CardBody>
          <CardTitle>
            <h4>{props.dish.name}</h4>
          </CardTitle>

          <CardText>
            <p>{props.dish.description}</p>
            <h5>Price: {props.dish.price} tk</h5>
          </CardText>
          <hr />
          <div>
            <Comment com={props.dish.comments} />
            <br />
            <CommentForm id={props.dish.id} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default DishDetails;
