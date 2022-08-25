import './App.css';
import React, { Children, useState } from 'react';
import User from '../User/User';
import India from '../India/India';

function App() {
  const [sub, setSub] = useState("Best Nation");
  const [thing1, setThing1] = useState()
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

  const newElem = React.createElement("div", null, "Inside element" );
  const newElement = React.createElement("div", null, [newElem, "Hey there I am an array"] );

  return (
    <React.Fragment>
      <h1> this is an H1 tag </h1>
      <button onClick={() => setSub("Huge nation")}>Change the props</button>
      <User />
      <India title="India" subtitle={sub} />
      <div>then this is created </div>

    </React.Fragment>
  )
}


export default App;
