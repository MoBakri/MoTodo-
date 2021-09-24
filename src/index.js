import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./freeCodeCamp/quotes";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
// import "./index.css";
import "./quotes.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
