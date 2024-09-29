import React,{ useState } from 'react'
import './App.css'
import Home from './Homepage/Home'
import Footer from './Homepage/component/Footer'
import Homehead from './Homepage/component/Homehead'
import Product_form from './Seller_page/sellerPage_component/Product_form'
import ProductCard from './Seller_page/sellerPage_component/Product_card'
import Seller_home from './Seller_page/Seller_home_Page/Seller_home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product_list from './Seller_page/Seller_home_Page/Product_list'
// import Homehead from './Homepage/component/Homehead.jsx'

const App=()=> {

  return (
    <>
    {/* {<RegistrationPage/>} */}
    {/* <Home/> */}
    {/* <Footer/> */}
    {/* <Homehead/> */}
    {/* <Product_form/> */}
    {/* <ProductCard/> */}
    {/* <Seller_home/> */}
    <Router>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/homePage" element={<Home/>}></Route>
      <Route index element={<Home/>}></Route>
      <Route path="/seller_home" element={<Seller_home/>}></Route>
      {/* <Route path="*" element={<NoPage />}></Route> */}
      <Route path="/product_form" element={<Product_form/>}></Route>
      <Route path="/productList" element={<Product_list/>}></Route>
     </Routes>
     </Router>
    </>
  );
};

export default App;
