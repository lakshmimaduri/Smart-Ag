//Right Now No change. Might have to change as per requirement

import React from 'react';
import ReactDOM from 'react-dom';
import  {composeWithDevTools}  from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import * as serviceWorker from './serviceWorker';
import { studentSignup } from './reducers';
import logger from "redux-logger";
import thunk from "redux-thunk";
let store = createStore(studentSignup, composeWithDevTools(applyMiddleware(thunk,logger)));


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// import React from "react";
// import ReactDOM from "react-dom";
// import 'bootstrap/dist/css/bootstrap.css';
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
