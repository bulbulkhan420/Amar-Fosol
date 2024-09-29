import React from 'react'
import ProductCard from '../sellerPage_component/Product_card'
import Seller_Header from './Seller_Header';
import Seller_Footer from './Seller_Footer';

const Product_list = () => {
    const formData={
        productName:'Rice',
        productImage: '',
        productPrice: '40',
        productQuantity:'50'
      };
  return (
    <>
   <Seller_Header/>
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',  // This will wrap the cards into a new row when necessary
        justifyContent:'flex-start',// Optional: Adjust space between cards
        padding: '20px',
         // Adjust the max width of the container as needed
        margin: '0 auto',   // Center the container horizontally
      }}>
        {/* backend thake product ar data asbe o card component build hobe o display hobe */}
        <ProductCard formData={formData}/>
        <ProductCard formData={formData}/>
        <ProductCard formData={formData}/>
        <ProductCard formData={formData}/>
        <ProductCard formData={formData}/>
        <ProductCard formData={formData}/>
        <ProductCard formData={formData}/>
        <ProductCard formData={formData}/>
        <ProductCard formData={formData}/>
        <ProductCard formData={formData}/>   
    </div>
    <Seller_Footer/>
    </>
  )
}

export default Product_list
