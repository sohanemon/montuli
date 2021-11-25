import React from "react";
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
        </CardBody>
      </Card>
    </div>
  );
};
export default DishDetails;
