import React from "react";
import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import omuretu1 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_5772.jpeg"
import omuretu2 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_9862.jpg"
import omuretu3 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_9985.jpg"
import omuretu4 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_0857.jpg"
import omuretu5 from "/Users/nanako/vdslab/react-tutorial-/src/media/IMG_1098.jpg"

const SimpleSlider2 = () =>  {
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
          <img src={omuretu4} width={900} height={900} alt="画像1"/>
          <center>オムライス</center>
        </div>
        <div align="center">
          <img src={omuretu5} width={900} height={900} alt="画像2"/>
          <center>デミグラスソースオムレツ</center>
        </div>
        <div align="center">
          <img src={omuretu2} width={900} height={900} alt="画像3"/>
          <center>アホ</center>
        </div>
        <div align="center">
          <img src={omuretu1} width={900} height={900} alt="画像4"/>
          <center>オヤジ</center>
        </div>
        <div align="center">
          <img src={omuretu3} width={900} height={900} alt="画像4"/>
          <center>きもい</center>
        </div>      
      </Slider>
    );
    
}

export default SimpleSlider2;