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
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default DishDetails;
