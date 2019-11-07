import React, { useState, useEffect } from 'react';
import util from '../util'
import {connect} from 'react-redux'
import {removeFromCart} from '../actions/cartActions'
function Basket({cartItems, handleRemoveFromCart, removeFromCart, addToCart}) {
  return (
    <div className="alert alert-info">
      {cartItems.length === 0? " Basket is empty": <div> You have {cartItems.length} product</div>}
      {cartItems.length>=0 &&
        // <div>
        //   <ul>
        //     {cartItems.map(item => 
        //       <li>
        //         <b>{item.title}</b>
        //         X {item.count}
        //         <button className="btn btn-danger" onClick={(e)=>removeFromCart(cartItems, item)}>X</button>
        //       </li>
        //       )}
        //   </ul>
        //   Total: {util.formatCurrency(cartItems.reduce((a,c) => a + c.price*c.count, 0))}
        // </div>
        <div>
          <table>
          {cartItems.map(item => 
          <tr>
            <td><b>{item.title}</b></td>
            <td>X {item.count} <a href='#' onClick={()=>removeFromCart(cartItems, item)}>remove</a></td>
          </tr>
          )}
          
        </table>
        Total: {util.formatCurrency(cartItems.reduce((a,c) => a + c.price*c.count, 0))}
        </div>
      }
      <button className ="btn btn-primary" onClick={()=>alert("Checkout needs to be implemented")}>Checkout</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  removeFromCart: (cartItems, item) => dispatch(removeFromCart(cartItems, item))
})
const mapStateToProps = state => ({
  cartItems: state.cart.items
})
export default connect(mapStateToProps, mapDispatchToProps)(Basket);
