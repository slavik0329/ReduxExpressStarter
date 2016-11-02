import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import {StyleRoot} from 'radium';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from './reducers';
import routes from './routes.js';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);

const store = createStoreWithMiddleware(reducers);

window.store = store;

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <StyleRoot>
      <Router history={history} routes={routes} />
    </StyleRoot>
  </Provider>
  , document.querySelector('.container'));
