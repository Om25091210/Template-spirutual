import React, { useState } from "react";

import "./Working.css";
import ImageContainer from "./ImageContainer";
import { HeadingSection } from "../Common";

const Working = () => {
  const [selectedBtn, setSelectedBtn] = useState(0);

  const a = [
    {
      title: "targeted discovery",
      src: "assets/images/screen/discovery.png",

      des: `Multiplayr empowers players to forge their legacy through personalized team and player discovery, while offering organizers hassle-free tournament hosting through automated brackets. Performance-based rankings cover local to global tournaments, providing a comprehensive approach to tracking teams' success in the esports ecosystem.`,
    },

    {
      title: "ranking system",
      src: "assets/images/screen/ranking.png",

      des: `This is developed through our own proprietary algorithm, which categorizes the tournaments according to their tiers and ranks the teams that participate in them.`,
    },

    {
      title: "Tournament Automation",
      src: "assets/images/screen/tournament.png",

      des: `Multiplayr's automation is more robust and user-friendly.`,
    },
  ];

  return (
    <div className="working-layout">
      <div className="container" id="pico">
        <img
          className="overlay-rot-img-b"
          src="/assets/images/banner/banner-shape-4-2.png"
          alt=""
        />

        <img
          className="overlay-rot-img-c"
          src="/assets/images/banner/banner-shape-4-2.png"
          alt=""
        />

        <img
          className="working-overlay-img"
          src="/assets/images/banner/banner-shape-2-2.png"
          alt=""
        />
        {/* <img
          className="working-overlay-img"
          src="/assets/images/banner/banner-shape-2.png"
          alt=""
        /> */}
        <HeadingSection
          type={"CHANGING THE GAME"}
          title={"Tailor-made for everyone"}
        />
        {/* <div className="head"> 
          <h3 className="head_about">how it works</h3>
          <h1 className="head_title">The Ignition Of Metaverse</h1>
        </div> */}

        <ul className="listItems">
          <div className="working-eff">
            <li
              className={`listItem ${selectedBtn === 0 ? "select-focus" : ""}`}
              onClick={() => setSelectedBtn(0)}
            >
              Targeted Discovery
            </li>
            <span className="eff-a"></span>
          </div>

          <div className="working-eff">
            <li
              className={`listItem ${selectedBtn === 1 ? "select-focus" : ""}`}
              onClick={() => setSelectedBtn(1)}
            >
              Ranking System
            </li>
            <span className="eff-a"></span>
          </div>
          <div className="working-eff">
            <li
              className={`listItem ${selectedBtn === 2 ? "select-focus" : ""}`}
              onClick={() => setSelectedBtn(2)}
            >
              Tournament Automation
            </li>
            <span className="eff-a"></span>
          </div>
        </ul>
        <ImageContainer
          src={a[selectedBtn].src}
          title={a[selectedBtn].title}
          description={a[selectedBtn].des}
        />
      </div>
    </div>
  );
};

export default Working;
