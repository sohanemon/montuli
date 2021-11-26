import React from "react";
let Comment = (props) => {
  let allComment = props.com.map((ele) => {
    let star = "";
    for (let x = 0; x < ele.rating; x++) {
      star = star + " *";
    }
    return (
      <div key={ele.id}>
        <br />
        <h5>{ele.author}</h5>
        <div>
          Rating:{" "}
          <span
            style={{
              fontWeight: "700",
              fontSize: "25px",
              marginTop: "39px",
            }}
          >
            {star}
          </span>
        </div>
        <div>{ele.comment}</div>
      </div>
    );
  });
  return <div>{allComment}</div>;
};
export default Comment;
