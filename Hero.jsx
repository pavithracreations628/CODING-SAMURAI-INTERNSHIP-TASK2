import React from 'react'
import './Hero.css'
import main from '../Assets/main.jpg';
import rightarrow from '../Assets/right-arrow.png';
import wave from '../Assets/wave.png';

function Hero() {
    return (
        < div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
            
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={wave} alt=""/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        
            <div className="hero-latest-btn">
                <h1>Latest Collections</h1>
                <img className="img" src={rightarrow} alt=""/>
            </div>
            </div>
            <div className="hero-right">
                <img src={main} alt="" />
            </div>

        </div>
    );
}

export default Hero
