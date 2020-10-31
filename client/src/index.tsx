import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import logger from "redux-logger"
import { Provider } from "react-redux"
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from "./store/reducers"



const store: any = () =>
  createStore(rootReducer, {}, applyMiddleware(reduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
