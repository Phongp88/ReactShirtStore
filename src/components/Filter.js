import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import {filterProducts, sortProducts} from '../actions/productActions'
function Filter({count, sort, handleChangeSort, size, handleChangeSize, filterProducts, products, sortProducts, filteredProducts}) {
  return (
    <div className="row">
        <div className="col-md-4">
            {filteredProducts.length} Products found
        </div>
        <div className="col-md-4">
            <label>
                Order by
                <select className='form-control' value={sort} onChange={(e) => sortProducts(filteredProducts, e.target.value)}>
                    <option value="">Select</option>
                    <option value="lowestprice">lowest to highest</option>
                    <option value="highestprice">highest to lowest</option>
                </select>
            </label>
        </div>
        <div className="col-md-4">
        <label>
                Filter size
                <select className='form-control' value={size} onChange={(e) => filterProducts(products, e.target.value)}>
                    <option value="">ALL</option>
                    <option value="X">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </label>
        </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
    sortProducts: (filteredProducts, sort) => dispatch(sortProducts(filteredProducts, sort)),
    filterProducts: (products, size) => dispatch(filterProducts(products, size))
})
const mapStateToProps = state => ({
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
    size: state.products.size,
    sort: state.products.sort
})
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
