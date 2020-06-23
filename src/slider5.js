import React from "react";
import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import birdie1 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_3730.jpg"
import birdie2 from "//Users/nanako/vdslab/react-tutorial-/src/media/IMG_1824.jpeg"
import birdie3 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_3253.jpeg"
import birdie4 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_3731.jpg"
import birdie5 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_7871.jpeg"
import birdie6 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_8794.jpeg"

const SimpleSlider5 = () =>  {
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
          <img src={birdie1} width={1200} height={900} alt="画像1"/>
          <center>エリザベスカラーをつけるバーディー</center>
        </div>
        <div align="center">
          <img src={birdie2} width={1200} height={900} alt="画像2"/>
          <center>これ以上階段に登れないバーディー</center>
        </div>
        <div align="center">
          <img src={birdie3} width={900} height={1200} alt="画像3"/>
          <center>兄に顔を挟まれるバーディー</center>
        </div>
        <div align="center">
          <img src={birdie4} width={900} height={1200} alt="画像4"/>
          <center>熟睡中・・・</center>
        </div>
        <div align="center">
          <img src={birdie5} width={900} height={1200} alt="画像5"/>
          <center>busaikuバーディー</center>
        </div>
        <div align="center">
          <img src={birdie6} width={900} height={1200} alt="画像6"/>
          <center>もっと美味しいのがいい！と訴えるバーディー笑</center>
        </div>      
      </Slider>
    );
    
}

export default SimpleSlider5;