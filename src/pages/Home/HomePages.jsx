import React from 'react'
import Type from '../../components/TypeProduct/Type'
import { WrapperButtonMore, WrapperTypeProduct } from './Giaodien'
import Anh1  from '../Home/Img/Screenshot 2024-04-22 211615.png'
import Anh2  from '../Home/Img/Screenshot 2024-03-31 115825.png'
import Anh3  from '../Home/Img/Screenshot 2024-03-22 193525.png'
import Sidle from '../../components/Slder/Sidle'
import CardComponents from '../../components/Card/CardComponents'
import NavbarComponets from '../../components/Navbar/NavbarComponets'
import Buttton from '../../components/ButtonNetx/ButtonCo'

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
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <WrapperButtonMore textbutton="Xem them" type="outline" styleButton={{border: `1px solid rgb(11,116,229)`, color:'rgb(11,116,229' , with:'240px' , height:'px' , borderRadius:'4px'}} />
      </div>
    </div>
  )
}

export default home