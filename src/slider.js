import React from "react";
import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import sweets1 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMGP3019.jpg"
import sweets2 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMGP3100.jpg"
import sweets3 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMGP3198.jpg"
import sweets4 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMGP3214.jpg"


 
const SimpleSlider = () =>  {
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
          <img src={sweets1} width={1200} height={900} alt="画像1"/>
          <center>クリスマスケーキ</center>
        </div>
        <div align="center">
          <img src={sweets2} width={1200} height={900} alt="画像2"/>
          <center>デビルズフードケーキ</center>
        </div>
        <div align="center">
          <img src={sweets3} width={1200} height={900}　alt="画像3"/>
          <center>ドゥーブル・フロマージュ</center>
        </div>
        <div align="center">
          <img src={sweets4} width={1200} height={900}　alt="画像4"/>
          <center>フルーツミルクレープ</center>
        </div>      
      </Slider>
    );
    
}





 
export default SimpleSlider;