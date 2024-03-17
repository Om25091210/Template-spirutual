import React from "react";
import "./Feature.css";
import Item from "../Feature/Item";
import { useState } from "react";
import { HeadingSection } from "../Common";

const Feature = () => {
  const [items, setitems] = useState([
    {
      heading: "targated discovery",
      Image: "assets/images/icon/1.png",

      des: "Discover feature for teams, players, tournaments, jobs, and coaches based on user specifications.",
    },
    {
      heading: "ranking system",
      Image: "assets/images/icon/2.png",

      des: "A global and local ranking system for all teams, including those not currently on the platform.",
    },
    {
      heading: "tournament automation",
      Image: "assets/images/icon/3.png",

      des: "Enabling organizers to automate the bracket system for streamlined tournament management.",
    },
    {
      heading: "expanded monetization channel",
      Image: "assets/images/icon/4.png",

      des: "Providing teams and players with opportunities to monetize through merchandise sales, NFTs, donations, and participation in daily tournaments.",
    },
    {
      heading: "skill-match played",
      Image: "assets/images/icon/5.png",

      des: "Providing tier-based tournaments for better skill matchmaking to enhance the quality of gameplay and engagement.",
    },
    {
      heading: "faster an secure payouts",
      Image: "assets/images/icon/6.png",

      des: "Simplify registration, making it a more user-friendly experience, and payment security through our escrow system providing assurance for both gamers and organizers.",
    },
  ]);
  const [items2, setitems2] = useState([
    {
      heading: "expanded monetization channel",
      Image: "assets/images/icon/icon-4.svg",

      des: "Providing teams and players with opportunities to monetize through merchandise sales, NFTs, donations, and participation in daily tournaments.",
    },
    {
      heading: "skill-match played",
      Image: "assets/images/icon/icon-5.svg",

      des: "Providing tier-based tournaments for better skill matchmaking to enhance the quality of gameplay and engagement.",
    },
    {
      heading: "faster an secure payouts",
      Image: "assets/images/icon/icon-6.svg",

      des: "Simplify registration, making it a more user-friendly experience, and payment security through our escrow system providing assurance for both gamers and organizers.",
    },
  ]);

  return (
    <div className="feature">
      <div className="rounding-layout">
        <HeadingSection
          type={"key features"}
          title={"Addressing Market Needs"}
        />

        {/* <div className="container-feature"> */}
        {/* <div className="section-title">
                    <span className='feature-key'>KEY FEATURES</span>
                    <h2><b>Access The Future</b></h2> 
                </div> */}

        <div class="row">
          {/* <Item /> */}
          <div className="row-item">
            {items.map((item) => (
              <Item
                heading={item.heading}
                Image={item.Image}
                des={item.des}
              />
            ))}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Feature;
