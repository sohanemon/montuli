import React from "react";
let Comment = (props) => {
  let allComment = props.com.map((ele) => {
    return (
      <div key={ele.id}>
        <br />
        <h5>Name: {ele.author}</h5>
        <div>Rating: {ele.rating}</div>
        <div>{ele.comment}</div>
      </div>
    );
  });
  return <div>{allComment}</div>;
};
export default Comment;
