import React from 'react'
import {combo1} from './Combo1.png'
import {combo2} from './Combo2.png'
import Type from '../../components/TypeProduct/Type'
import { WrapperTypeProduct } from './Giaodien'
import Slick from "slick-carousel/slick/slick.css";
import SlickCss from "slick-carousel/slick/slick-theme.css";


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
      <Slick arrImages={[combo1,combo2]}/>
    </div>
  )
}

export default home