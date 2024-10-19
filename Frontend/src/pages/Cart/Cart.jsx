import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext'; // Correctly import context
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, food_list,getTotalCartAmount } = useContext(StoreContext); // Access values from context
  const navigate = useNavigate()
  console.log("cartItems from context:", cartItems); // Debugging

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Array.isArray(food_list) && food_list.map((item, index) => {
          const quantity = cartItems[item._id] || 0; // Ensure cartItems works
          if (quantity > 0) {
            return (
              <div>
                <div key={item._id} className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{quantity}</p>
                  <p>${item.price * quantity}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/Order')}>Proceed to Checkout</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have promo code, enter it here</p>
            <div className='cart-promo-input'>
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
