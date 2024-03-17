import React from "react";
import { Link } from "react-router-dom";
import styles from "./TeamCard.module.css";
import "font-awesome/css/font-awesome.min.css";

const TeamItem = ({ member: { image, name, position, linkedin }, id, gaurav }) => {
  return (
    <div className={styles.TeamItem}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={gaurav[id].image} alt="projecttitle" />
        </div>
        <h3 className={styles.title}>{gaurav[id].name}</h3>
        <p className={styles.description}>{gaurav[id].position}</p>
        <div className={styles.social}>
         <a href={gaurav[id].linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedin}> 
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={gaurav[id + 1].image} alt="projecttitle" />
        </div>
        <h3 className={styles.title}>{gaurav[id + 1].name}</h3>
        <p className={styles.description}>{gaurav[id + 1].position}</p>
        <div className={styles.social}>
          {/* <Link to={"#"}>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </Link>
          <Link to={"#"}>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </Link>
          <Link to={"#"}>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </Link> */}
          <a href={gaurav[id+1].linkedin} target="_blank" rel="noopener noreferrer"> 
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
