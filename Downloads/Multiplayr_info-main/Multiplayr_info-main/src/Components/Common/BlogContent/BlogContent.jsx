import React from 'react';
import HeadingSection from '../HeadingSection/HeadingSection';
import Blogs from "../../../Data/Blog.json";
import styles from "./BlogContent.module.css";
import { Link } from 'react-router-dom';

const BlogContent = () => {
  return (
    <div className={styles.container}>
       <img className={styles.light_img} src="assets/images/banner/banner-shape-2-1.png" />
        <img className={styles.light_img_2} src="assets/images/banner/banner-shape-2-1.png" />
      {Blogs.map((blog, index) => (
        <div key={index} className={styles.content}>
          <h3 className={styles.heading}>{blog.blog.heading}</h3>

          <p className={styles.description}>{blog.blog.description}</p>


          <div className={styles.imageContainer}>
              <img src={blog.imageSrc} alt={`Blog ${index + 1}`} />
          </div>
          
        
          
          <ul className={styles.listItems}>
            {blog.points.map((point, pointIndex) => (
              <li key={pointIndex} className={styles.listItem}>
                <h3>{point.heading}: </h3> 
                <p>{point.description}</p>
              </li>
            ))}
          </ul>

          {/* <div className={styles.readMore}>
          <Link to="/news"><p>VIEW ALL BLOGS</p></Link>
          </div> */}
        </div>

      ))}
    </div>
  );
};

export default BlogContent;
