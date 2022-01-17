import React, { useState } from "react";

export default function TextForm(props) {
  const handleUPPERClick = () => {
    if (text.length > 0) {
      let newText = text.toUpperCase();
      setText(newText);
      props.showalert("Converted to UpperCase", "success");
    } else {
      props.showalert("Field Can't Be Empty", "danger");
    }
  };
  const handleLowerClick = () => {
    if (text.length > 0) {
      let newText = text.toLowerCase();
      setText(newText);
      props.showalert("Converted to LowerCase", "success");
    } else {
      props.showalert("Field Can't Be Empty", "danger");
    }
  };
  const handleExtraSpace = () => {
    if (text.length > 0) {
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showalert("Deleted Extra Space", "success");
    } else {
      props.showalert("Field Can't Be Empty", "danger");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
            {" "}
            {props.heading}
          </h1>

          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPPERClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to LOWERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split("   ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in a box to preview it here!"}
        </p>
      </div>
    </>
  );
}
