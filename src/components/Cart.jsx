import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utilities/cartSlice'
const Cart = () => {
    const cartItems=useSelector((store)=>store.cart.items)
    
    const dispatch=useDispatch()

    const handleClear=()=>{
        dispatch(clearCart())
    }

  return (
    <div>
      <h2>Cart Items: {cartItems.length}</h2>
     {cartItems.length > 0 ? 
     <div><button onClick={() => handleClear()}>Clear Cart</button>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </div>:<h3>Your cart is empty</h3>
      }
    </div>
  )
}

export default Cart