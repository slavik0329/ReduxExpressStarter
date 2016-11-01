import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import {StyleRoot} from 'radium';

import reducers from './reducers';
import routes from './routes.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <StyleRoot>
      <Router history={browserHistory} routes={routes} />
    </StyleRoot>
  </Provider>
  , document.querySelector('.container'));
