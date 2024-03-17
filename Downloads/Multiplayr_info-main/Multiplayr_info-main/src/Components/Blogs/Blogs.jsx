// import React from "react";
// import { Link } from "react-router-dom";
import "./Blogs.css"; // Import your CSS file
import { News } from "..";
import { BlogContent } from "../Common";



function Blogs() {
  return (
    <div className="blog-layout">
      <div className="relative h-full w-full max-h-fit max-w-fit overflow-hidden ">
        {/* Background Image */}
        <img
          className="background-img-blog"
          src="/assets/images/banner/banner-bg-1-2.jpg"
          alt=""
        />
 
        <div className="overlay-div-blog">

            {/* Overlay Image */}
            <img
              className="overlay-img-blog"
              src="/assets/images/banner/banner-shape-1-1.png"
              alt=""
            />
           
            <img
              className="overlay-rot-img-blog"
              src="/assets/images/banner/banner-shape-4-1.png"
              alt=""
            />
            <div className="wrapper-blog">
              <h1 className=""><span className="span-blog">Multiplayr</span>/BLOGS</h1>
            </div>

          </div>
        
        {/* <News/> */}
        <div className="blog-content">

        
        </div>

        </div>
        <BlogContent/>
      </div>
      

  );
}

export default Blogs;
