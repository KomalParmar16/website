import React, { useState } from "react";

export default function FromText(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let nextText = text.toUpperCase();
    setText(nextText);
    props.showAlert("converted into Uppercase", "success");
  };

  const handleLowerClick = () => {
    let nextTextLower = text.toLowerCase();
    setText(nextTextLower);
    props.showAlert("converted into Lowercase", "success");
  };

  const handleCopy = () => {
    var newTextCopy = document.getElementById("exampleFormControlTextarea1");
    newTextCopy.select();
    navigator.clipboard.writeText(newTextCopy.value);
    props.showAlert("Text is copied", "success");
  };

  const handleExtraSpaces = () => {
    let newtextExtra = text.split(/[ ]+/);
    setText(newtextExtra.join(" "));
    props.showAlert("Extra space is removed", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.formTitle}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
    </>
  );
}
