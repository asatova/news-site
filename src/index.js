import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
  </React.StrictMode>
);




reportWebVitals();
