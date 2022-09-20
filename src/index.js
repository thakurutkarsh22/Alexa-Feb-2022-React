import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import India from "./Components/India/India";
import App from "./Components/App/App";
import Destructure from "./Components/Destructing/Destructuring";
import RoutesApp from "./Components/RoutesApp/RoutesApp";
import { BrowserRouter } from "react-router-dom";
import LazyLoading from "./Components/Performance/LazyLoading/LazyLoading";
// import {} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("blank-container"));
root.render(
  <React.StrictMode>
    <App />
    {/* <India title="India" subtitle="Best Nation" /> */}
    {/* <Destructure title="welcome to Destruc" /> */}
    {/* <BrowserRouter>
      <RoutesApp />
    </BrowserRouter> */}
{/* lazy loading  */}
    <BrowserRouter>
      <LazyLoading />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
