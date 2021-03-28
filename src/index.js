
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './store/reducers/index';

import './index.css';
import App from './containers/App';
const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    (window)?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose; 
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));