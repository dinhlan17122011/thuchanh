import { Col, Row , Pagination } from 'antd'
import React , { Fragment } from 'react'
import NavbarComponets from '../../components/Navbar/NavbarComponets'
import CardComponents from '../../components/Card/CardComponents'
import { WrapperProducts } from './style'

const sampham = () => {
    const onthaydoi = () => {

    }
  return (
    <div style={{padding:'0 120px'}}>
        <Row span={4}>
            <WrapperProducts >
            <NavbarComponets />
            </WrapperProducts>
            <Col span={20} >
            <CardComponents  />
            </Col>
        </Row>
        <Pagination defaultCurrent={2} total={20} onChange={onthaydoi} />
    </div>

  )
}

export default sampham