import React from "react";
import styles from "./News.module.css";
import updates from "../../Data/News.json";
import { NewsCard } from "./NewsCard";
import { HeadingSection } from "../Common"; 

const News = () => {
  return (
    <section className={styles.container}>
      {/* <div className={styles.head}>
        <h3 className={styles.head_about}>articles</h3>
        <h1 className={styles.head_title}>Updated News & Articles </h1>
      </div> */}

      <HeadingSection type={"articles"} title={"Updated News & Articles"} />

      <div className={styles.newsItems}>
        {updates.map((update, id) => {
          return <NewsCard key={id} update={update} />;
        })}
      </div>
    </section>
  );
};

export default News;
