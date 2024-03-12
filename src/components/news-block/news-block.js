import './news-block.css';
import React from "react";
import LeftImg from "../news-block/images/left-img.jpg";

function NewsBlock() {
    return (
        <div className='container'>
        <div className="news-block">
            <div className='first-block'>
                <div className='left-block'>
                    <img src={LeftImg} alt="hero" className='leftimg'/>
                </div>
                <div className='right-block'>
                    <h3 className='right-block-heading'>“Markaziy Osiyoni Kremniy vodiysi bilan bog‘lamoqchimiz” - AQShda ayti hab ochgan Asror Arabjonov</h3>
                </div>
            </div>
            <div className='first-block'>
                <div className='left-block'>
                    <img src={LeftImg} alt="hero" className='leftimg'/>
                </div>
                <div className='right-block'>
                    <h3 className='right-block-heading'>“Markaziy Osiyoni Kremniy vodiysi bilan bog‘lamoqchimiz” - AQShda ayti hab ochgan Asror Arabjonov</h3>
                </div>
            </div>
        </div>
        </div>
    );
}

export default NewsBlock;
