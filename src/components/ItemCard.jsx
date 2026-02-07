import React from 'react'   
import { useDispatch } from 'react-redux';
import { addItem } from '../utilities/cartSlice';

const ItemCard = (props) => {
    const {name,description,price}=props.data;
    const dispatch=useDispatch();

    const handleAdd=(itemName)=>{
      dispatch(addItem(itemName));
    }
  return (
    <div className='item-card'>
      <div>
<h2>{name}</h2>
        <p>{description}</p>
      </div>
<div>
  <h4>₹ {price/100 || "--"}</h4>
  <button className="add-to-cart-btn" onClick={()=>handleAdd(name)}>Add to Cart</button>
</div>
        
    </div>
  )
}
        

export default ItemCard
