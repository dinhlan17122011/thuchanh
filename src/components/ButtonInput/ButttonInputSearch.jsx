import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button , Input } from 'antd'
// import InputComponent from '../InputComponent/InputComponent'
// import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButttonInputSearch = (props) => {
  const {
    size, placeholder, textbutton,
    bordered, backgroundColorInput = '#fff',
    backgroundColorButton = 'rgb(13, 92, 182)',
    colorButton = '#fff'
  } = props

  return (
    <div style={{ display: 'flex', }}>
      <Input 
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput }}
        {...props}
      />
      <Button
        size={size}
        styleButton={{ background: backgroundColorButton, border: !bordered && 'none' }}
        icon={<SearchOutlined color={colorButton} style={{ color: '#000' }} />}
        styleTextButton={{ color: colorButton }}
        >
        {textbutton}

      </Button>
    </div>
  )
}

export default ButttonInputSearch