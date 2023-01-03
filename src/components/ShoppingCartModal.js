import React from 'react'

const ShoppingCartModal = ({modalShow}) => {
if(!modalShow){
    return null
}

  return (
    <div className='modal'>
        <header>
            <h1>Cart</h1>
        </header>
        <hr />
        <div className="modal-body">
            <p>Your Cart is Empty</p>
        </div>
            
        
    </div>
  )
}

export default ShoppingCartModal