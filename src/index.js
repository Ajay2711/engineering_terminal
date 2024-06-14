import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Speedometer from './components/speedometer';
import Propeller from './components/propellers';
import SwitchButton from './components/switch';
import Terminal1 from './components/engineeringterminal-1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Terminal1 />
    {/* <Speedometer /> */}
    {/* <Propeller /> */}
    {/* <SwitchButton /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
