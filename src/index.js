import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './Reducer/counterReducer';

const store = createStore(counterReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
