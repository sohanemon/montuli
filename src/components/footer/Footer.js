import React from "react";
let Footer = () => {
  return (
    <div>
      <div
        className="container-fluid"
        style={{
          position: "fixed",
          bottom: "0",
          backgroundColor: "grey",
          width: "100%",
          padding: "10px 0px 0px",
          margin: "0px, auto",
        }}
      >
        <div className="row "></div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>&#169;All rights reserved by SohanEmon</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
