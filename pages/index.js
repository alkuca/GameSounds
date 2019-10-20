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
                    <h3 className="short--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac tincidunt ipsum sit</h3>
                    <button className="explore--button general--button">Explore</button>
                </div>
                <div className="section1--right--container">
                    <img className="controller-img" src="/controller.png" alt="controller"/>
                </div>
            </div>
            <div className="landing--page--section2">
                <h1 className="section2--title">What we offer</h1>
                <div className="section2--content">
                    <div className="section--box box1">
                        <h2>Ambiance Soundtracks</h2>
                        <div className="title--line"/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
                            tincidunt ipsum sit
                        </p>
                        <img className="section--box--img" src="/speaker.png" alt="speaker"/>
                    </div>
                    <div className="section--box box2">
                        <h2>Unique Sound Effects</h2>
                        <div className="title--line"/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
                            tincidunt ipsum sit
                        </p>
                        <img className="section--box--img" src="/wave.png" alt="wawe"/>
                    </div>
                    <div className="section--box box3">
                        <h2>High Quality Sounds</h2>
                        <div className="title--line"/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
                            tincidunt ipsum sit
                        </p>
                        <img className="section--box--img" src="/disc.png" alt="disc"/>
                    </div>
                </div>
            </div>
            <div className="landing--page--section3">
                <div className="section3--content">
                    <div className="section3--left--container">
                        <img className="section3--image" src="/equalizer.png" alt="equalize"/>
                    </div>
                    <div className="section3--right--container">
                        <h1>Music</h1>
                        <h1 className="title--color">For your game</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
                            tincidunt ipsum, sit amet fermentum orci. Interdum et malesuada fames
                            ac ante ipsum primis in faucibus. Nullam rhoncus egestas turpis sit
                            amet auctor. Aliquam convallis lacinia tempor. Fusce commodo iaculis
                            suscipit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
);


export default Index;