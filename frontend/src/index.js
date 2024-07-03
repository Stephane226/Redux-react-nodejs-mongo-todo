import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {Provider} from "react-redux";
import {thunk} from "redux-thunk";
import { BrowserRouter } from 'react-router-dom';


import reportWebVitals from './reportWebVitals';
import TodoReducer from "./stores/reducer";

const RootReducer = combineReducers({
  TodoReducer:TodoReducer
})

// enabled redux to browser 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//create store
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();