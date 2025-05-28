import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers/rootReducer';


// Create Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();