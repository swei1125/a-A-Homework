import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);


  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});



// 
// const applyMiddlewares = (store, ...middles) => {
//   let dispatch = store.dispatch;
//   middles.forEach(m => {
//     dispatch = m(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch });
// };
