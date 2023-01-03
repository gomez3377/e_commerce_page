import React from 'react'
import shoppingCart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import ShoppingCartIcon from './ShoppingCartIcon'
import ShoppingCartModal from './ShoppingCartModal'
const Header = () => {
  const [modalShow, setModalShow] = React.useState(false)


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
        <button onClick={() => setModalShow(!modalShow)} className='shopping-cart-btn'>
        <ShoppingCartIcon fillValue={"hsl(219, 9%, 45%)"} />

        </button>
        <ShoppingCartModal modalShow={modalShow}/>
        <img className='avatar' src={avatar} alt="shopping-cart" />
       </div>

    </header>
  )
}

export default Header