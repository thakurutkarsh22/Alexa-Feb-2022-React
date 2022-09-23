import "./App.css";
import React, { Children, useState } from "react";
import User from "../User/User";
import India from "../India/India";
import ImpInfo from "../../CommonUI/ImpInfo/ImpInfo";
import Portal from "../Portal/Portal";
import Name from "../Name/Name";
import TODO from "../TODO/Todo";
import UncontrolledForm from "../Forms/UncontrolledForm";
import UserForm from "../Forms/UserForm";
import FormikForm from "../Forms/Formik";
import ClassLifeCycle from "../ClassLifeCycle/ClassLifeCycle";
import ClockClass from "../Clock/ClockClass";
import CounterParent from "../Counter/CounterParent";
import ErrorBoundadry from "../../CommonUI/ErrorComponent/ErrorBoundadry";
import PokemonFunc from "../Pokemon/PokemonFunc";
import Movie from "../Movie/Movie";
import CounterReducer from "../Counter/CounterReducer";
import Game2048 from "../Game2048/Game2048";
import TodoApp from "../TODOReducerApp/TodoApp";
import DarkModeContext from "./context";
import FormsUI from "../UnderstandingRefs/FormsUI/FormsUI";
import Clock from "../UnderstandingRefs/Stopwatch/Clock";
import CounterRef from "../UnderstandingRefs/basicRef/CounterRef";
import Playback from "../UnderstandingRefs/Playback/PlayBack";
import Component from "../Performance/basics.js/basics";
import Parent from "../Performance/Usage/Parent";
import UseToggleApp from "../CustomHooks/usetoggle/UseToggleApp";
import UseLocalStorageApp from "../CustomHooks/useLocalStorage/UseLocalStorageApp";
// import Parent from "../Performance/basics.js/ReRenderingExample/Parent";




// 1. providing 
// DarkModeContext.Provider = 

// 2. subscribing 
// DarkModeContext.Consumer = // for the decendents to consume works with class components .... 
// will work with functional component; useContext(-nameof the context);



function App() {
  const [sub, setSub] = useState("Best Nation");
  const [thing1, setThing1] = useState();
  const [bully, setBully] = useState("");
  const [showComponent, setShowCompoenet] = useState(true);

  const [darkMode, setDarkMode] = useState(false);

  console.log("darkMode in APp", darkMode);
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

  // const newElem = React.createElement("div", null, "Inside element");
  // const newElement = React.createElement("div", null, [
  //   newElem,
  //   "Hey there I am an array",
  // ]);

  // const onUserChange = (name) => {
  //   // tell parent pararent what happened
  //   setBully(name);
  // };

  return (
    <React.Fragment>
      {/* <h1> this is an H1 tag </h1>
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
      <Portal></Portal>

      <h1>Here is the list of the children</h1>
      <Name /> */}
      {/* <TODO />

      <UncontrolledForm /> */}
      {/* <UserForm /> */}
      {/* <FormikForm /> */}
      {/* {<ClassLifeCycle />}
      <button onClick={() => setShowCompoenet(false)}>
        Delete the classLifeCycle
      </button> */}
      {/* ------------  Clock --------------- */}
      {/* APP class
      <button onClick={() => setShowCompoenet((oldState) => !oldState)}>
        Toggle Clock Class
      </button>
      {showComponent && <ClockClass />} */}
      {/* <ErrorBoundadry>
        <CounterParent />
      </ErrorBoundadry> */}

      {/* <PokemonFunc /> */}
      {/* <Movie /> */}
      {/* <CounterReducer /> */}
      {/* <Game2048 /> */}
      {/* <DarkModeContext.Provider value={darkMode}>
        <TodoApp />
      </DarkModeContext.Provider>

      <button onClick={() => setDarkMode(old => !old)}>App Dark Mode</button> */}

      {/* understanding refs */}
      {/* <FormsUI /> */}
      {/* <Clock /> */}
      {/* <CounterRef /> */}
      {/* <Playback /> */}
      {/* <Component /> */}

      {/* performance */}
      {/* <Parent /> */}
      {/* <Parent /> */}


      {/* ------------------------ custom hooks ---------------------  */}
      {/* <UseToggleApp /> */}
      <UseLocalStorageApp />
    </React.Fragment>
  );
}

export default App;
