import React from "react";
import ReactDOM from "react-dom";
import "./css/userforms.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//import "../node_modules/bootstrap/dist/js/bootstrap.js";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
