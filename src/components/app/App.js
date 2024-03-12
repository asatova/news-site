import { Component } from 'react'
import './App.css';
// import NewsBlock from "../news-block/news-block";
import LeftImg from "../news-block/images/left-img.jpg";
import React from "react";


function NewsBlock(props) {
  return (
      <div className='container'>
        <div className="news-block">
          <div className='first-block'>
            <div className='left-block'>
              <img src={LeftImg} alt="hero" className='leftimg'/>
            </div>
            <div className='right-block'>
              <h3 className='right-block-heading'>{props.heading}</h3>
            </div>
          </div>

        </div>
      </div>
  );
}


function App() {
  return (
      <div>
        <NewsBlock heading="Markaziy Osiyoni Kremniy vodiysi bilan bog‘lamoqchimiz” - AQShda ayti hab ochgan Asror Arabjonov" />
      </div>
  );
}

export default App;
