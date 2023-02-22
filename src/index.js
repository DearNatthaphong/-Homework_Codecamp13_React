import React from 'react'; // library name
import ReactDOM from 'react-dom/client'; // folder: react-dom, file: client
import './index.css';
import App from './App'; // ./App.js
import reportWebVitals from './reportWebVitals'; // ./reportWebVitals.js

// // Default Import
// import abcd from './import-export/sayHi';

// // Name Import ชื่อต้องตรงกับที่ export ออกมา
// import { month as mth } from './import-export/sayHi';

// import { month, sayHello, day, year } from './import-export/sayHi';
// // import everything as object
// import * as obj from './import-export/sayHi';

// obj.sayHello();
// obj.year;

// abcd();
// console.log(month);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
