import "./App.css";
import React, { Children, useState } from "react";
import User from "../User/User";
import India from "../India/India";
import ImpInfo from "../../CommonUI/ImpInfo/ImpInfo";

function App() {
  const [sub, setSub] = useState("Best Nation");
  const [thing1, setThing1] = useState();
  const [bully, setBully] = useState("");
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  const newElem = React.createElement("div", null, "Inside element");
  const newElement = React.createElement("div", null, [
    newElem,
    "Hey there I am an array",
  ]);

  const onUserChange = (name) => {
    // tell parent pararent what happened
    setBully(name);
  };

  return (
    <React.Fragment>
      <h1> this is an H1 tag </h1>
      <button onClick={() => setSub("Huge nation")}>Change the props</button>
      <User title="India" />
      <India
        onUserChange={onUserChange}
        bully={bully}
        title="India"
        subtitle={sub}
      />
      <div>then this is created Parent</div>
      <div>{bully}</div>
      <button onClick={() => setBully("Chin")}>updateChin</button>
      <ImpInfo impInfo="Hey Important">Hey imp</ImpInfo>
    </React.Fragment>
  );
}

export default App;
