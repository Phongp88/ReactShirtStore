import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './components/Products'
import Filter from './components/Filter'
import Basket from './components/Basket'
import {Provider} from 'react-redux'
import store from './store'
function App() {
  // useState is the new hooks in reactjs functional components
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sort, setSort] = useState('')
  const [size, setSize] = useState('')
  const [cartItems, setCartItems] = useState([])
  // Use Effect is used for componentDidMount()
  useEffect(() => {
    if(localStorage.getItem('cartItems')) {
      setCartItems(JSON.parse(localStorage.getItem('cartItems')))
    }
    // fetch("http://localhost:8000/products").then(res =>res.json())
    // .then(function(data){
    //   setProducts(data)
    //   setFilteredProducts(data)
    // })
  }, []);
  // used this to have asynchronus changes to setting sort
  // useEffect(()=>{
  //   listProducts()
  // }, [sort])
  // useEffect(()=>{
  //   listProducts()
  // }, [size])
  // function called when price needs to be changed
  // function handleChangeSort(e) {
  //   setSort(e.target.value)
  // }
  // function handleChangeSize(e) {
  //   setSize(e.target.value)
  // }
  // function listProducts () {
  //   // creates new array in order to update the state
  //   const temp = [...products]
  //   if (sort !== '') {
  //     temp.sort((a, b) =>
  //       (sort === 'lowestprice'
  //         ? ((a.price > b.price) ? 1 : -1)
  //         : ((a.price < b.price) ? 1 : -1)))
  //   } else {
  //     // if value is empty, default sort by id
  //     temp.sort((a, b) => (a.id > b.id));
  //   }
  //   if (size !== '') {
  //     // filters the array by size
  //     setFilteredProducts(temp.filter(a=> a.availableSizes.indexOf(size) >= 0))
  //     return
  //   }
  //   setFilteredProducts(temp)
  // }
  // Handles adding items to cart
  // function handleAddToCart(e, product) {
  //   const cart = [...cartItems]
  //   let productAlreadyExist = false;
  //   cart.forEach(item =>{
  //     if(item.id === product.id) {
  //       productAlreadyExist = true
  //       item.count++
  //     }
  //   })
  //   // if the item doesn't exist, add it
  //   if(!productAlreadyExist) {
  //     cart.push({...product, count:1})
  //   }
  //   // Stringify object to JSON String to save in local storage
  //   localStorage.setItem("cartItems", JSON.stringify(cart))
  //   setCartItems(cart)
  // }
  // function handleRemoveFromCart(e, item) {
  //   let cart = [...cartItems]
  //   // Removes any product that does equal to the item
  //   cart = cart.filter(elm => elm.id !== item.id);
  //   localStorage.setItem('cartItems', cart)
  //   setCartItems(cart)

  // }
  return (
    <Provider store={store}>
      <div className="Container">
        <h1>React Example Shopping Cart</h1>
        <hr/>
        <div className="row">
          <div className="col-md-8">
            <Filter/>
            <hr/>
            <Products/>
          </div>
          <div className="col-md-4">
            <Basket />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
