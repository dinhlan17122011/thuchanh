import React from 'react'
import Type from '../../components/TypeProduct/Type'
import { WrapperTypeProduct } from './Giaodien'
import comboOne  from '../Home/Combo1.png'
import comboTwo  from '../Home/Combo2.png'
import Sidle from '../../components/Slder/Sidle'


const home = () => {
  const arr = ['Bành ngọt' , 'Bành gato' , 'Bành mận' ]
  return (
    <div style={{padding:'0 120px'}}>
      <WrapperTypeProduct>
      {arr.map((item)=>{
        return (
          <Type name={item} key={item} />
        )
      })}
      </WrapperTypeProduct>
      <Sidle arrImg={[comboOne,comboTwo] }/>
    </div>
  )
}

export default home