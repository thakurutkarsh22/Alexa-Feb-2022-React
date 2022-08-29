import React from "react";
import ReactDOM from "react-dom";

function InfoBox() {
  return ReactDOM.createPortal(
    <div>Hey Guys Welcome to the website</div>,
    document.getElementById("modal-container")
  );
  return <div>Hey Guys Welcome to the website</div>;
}

export default InfoBox;
