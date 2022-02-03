// import React, { useState } from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042748",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
    borderColor: props.mode === "dark" ? "white" : "#042748",
  };

  return (
    <>
      \
      <div className="container my-5 " style={myStyle}>
        <h1
          className="heading  "
          style={{
            color: props.mode === "dark" ? "white" : "#042748",
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
          }}
        >
          About Us
        </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Analyze Your Text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body " style={myStyle}>
                <strong>Analyz It.</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Totally Free</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Totally Responsive!</strong>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
