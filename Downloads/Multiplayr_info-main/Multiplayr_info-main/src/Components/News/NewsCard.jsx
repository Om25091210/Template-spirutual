import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./NewsCard.module.css"

export const NewsCard = ({ update: { imageSrc, createdAt, description, image_alt } }) => {
  return (
    <div className={styles.container}>
      <img className={styles.newsImage} src={imageSrc} alt={image_alt} />
      <div className={styles.newsContent}>
        <div className={styles.vl}></div>
        <div className={styles.news}>
          <p className={styles.createdAt}>{createdAt}</p>
          <h3>{description}</h3>
          <div className={styles.readMoreContainer}>
            <Link to="/news"><p>READ MORE</p></Link>
          </div>
          
        </div>

      </div>
    </div>
  )
}
