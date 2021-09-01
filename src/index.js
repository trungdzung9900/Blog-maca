import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import reducer  from './redux/reducer';
import mySaga from './redux/sagas';

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
