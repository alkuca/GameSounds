import "../style.css";
import React from "react";
import Navbar from "../components/Navbar";
import SocialBar from "../components/SocialBar";


const Index = () => (
        <section className="landing--page">
            <Navbar/>
            <SocialBar/>
            <div className="landing--page--section1">
                <div className="section1--left--container">
                    <h1 className="company--name">Company</h1>
                    <h2 className="company--motto">Sounds for your game</h2>
                    <h3 className="short--description">Explore the world of game effects and ambiance with the power of domestos power gel</h3>
                    <button className="explore--button general--button">Explore</button>
                </div>
                <div className="section1--right--container">
                    <img className="controller-img" src="/controller.png" alt="controller"/>
                </div>
            </div>
            <div className="landing--page--section2">

            </div>
        </section>
);


export default Index;