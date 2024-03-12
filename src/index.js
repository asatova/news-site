import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/hero/hero'
import NewsBlock from "./components/news-block/news-block";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    <Header />
    <Hero />
     <NewsBlock />
        </BrowserRouter>
);




reportWebVitals();
