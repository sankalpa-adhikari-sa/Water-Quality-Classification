import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div  className="CardWrapper">
    <span className="Card">
      {props.data}
    </span>
    <span className='CardHeader'>{props.header}</span>
  </div>
  )
}

export default Card