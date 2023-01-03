import React from "react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const ProductInfo = () => {
  const [count, setCount] = React.useState(0)

  function subtractProductAmount() {
    
    count > 0 && setCount(prevCount => prevCount -1)
  }

  function addProductAmount() {
    count < 99 && setCount(prevCount => prevCount +1)
  }

  return (
    <section className="product-info">
      <h3 className="company-name">Sneaker Company</h3>
      <h1 className="product-name">Fall Limited Edition Sneakers</h1>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-and-discount">
      <h2 className="price">$125.00</h2>
      <h3 className="discount">50%</h3>

      </div>
      <h4 className="original-price">$250.00</h4>
      <div className="quanity-and-add-to-cart-container">

      <div className="quantity-container">
          <button onClick={subtractProductAmount} className="minus-btn">-</button>
          <p className="product-quanity">{count}</p>
          <button onClick={addProductAmount} className="add-btn">+</button>
      </div>
      <button className="add-to-cart-btn"> <ShoppingCartIcon 
      fillValue={"white"}/> 
      <p> Add to Cart</p>
      </button>
      </div>
    </section>
  );
};

export default ProductInfo;
