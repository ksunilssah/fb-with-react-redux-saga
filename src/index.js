import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Middleware/Saga";
import { rootReducers, initialState } from "./Reducers";
import App from "./containers/App";
import "./style/bootstrap.min.css";

const sagaMiddleware = new createSagaMiddleware();
const store = createStore(
  rootReducers,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
