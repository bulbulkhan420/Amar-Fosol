import React from 'react';

const Seller_Profile = () => {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '50px auto', 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      borderRadius: '10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: '#333', 
        marginBottom: '20px', 
        borderBottom: '2px solid #4CAF50', 
        paddingBottom: '10px' 
      }}>Seller Profile</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ marginBottom: '5px', color: '#555' }}>Name:</h3>
        <p style={{ fontSize: '18px', color: '#333' }}>John Doe</p>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ marginBottom: '5px', color: '#555' }}>Email:</h3>
        <p style={{ fontSize: '18px', color: '#333' }}>johndoe@example.com</p>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ marginBottom: '5px', color: '#555' }}>Phone number:</h3>
        <p style={{ fontSize: '18px', color: '#333' }}>+123 456 7890</p>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '5px', color: '#555' }}>Address:</h3>
        <p style={{ fontSize: '18px', color: '#333' }}>123 Main Street, Cityville, USA</p>
      </div>
    </div>
  );
};

export default Seller_Profile;
