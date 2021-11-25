import React from "react";
import { Card, CardTitle, CardBody, CardImg, CardImgOverlay } from "reactstrap";
let MenuItem = (props) => {
  return (
    <div>
      <Card style={{ margin: "10px" }}>
        <CardBody>
          <CardImg
            width="100px"
            height="400px"
            alt={props.dish.name}
            src={props.dish.image}
            style={{ opacity: ".5" }}
          />
        </CardBody>
        <CardImgOverlay>
          <CardTitle onClick={props.DishSelect} style={{ cursor: "pointer" }}>
            <h3
              style={{
                marginTop: "35%",
                fontWeight: "Bold",
                color: "black",
              }}
            >
              {props.dish.name}
            </h3>
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};
export default MenuItem;
