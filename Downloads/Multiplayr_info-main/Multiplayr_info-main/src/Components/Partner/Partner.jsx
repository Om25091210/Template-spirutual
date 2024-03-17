import React from "react";
import Partners from "../../Data/Partner.json";
import styles from "./Partner.module.css";
import { HeadingSection } from "../Common";

export const Partner = () => {
  return (
    <div className={styles.container}>
      <HeadingSection
        type={"our partners"}
        title={"Out Partners & Investors"}
      />
      <div className={styles.content}>
        <div className={styles.partners}>
          {Partners.map((partner, index) => {
            if (index==3){

            }else{
            // Move the key attribute inside the map function
            return (
              <div key={index} className={styles.partner}>
                <img
                  src={partner.image}
                  className={""}
                  alt={`Partner ${index}`}
                />
              </div>
            );}
          })}
        </div>
      </div>
    </div>
  );
};
