import "../style.css";
import React from "react";


const SocialBar = () => (
    <div className="social--container">
        <div className="social--images">
            <img src="/fb.svg" alt="facebook"/>
            <img src="/twitter.svg" alt="twitter"/>
            <img src="/yt.svg" alt="youtube"/>
        </div>
        <div className="social--line"/>
    </div>
);


export default SocialBar;