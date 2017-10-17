import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
  </Provider>,
  document.querySelector('#app')
);
