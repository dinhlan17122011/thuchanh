import React from 'react'
import { Card } from 'antd';
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './styte';
import logo  from '../../pages/Home/Img/TTVN.png'
import { StarFilled } from '@ant-design/icons'
const { Meta } = Card;
const CardComponents = () => {
  return (
    <div>
        <WrapperCardStyle
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
    <img src={logo} style={{width:'68px',position:'absolute' , top:0,left:0}} />
    <StyleNameProduct>Bành Gato Hoàng Gia</StyleNameProduct>
    <WrapperReportText>
        <samp>
            <samp>4.87</samp><StarFilled style={{color:'yellow'}} />
        </samp>
        <samp>| Số Lượng 100+</samp>
    </WrapperReportText>
    <WrapperPriceText>
        <samp>200.000 VND</samp>
        <WrapperDiscountText> <samp>-25%</samp></WrapperDiscountText>
    </WrapperPriceText>
    </WrapperCardStyle>
    </div>
  )
}

export default CardComponents