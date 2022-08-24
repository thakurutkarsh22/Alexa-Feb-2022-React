import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
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
    <h1> this is an H1 tag </h1>
    
  )
}

export default App;
