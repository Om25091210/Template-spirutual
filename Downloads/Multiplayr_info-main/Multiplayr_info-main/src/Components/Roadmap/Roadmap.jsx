import React from "react";
import "./Roadmap.css";
import RoadMapItem from "./RoadMapItem";
import Slider from "react-slick";
import { HeadingSection } from "../Common";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Roadmap = () => {
  let count = 0;

  const [selectedBtn, setSelectedBtn] = useState(0);
  const data = [
    {
      list : ["Tournament","Profile","Dashboard","Closed ALPHA Release"],
      year: "2023",
      tag: "",
    },
    {
      list : ["Tournaments Creation","Discover Teams/players","Game APIs","Ranking"],
      year: "2024",
      tag: "Q1",
    },
    {
      list: ["Open ALPHA Release","Community","Discover Coaches/Jobs/Arenas","Premium Profile","Ladders (Tournament)","Wagers"],
      year: "2024",
      tag: "Q2",
    },
    {
      list : ["BETA Release ","Season Pass","Multiplayr League","Marketplace","Detailed Matches page"],
      year: "2024",
      tag: "Q3",
    },
    {
      list:["Mobile App BETA","Scrim feature","Cwordfunded Tournaments","Masterclasses","Clubs","NFTs"],
      year: "2024",
      tag: "Q4",
    },
    // {
    //   l1: "Indroduce the collaction of NFT for rare artworks and conduct auctions ",
    //   l2: "Launch the staking NFT system",
    //   l3: "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
    //   l4: "build Mave NFT Marketpalce",
    //   year: "2024",
    //   tag: "Q6",
    // },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      
    ]
   
  };
  


  const sliderRef = useRef(null);

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();

    if (selectedBtn <= 0) {
      
      console.log(selectedBtn);
      setSelectedBtn(5);
      // selectedBtn =5;

    } else {
      console.log(selectedBtn);
      setSelectedBtn(selectedBtn - 1);

    }

  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();

    if (selectedBtn >= 5) {
      setSelectedBtn(0);
      console.log(setSelectedBtn)

    } else {
      setSelectedBtn(selectedBtn + 1); 

    }
  };
  return (
    <div className="roadmap-area">
      <div className="roadmap-container">
        <img className="light-img" src="assets/images/banner/banner-shape-2-1.png" />
        <img className="light-img-2" src="assets/images/banner/banner-shape-2-1.png" />
        {/* <div className="section-title">
                    <span className='top-title'>ROADMAP</span>
                    <h2><b>See Whats Waiting For You</b></h2>

                </div> */}

        <HeadingSection type={"ROADMAP"} title={"See Whats Waiting For You"} />

        <div className="roadmap-slides">
          <Slider ref={sliderRef} {...settings}>
            {data.map((item) => (
              <RoadMapItem
                year={item.year}
                tag={item.tag}
                list={item.list}
              />
            ))}

            {/* <RoadMapItem /> */}
          </Slider>
        </div>

        <div className="owl-nav">
          <button className="owl-prev" onClick={goToPrevSlide} >
            <FontAwesomeIcon className="new-icon" icon={faChevronLeft} />
            <p>PAST</p>

          </button>
          <div className="owl-dots">

            <div className="owl-dot">
             

              <span className={`dot-item ${selectedBtn == 0 ? "active" : ""}`}
                onClick={() => setSelectedBtn(0)}></span>
            </div>
            <div className="owl-dot">
              <span className={`dot-item ${selectedBtn == 1 ? "active" : ""}`}
                onClick={() => setSelectedBtn(selectedBtn)}></span>
            </div>
            <div className="owl-dot">
              <span className={`dot-item ${selectedBtn == 2 ? "active" : ""}`}
                onClick={() => setSelectedBtn(selectedBtn)}></span>
            </div>
            <div className="owl-dot">
              <span className={`dot-item ${selectedBtn == 3 ? "active" : ""}`}
                onClick={() => setSelectedBtn(selectedBtn)}></span>

            </div>
            <div className="owl-dot">
              <span className={`dot-item ${selectedBtn == 4 ? "active" : ""}`}
                onClick={() => setSelectedBtn(selectedBtn)}></span>

            </div>
            <div className="owl-dot">
              <span className={`dot-item ${selectedBtn === 5 ? "active" : ""}`}
                onClick={() => setSelectedBtn(selectedBtn)}></span>

            </div>

          </div>

          <button className="owl-next" onClick={goToNextSlide} >
            <p>FUTURE</p>
            <FontAwesomeIcon className="new-icon" icon={faChevronRight} />
          </button>


        </div>

      </div>
    </div>
  );
};

export default Roadmap;

export{Roadmap}
