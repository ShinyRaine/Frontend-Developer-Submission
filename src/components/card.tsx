import React from 'react'
import { ItemData } from '../type/item'
import './card.css'


interface propsType extends React.DOMAttributes<HTMLDivElement>{
  data: ItemData
}

const Card = (props: propsType) => {
  const {data, ...domProps} = props

  return (
    <div className='card' {...domProps}>
      <div className='image-container'>
        <img src={data.image} />
      </div>
      <div className='name'>{data.name}</div>
      <div className='price'>
        {data.price}
        <span className='price-symbol'>{data.symbol}</span>
      </div>
    </div>
  )
}

export default Card
