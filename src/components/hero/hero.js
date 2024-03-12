import './hero.css';
import Heros from "../hero/images/hero-img.png";
import React from "react";

function Hero() {
    return (
        <div className="Hero">
            <img src={Heros} alt="hero"/>
        </div>
    );
}

export default Hero;
