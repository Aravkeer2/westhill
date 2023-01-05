import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <NewArrivals />
      <Discount />
   </>
  )
}

export default Pages
