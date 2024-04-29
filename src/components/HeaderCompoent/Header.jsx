import React from 'react'
import ButttonInputSearch from '../ButtonInput/ButttonInputSearch'
import {UserOutlined,CaretDownOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import {Row,Col,Input, Space, Badge} from 'antd'
import { WrappreHeader, WrappreHeaderAccout, WrappreHeaderSporet, WrappreText } from './Giaodien'
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

const Header = () => {
  return (
    <WrappreHeader>
    <Col span={6}>
      <WrappreText>BanhNgot.com</WrappreText>
    </Col>
    <Col span={10}>
    <ButttonInputSearch
              size="large"
              bordered={false}
              textbutton="Tìm kiếm"
              placeholder="Tìm kiếm bành"
              onChange={onSearch}
              backgroundColorButton="#5a20c1"
            />
    </Col>
    <Col span={6} style={{display:'flex' }}>
      <WrappreHeaderAccout>
        <UserOutlined style={{fontSize:'40px'}} />
        <div>
          <spam>Đăng nhập/Đăng Kí</spam>
          <div>
            <spam>Tài Khoản</spam>
            <CaretDownOutlined />
          </div>
        </div>
      </WrappreHeaderAccout>
      <WrappreHeaderSporet>
        <Badge count={4} size='small' >
        <ShoppingCartOutlined style={{fontSize:'30px' , color:'#fff',gap:'10px'}} />
        </Badge>
        <div>
          <samp>Giỏ Hành</samp>
        </div>
      </WrappreHeaderSporet>
    </Col>
  </WrappreHeader>

  )
}

export default Header