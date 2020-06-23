import React from "react";
import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sweets5 from "/Users/nanako/vdslab/react-tutorial-/src/media/24CBE432-BBFC-47CF-BACF-F558878FF485.jpg"
import sweets6 from "/Users/nanako/vdslab/react-tutorial-/src/media/B78E1DB3-21D0-47E0-85F0-FA9AF67518DC.jpeg"
import sweets7 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_0550.jpg"
import sweets8 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_9786 2.jpg"
import sweets9 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_1075.jpg"
import sweets10 from "/Users/nanako/vdslab/react-tutorial-/src/media/original.jpg"

const SimpleSlider1 = () =>  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div align="center">
          <img src={sweets6} width={900} height={1200} alt="画像1"/>
          <center>ティラミス</center>
        </div>
        <div align="center">
          <img src={sweets5} width={900} height={1200} alt="画像2"/>
          <center>ヴィクトリアケーキ</center>
        </div>
        <div align="center">
          <img src={sweets7} width={900} height={1200} alt="画像3"/>
          <center>いちごのタルト</center>
        </div>
        <div align="center">
          <img src={sweets8} width={900} height={1200} alt="画像4"/>
          <center>オレオチーズケーキ</center>
        </div>
        <div align="center">
          <img src={sweets9} width={900} height={1200} alt="画像5"/>
          <center>バスクチーズケーキ</center>
        </div>
        <div align="center">
          <img src={sweets10} width={900} height={1200} alt="画像5"/>
          <center>チョコレートバターケーキ</center>
        </div>        
      </Slider>
    );
    
}

export default SimpleSlider1;