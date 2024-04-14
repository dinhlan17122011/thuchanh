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
        autoplay:false,
        autoplaySpeed:1000,
      };
  return (
    <Slider settings={settings}>
        {arrImg.map((img)=>{
            return (
                <Image src={img} alt='' freview={false} />
            )
        })}
    </Slider>
  )
}

export default Sidle