import {Component, Fragment} from 'react'
import './App.css';
import LeftImg from "./images/left-img.jpg";
import React from "react";

function App() {
    return (
        <Fragment>
            <NewsContent
             heading="Markaziy Osiyoni Kremniy vodiysi bilan bog‘lamoqchimiz” - AQShda ayti hab ochgan Asror Arabjonov"
             img = {LeftImg}/>
          
        </Fragment>
    );
}
function NewsContent(props) {
  return (
      <div className='container'>
        <div className="news-block">
          <div className='first-block'>
            <div className='left-block'>
              <img src={props.img} className='leftimg' alt='post'/>
                <h3 className='right-block-heading'>{props.heading}</h3>
                <button className='right-block-btn'>Batafsil</button>
            </div>
          </div>
        </div>
      </div>
  );
}
export default App;
