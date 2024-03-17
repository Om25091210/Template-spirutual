import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import your CSS file
import { HeadingSection } from "../Common";

function Home() {
  return (
    <div className="home-layout">
      <div className="relative h-full w-full max-h-fit max-w-fit overflow-hidden ">
        {/* Background Image */}
        <img
          className="background-img"
          src="/assets/images/banner/banner-bg-1-2.jpg"
          alt=""
        />
 
        <div className="overlay-div">
          <div className="inner-div-left">
            {/* Overlay Image */} 
            <img
              className="overlay-img"
              src="/assets/images/banner/banner-shape-1-1.png"
              alt=""
            />
           
            <img
              className="overlay-rot-img"
              src="/assets/images/banner/banner-shape-4-1.png"
              alt=""
            />
            <div className="wrapper">
              <h1 className="">FORGE YOUR LEGACY</h1>
              <p className="leading-tight text-wrap">
              Multiplayr empowers players to forge their legacy through personalized team and player discovery, while offering organizers hassle-free tournament hosting through automated brackets. Performance-based rankings covers local to global tournament.
              
             
             <p> Our mission is clear to enable gamers to build a career in esports.</p>
             

              </p>
            </div>
            <div className="mt-12 md:mt-2 sm:mt-1 ">
              <Link
                to="https://nice-glacier-0f799c700.4.azurestaticapps.net/login"
                className="bg-gray-50 text-black font-heading  font-semibold rounded-lg text-base px-7 lg:px-7 py-2 lg:py-2 mr-2  focus:outline-none "
              >
                Log in
              </Link>

              <Link
                  to="https://litepaper.multiplayr.gg/quick-introduction/legal-disclaimer"
                className="sp-btn2 text-black font-heading focus:ring-4 font-semibold rounded-lg text-base px-7 lg:px-7 py-2 lg:py-2 mr-2 focus:outline-none z-50"
              >
                Whitepaper
              </Link>
            </div>
          </div>

          <div className="inner-div-right">
            <div className="banner-img-div">
              <img
                className="img-ani-scale md:h-14 sm:h-10"
                src="/assets/images/banner/multiplayr-character.png"
                alt=""
              />

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
