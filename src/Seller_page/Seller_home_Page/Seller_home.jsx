import React from 'react'
import Seller_Header from './Seller_Header'
import Seller_Footer from './Seller_Footer'
import Seller_Profile from './Seller_profile'
import Order_product_List from './Order_product_List'

const Seller_home = () => {
  return (
    <div>
      <Seller_Header/>
      <Seller_Profile/>
      <Order_product_List/>
      <Seller_Footer/>
    </div>
  )
}

export default Seller_home
