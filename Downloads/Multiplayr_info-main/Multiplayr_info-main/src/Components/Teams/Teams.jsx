import React from "react";
import members from "../../Data/Team.json";
import styles from "./Teams.module.css";
import { TeamCard } from "./TeamCard";
import { HeadingSection } from "../Common";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamItem from "./TeamItem";

const Teams = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.mainContainer}>
      <section className={styles.Container}>
      {/* <div className={styles.head}>
        <h3 className={styles.head_about}>team members</h3>
        <h1 className={styles.head_title}>Meet The Team Behind The Scene </h1>
      </div> */}
      <HeadingSection
        type={"team members"}
        title={"Meet The Team Behind The Scene"}
      />

      <div className={styles.teams}>
        <Slider {...settings} className={styles.sliderContainer}>
          {members.map((member, id, gaurav) => {
            if (id % 2 === 0) {
              return (
                <TeamItem key={id} member={member} gaurav={gaurav} id={id} />
              );
            }
          })}
        </Slider>
      </div>
    </section>
    </div>
  );
};

export default Teams;
