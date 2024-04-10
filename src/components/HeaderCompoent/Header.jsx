import React from 'react'
import {UserOutlined,CaretDownOutlined} from '@ant-design/icons';
import {Row,Col,Input, Space} from 'antd'
import { WrappreHeader, WrappreHeaderAccout, WrappreText } from './Giaodien'
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

const Header = () => {
  return (
    <WrappreHeader>
    <Col span={6}>
      <WrappreText>BanhNgot.com</WrappreText>
    </Col>
    <Col span={10}>
      <Space>
      <Search placeholder="input search text" 
      allowClear 
      onSearch={onSearch} 
      style={{ width: 400 }} />
      </Space>
    </Col>
    <Col span={6}>
    <UserOutlined style={{fontSize:'40px'}} />
    <WrappreHeaderAccout>
      <spam>Đăng nhập/Đăng Kí</spam>
      <div>
        <spam>Tài Khoản</spam>
        <CaretDownOutlined />
      </div>
    </WrappreHeaderAccout>
    </Col>
  </WrappreHeader>

  )
}

export default Header