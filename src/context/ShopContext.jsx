import React, { createContext, useState } from 'react'
import {AllItems} from '../assets/datas/AllItems.jsx'

export const ShopContext = createContext(null)

const getDefaultCart = () =>  {
  let cart = {};
  for (let i = 1; i < AllItems.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

function ShopContextProvider(props) {
  const [cartItem, setCartItem] = useState(getDefaultCart())
  const [favorites, setFavorites] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null);


  const addToCart = (itemId) => { 
    setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeToCart = (itemId) => { 
    setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = AllItems.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItem[item];
      }
     
    }
    return totalAmount;
    
  };
  
  

  const getItemCount = () => {
    let countItem = 0;
    for(const item in cartItem) {
      if (cartItem[item] > 0) {
        countItem += cartItem[item]
      }
    }
    return countItem
  }

  const addToFavorites = (itemId) => {
    setFavorites((prev) => [...prev, itemId])
  }

  const removeFromFavorites = (itemId) => {
    setFavorites((prev) => prev.filter((id) => id !== itemId))
  }

  const toggleFavorite = (itemId) => {
    if(favorites.includes(itemId)){
      removeFromFavorites(itemId)
    } else {
      addToFavorites(itemId)
    }
  }

  const viewProduct = (itemId) => {
    setSelectedProduct(itemId);
  };

  const contextValue = {
    AllItems,
    addToCart,
    removeToCart,
    cartItem,
    totalCartAmount,
    getItemCount,
    favorites,
    toggleFavorite,
    viewProduct,
    selectedProduct,
  };

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider