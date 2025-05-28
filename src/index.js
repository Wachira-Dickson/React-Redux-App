import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'; 

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers/rootReducer';


// Create Redux store
const store = createStore(rootReducer, compose( applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
  reduxFirestore(fbConfig), // Add reduxFirestore to the compose function
  reactReduxFirebase(fbConfig) // Add reactReduxFirebase to the compose function  
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();