import React from 'react';  // so that we canuse jsx or html part with the help of bebble . bebble is the compile that convert modern js to browser compatible js
import ReactDOM from 'react-dom';  // Explore DOM using inbuilt methods
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// JSX = Javascript XML or Javascript Extension : HTML PART 
ReactDOM.render( //Kya dikhana h
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  //kidhr dikhana h 
  document.getElementById('root')
);
 
reportWebVitals();
