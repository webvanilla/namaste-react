import React from 'react'
const ItemCard = (props) => {
    const {name,description,price}=props.data;
  return (
    <div className='item-card'>
      <div>
<h2>{name}</h2>
        <p>{description}</p>
      </div>

        <h4>₹ {price/100 || "--"}</h4>
    </div>
  )
}
        

export default ItemCard
