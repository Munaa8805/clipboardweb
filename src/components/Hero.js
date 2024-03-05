import React from "react";
import logoImage from "../assets/logo.svg"
import Buttons from "./Buttons";
const Hero = () => {

    const btns = [
        {id:1, name:"Download for iOS"},
        {id:2, name:"Download for Mac"}
    ]
  return (
    <section id="hero">
      <div className="section-container mb-40 px-10 pt-16">
        
        <img className="mx-auto my-16  h-28 w-28" src={logoImage} alt="logo"/>
        <h3 >A history of everything you copy</h3>

        <p className="p mb-10 text-2xl text-grayishBlue">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your device</p>
        <Buttons />
      </div>
    </section>
  );
};

export default Hero;
