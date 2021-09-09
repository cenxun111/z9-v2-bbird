import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "regenerator-runtime/runtime";
import "core-js/stable";
// import DataProvider from "./redux/store"
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";


ReactDom.render(
 
  <Provider store={store}>
    <App />
  </Provider>,



  document.getElementById("root")
);
