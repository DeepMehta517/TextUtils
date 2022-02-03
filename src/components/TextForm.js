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
    if (text.length > 0 ) {
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showalert("Deleted Extra Space", "success");
    } else {
      props.showalert("Field Can't Be Empty", "danger");
    }
  };

  const ClearTExt = () => {
    if (text.length > 0) {
      let newtext = text.replace(text," ")
      setText(newtext); 
      props.showalert("Deleted Text", "success")
    } else {
      props.showalert("Field Can't Be Empty", "danger");
    }
  };

  const CopyText = () => {
    if (text.length > 0) {
      navigator.clipboard.writeText(text)
      props.showalert("Text Copied", "success")
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
      <div className="container my-3">
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
        <button className="btn btn-primary mx-2 my-2" onClick={handleUPPERClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>
          Convert to LOWERCASE
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={ClearTExt}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={CopyText}>
          Copy Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {" "}
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
