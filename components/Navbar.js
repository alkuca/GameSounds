import "../style.css";
import React from "react";


const Navbar = () => (
    <div className="navbar">
        <div className="navbar--img">
            <img className="lines--img" src="/topLines.svg" alt="lines"/>
        </div>
        <div className="navbar--links">
            <ul>
                <li><a>Home</a></li>
                <li><a>Services</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    </div>
);


export default Navbar;