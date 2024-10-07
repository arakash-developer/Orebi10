import React, { useState } from 'react'
import Slider from "react-slick";
import bannar01 from '../../../public/bannar/bannar01.png';
import bannar02 from '../../../public/bannar/bannar02.png';
import bannar03 from '../../../public/bannar/bannar03.png';
import bannar04 from '../../../public/bannar/bannar04.png';

const Bannar = () => {

  let [active , setActive] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange:(item,index)=>{
      // console.log(index);
      setActive(index);
    },
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "0px",
          padding: "0px",
          position: "absolute",
          left:"10%",
          top:"50%",
          transform:"translateY(-50%)",
          fade:true,
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className={`w-6 h-8 flex items-center border-r-2  ${i == active ?"text-[#000] border-[#000]":"text-transparent"}`}>
        0{i + 1}
      </div>
    )
  };
  return (
    <>
    <Slider {...settings} className='cursor-pointer'>
      <div>
          <img className="w-full" src={bannar01} alt="" />
      </div>
      <div>
        <img className="w-full" src={bannar02} alt="" />
      </div>
      <div>
        <img className="w-full" src={bannar03} alt="" />
      </div>
      <div>
        <img className="w-full" src={bannar04} alt="" />
      </div>
    </Slider>
    </>
  )
}

export default Bannar