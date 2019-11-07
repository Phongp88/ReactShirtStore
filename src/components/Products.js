import React, { useEffect } from 'react';
import util from '../util'
import {connect, useSelector} from 'react-redux'
import {fetchProducts} from '../actions/productActions'
import {addToCart} from '../actions/cartActions'
function Products({handleAddToCart, fetchProducts, products, addToCart, cartItems}) {
        useEffect(() => {
            fetchProducts()
        }, [])
        const productItems = products.map(product => (
            <div className="col-md-4 productBox" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`} onClick={()=>addToCart(cartItems, product)}>
                        <p>{product.title}</p>                        
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                    </a>
                    <br/>
                    <b>{util.formatCurrency(product.price)}</b>
                    <br></br>
                    <button className="btn btn-primary" onClick={()=>addToCart(cartItems, product)}>Add to cart</button>
                </div>
            </div>
        )
    )
  return (
    <div className="row">
        {productItems}
    </div>
  );
}
const mapStateToProps = state => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items
})
const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    addToCart: (cartItems, product) => dispatch(addToCart(cartItems, product))
  });
export default connect(mapStateToProps, mapDispatchToProps)(Products);