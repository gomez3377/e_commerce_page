import React from 'react'
import shoppingCart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
const Header = () => {
  return (
    <header>
        <div className='left-header'>
            <h2 className='logo'>sneakers</h2>
        <nav>
            <ul>
                <li><a className='link' href="#">Collections</a></li>
                <li><a className='link' href="#">Men</a></li>
                <li><a className='link' href="#">Women</a></li>
                <li><a className='link' href="#">About</a></li>
                <li><a className='link' href="#">Contact</a></li>
            </ul>
        </nav>
        </div>
       <div className='right-header'>

        <img src={shoppingCart} alt="shopping-cart" />
        <img src={avatar} alt="shopping-cart" />
       </div>

    </header>
  )
}

export default Header