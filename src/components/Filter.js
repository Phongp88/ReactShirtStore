import React, { useState, useEffect } from 'react';


function Filter({count, sort, handleChangeSort, size, handleChangeSize}) {
  return (
    <div className="row">
        <div className="col-md-4">
            {count} Products found
        </div>
        <div className="col-md-4">
            <label>
                Order by
                <select className='form-control' value={sort} onChange={handleChangeSort}>
                    <option value="">Select</option>
                    <option value="lowestprice">lowest to highest</option>
                    <option value="highestprice">highest to lowest</option>
                </select>
            </label>
        </div>
        <div className="col-md-4">
        <label>
                Filter size
                <select className='form-control' value={size} onChange={handleChangeSize}>
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

export default Filter;
