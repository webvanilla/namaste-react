import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <ul className='header'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
    </ul>
  )
}

export default Header