import React from "react";
import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dinner1 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_8702.jpg"
import dinner2 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_9873.jpg"
import dinner3 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_9746.jpeg"
import dinner4 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_0902.jpeg"
import dinner5 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_9957.jpg"
import dinner6 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_9709.jpg"

const SimpleSlider4 = () =>  {
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
          <img src={dinner1} width={1200} height={900} alt="画像1"/>
          <center>ハンバーグ</center>
        </div>
        <div align="center">
          <img src={dinner2} width={1200} height={900} alt="画像2"/>
          <center>スープカレー</center>
        </div>
        <div align="center">
          <img src={dinner3} width={900} height={1200} alt="画像3"/>
          <center>炒飯・餃子</center>
        </div>
        <div align="center">
          <img src={dinner4} width={900} height={1200} alt="画像4"/>
          <center>茄子とトマトのミートグラタン</center>
        </div>
        <div align="center">
          <img src={dinner5} width={900} height={1200} alt="画像5"/>
          <center>アスパラのガスの肉巻き</center>
        </div>
        <div align="center">
          <img src={dinner6} width={900} height={1200} alt="画像6"/>
          <center>豚肉のソテー</center>
        </div>      
      </Slider>
    );
    
}

export default SimpleSlider4;