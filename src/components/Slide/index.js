import React, { useState } from "react";
import "./Slide.css";
import Slider from "react-slick";
import astronaut from "../../images/pizza-3.jpg";
import celebrating from "../../images/pexels-acharaporn-kamornboonyarush-1028714.jpg";
import education from "../../images/pexels-mario-alberto-schafer-silveira-7771417.jpg";
import taken from "../../images/sweet2.jpg";
import take from "../../images/pexels-engin-akyurt-3228803.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { SlideBtn, SlideContainer, SlideContent, SlideH1, SlideItems, SlideP } from "./SlideElements";



const images = [
  {
    _id:1,
    img:astronaut,
    description:"Hot Stuff Beef (Bœuf épicé)",
    cuisson:"20 - 45 min",
    button:"Pizza"
  },
  {
    _id:2,
    img:celebrating,
    description:"Madeleine chocalat, crème",
    cuisson:"Disponible maintenant!",
    button:"Dessert"
  },
  {
    _id:3,
    img:education,
    description:"Pain saucisse",
    cuisson:"Disponible maintenant!",
    button:"Croissant"
  },
  {
    _id:4,
    img:taken,
    description:"Sweet",
    cuisson:"Disponible maintenant!",
    button:"Dessert"
  },
  {
    _id:5,
    img:take,
    description:"Humberger",
    cuisson:"15 - 20 min!",
    button:"Fast Food"
  }
];

const Slide = (props) => { 

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
    
      const [imageIndex, setImageIndex] = useState(0);
    
      const settings = {
        infinite: true,
        slidesToShow: 1,
        centerMode: true,  
        lazyLoad: true,
        centerPadding: 0,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };
    
      return (
        <div className="App">
          <Slider {...settings}>
            {images.map((item, idx) => (
              <SlideContainer  key={idx} img={item.img}  className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                  <SlideContent>
                    <SlideItems>
                      <SlideH1> {item.description} </SlideH1>
                      <SlideP> {item.cuisson} </SlideP>
                      <SlideBtn> {item.button} </SlideBtn>
                    </SlideItems>
                  </SlideContent>
              </SlideContainer>

            ))}
          </Slider>
        </div>
      );
    }
    

export default Slide
