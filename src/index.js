import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/ClashDisplay-Regular.ttf'
import './fonts/ClashDisplay-Semibold.ttf'
import './fonts/ClashDisplay-Bold.ttf'
import './fonts/ClashDisplay-Medium.ttf'
import './fonts/ClashDisplay-Light.ttf'
import './fonts/ClashDisplay-Extralight.ttf'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
