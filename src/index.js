import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/hero/hero'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    <Header />
    <Hero />
        </BrowserRouter>
);




reportWebVitals();
