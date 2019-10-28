import React, { Component } from 'react';
import util from '../util'
function Products({products, handleAddToCart}) {
        const productItems = products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`}onClick={(e)=>this.props.handleAddToCart(e, product)}>
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                        <p>{product.title}</p>                        
                    </a>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button className="btn btn-primary" onClick={(e)=>handleAddToCart(e, product)}>Add to cart</button>
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

export default Products;
