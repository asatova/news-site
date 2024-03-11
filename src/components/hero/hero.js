import './hero.css';
import Hero from "../hero/images/hero-img.png";
import React from "react";

function Hero() {
    return (
        <div className="Hero">
            <img src={Hero} alt="hero"/>
        </div>
    );
}

export default Hero;
