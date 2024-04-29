import { Col, Image, InputNumber, Row } from 'antd'
import React from 'react'
import Anh1 from './img/1.jpg'
import { WrapperStyleImageSmall , WrapperStyleColImage, WrapperStyleNameProduct, WrapperPriceProduct, WrapperStyleTextSell, WrapperPriceTextProduct, WrapperAddressProduct, WrapperQualityProduct, WrapperInputNumber } from './style'
import { StarFilled ,PlusOutlined , MinusOutlined } from '@ant-design/icons';
import ButtonComponent from '../ButtonNetx/ButtonCo';
const CTSanPham = () => {
    const thaydoi=()=>{}
  return (
    <div style={{padding:'0 120px'}}>

        <h5>
            Trang Chủ
        </h5>
        <Row>
        <WrapperStyleColImage span={10}>
            <Image src={Anh1} alt='Anh Banh' preview="false" />
            
                <Row>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={Anh1} alt='Anh Banh' preview="false" />
                    </WrapperStyleColImage >
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={Anh1} alt='Anh Banh' preview="false" />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={Anh1} alt='Anh Banh' preview="false" />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={Anh1} alt='Anh Banh' preview="false" />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={Anh1} alt='Anh Banh' preview="false" />
                    </WrapperStyleColImage>
                </Row>
            
        </WrapperStyleColImage>

        <Col span={16}>
            <WrapperStyleNameProduct>
            Bánh Sinh Nhật Socola Size Nhỏ
            </WrapperStyleNameProduct>
            <div>
            <StarFilled  style={{color:'rgb(253,216,54)',fontSize:'12px'}}/>
            <StarFilled  style={{color:'rgb(253,216,54)',fontSize:'12px'}}/>
            <StarFilled  style={{color:'rgb(253,216,54)',fontSize:'12px'}}/>
            <StarFilled  style={{color:'rgb(253,216,54)',fontSize:'12px'}}/>
            <WrapperStyleTextSell>| Số Lượng Một Ngày : 100+</WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
                <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
                <span>Giao đến </span>
                <span className='address'>46 La Nội, Dương Nội, Hà Đông, Hà Nội</span>
                <span className='change-address'>Đổi địa chỉ</span>
            </WrapperAddressProduct>
            <WrapperQualityProduct>
                <div>Số Lượng</div>
                <div>
                    <PlusOutlined style={{color:'#000',fontSize:'20px'}} />
                    <WrapperInputNumber min={1} max={10} defaultValue={3} onChange={thaydoi} />
                    <MinusOutlined style={{color:'#000' , fontSize:'20px'}} />
                </div>
            </WrapperQualityProduct>
            <div style={{display:'flex' , alignContent:'center', gap:'12px'}}>
                <ButtonComponent
                bordered={false}
                size={40}
                styleButton={{
                    background:'rgb(255,57,69)',
                    height:'48px',
                    with:'220px',
                    border:'none',
                    borderRadius:'4px'
                }}
                textbutton={'Mua'}
                styleTextButton={{color:'#fff' , fontSize:'15px', fontWeight:'700'}}
                />
                <ButtonComponent
                size={40}
                styleButton={{
                    background:'#fff',
                    height:'48px',
                    with:'220px',
                    border:'1px solid rgb(13,92,182)',
                    borderRadius:'4px'
                }}
                textbutton={'Thêm vào giỏ hàng'}
                styleTextButton={{color:'rgb(13,92,182)' , fontSize:'15px'}}
                />
            </div>
        </Col>
        </Row>
    </div>
    

  )
}

export default CTSanPham