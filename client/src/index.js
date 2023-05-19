import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import './index.css';
import App from "./App_s";
import reducers from "./reducers/index.js";

const store =  createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.querySelector("#root")
);
