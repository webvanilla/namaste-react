import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import UserContext from '../utilities/UserContext'

const Header = () => {

  const cartItems= useSelector((store)=>store.cart.items)

  const {loggedInUser}=useContext(UserContext);

  return (
    <ul className='header'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
         <Link to="/cart"><li>Cart ({cartItems.length})</li></Link>
         <Link to="/"><li>{loggedInUser}</li></Link>
    </ul>
  )
}

export default Header