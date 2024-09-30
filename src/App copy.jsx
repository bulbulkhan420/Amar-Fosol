import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import OtpVerification from "./components/OtpVerification";
import ResetPassword from "./components/ResetPassword"; // Import new component
import Home from "./Homepage/Home";
import Register from "./Components/Register";
import BuyerProfile from './buyer/BuyerProfile'
import SearchProduct from './buyer/SearchProduct'
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path={`/login/:name`} element={<Login />} />
        <Route path={`/forgot-password/:name`} element={<ForgotPassword />} />
        <Route path={`/otp-verification/:name/:email/:task`} element={<OtpVerification />} />
        <Route path={`/reset-password/:name/:email`} element={<ResetPassword />} />  
        <Route path={`/register/:name`} element={<Register/>}></Route>
        <Route path={`/buyer/profile/:email`} element={<BuyerProfile/>}></Route>
        <Route path={`/buyer/search/:email`} element={<SearchProduct/>}></Route>
      </Routes>
    </Router>
   
    
  );
}

export default App;
