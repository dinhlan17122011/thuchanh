import React from 'react'
import Type from '../../components/TypeProduct/Type'
import { WrapperTypeProduct } from './Giaodien'
import Anh1  from '../Home/Img/Screenshot 2024-04-22 211615.png'
import Anh2  from '../Home/Img/Screenshot 2024-03-31 115825.png'
import Anh3  from '../Home/Img/Screenshot 2024-03-22 193525.png'
import Sidle from '../../components/Slder/Sidle'
import CardComponents from '../../components/Card/CardComponents'
import NavbarComponets from '../../components/Navbar/NavbarComponets'


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
      <Sidle arrimg={[Anh1,Anh2,Anh3] }/>
      <CardComponents />
      <NavbarComponets />
    </div>
  )
}

export default home