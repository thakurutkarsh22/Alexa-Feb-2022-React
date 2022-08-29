import React from "react";
import ReactDOM from "react-dom";

function Portal() {
  return ReactDOM.createPortal(
    <div>This is a portal</div>,
    document.getElementById("modal-container")
  );
  //   return <div>This is a portal</div>;
}

export default Portal;
