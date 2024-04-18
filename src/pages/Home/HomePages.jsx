import React from 'react'
import Type from '../../components/TypeProduct/Type'
import { WrapperTypeProduct } from './Giaodien'
import comboOne  from '../Home/Img/Combo1.png'
import comboTwo  from '../Home/Img/Combo2.png'
import Sidle from '../../components/Slder/Sidle'


const home = () => {
  const arr = ['Bành ngọt' , 'Bành gato' , 'Bành mận' ]
  return (
    <div style={{padding:'0 100px'}}>
      <WrapperTypeProduct>
      {arr.map((item)=>{
        return (
          <Type name={item} key={item} />
        )
      })}
      </WrapperTypeProduct>
      <Sidle arrimg={[comboOne,comboTwo] }/>
    </div>
  )
}

export default home