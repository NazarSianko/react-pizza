import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'
import './styles/index.scss';
import App from './App';
import { BrowserRouter, Route,Routes,HashRouter } from 'react-router-dom';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter> 
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>  
          <App/>
      </PersistGate>

    </Provider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
