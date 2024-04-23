"use strict";
import { Image } from 'antd';
import React from 'react'
import { WrapperSliderStyle } from './style';
const Slider = ({ arrimg }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <WrapperSliderStyle {...settings}>
            {arrimg.map((image) => {
                return (
                    <Image key={image} src={image} alt="slider" preview={false} style={{fontSize:'100%'}} />
                )
            })}
        </WrapperSliderStyle>
    )
}

export default Slider