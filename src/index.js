import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/AuthContext';
import  Store  from './services/Store'
import NewsStore from './services/NewsStore';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    
      <Provider store={Store,   NewsStore}>
     <AuthContextProvider>
     
      <App />
      
      </AuthContextProvider>
      </Provider>
     
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
