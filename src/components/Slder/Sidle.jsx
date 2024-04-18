import React from 'react'
import Slider from "react-slick";
import { Image } from 'antd'
const Sidle = ({arrImg}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
      };
  return (
    <Slider {...settings}>
        {arrImg.map((img)=>{
            return (
                <Image src={img} alt='' freview={true} style={{width:'100%'}} />
            )
        })}
    </Slider>
  )
}

export default Sidle