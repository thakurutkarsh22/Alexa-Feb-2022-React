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

function App() {
  const [sub, setSub] = useState("Best Nation");
  const [thing1, setThing1] = useState();
  const [bully, setBully] = useState("");
  const [showComponent, setShowCompoenet] = useState(true);
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
      <TodoApp />
    </React.Fragment>
  );
}

export default App;
