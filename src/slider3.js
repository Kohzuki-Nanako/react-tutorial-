import React from "react";
import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bread1 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_3594.jpeg"
import bread2 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_3539.jpeg"
import bread3 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_0775.jpeg"
import bread4 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_9693.jpg"
import bread5 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMGP3111.jpg"
import bread6 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_3712.jpeg"

const SimpleSlider3 = () =>  {
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
          <img src={bread1} width={1200} height={900} alt="画像1"/>
          <center>ハイジの白パン</center>
        </div>
        <div align="center">
          <img src={bread2} width={1200} height={900} alt="画像2"/>
          <center>シナモンロール</center>
        </div>
        <div align="center">
          <img src={bread3} width={1200} height={900} alt="画像3"/>
          <center>さつまいもパン</center>
        </div>
        <div align="center">
          <img src={bread4} width={1200} height={900} alt="画像4"/>
          <center>フランスパン</center>
        </div>
        <div align="center">
          <img src={bread5} width={1200} height={900} alt="画像5"/>
          <center>プロシュート</center>
        </div>
        <div align="center">
          <img src={bread6} width={1200} height={900} alt="画像5"/>
          <center>マルゲリータ</center>
        </div>      
      </Slider>
    );
    
}

export default SimpleSlider3;