import React, { useState, useEffect } from 'react';
import util from '../util'
function Basket({cartItems, handleRemoveFromCart}) {
  return (
    <div className="alert alert-info">
      {cartItems.length === 0? " Basket is empty": <div> You have {cartItems.length} product</div>}
      {cartItems.length>=0 &&
        <div>
          <ul>
            {cartItems.map(item => 
              <li>
                <b>{item.title}</b>
                X {item.count}
                <button className="btn btn-danger" onClick={(e)=>handleRemoveFromCart(e, item)}>X</button>
              </li>
              )}
          </ul>
          Total: {util.formatCurrency(cartItems.reduce((a,c) => a + c.price*c.count, 0))}
        </div>
      }
    </div>
  );
}

export default Basket;
