// import React from 'react'

// const Order_product_List = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Order_product_List
import React from 'react';

const Order_product_List = () => {
  // Example data for the table
  const orders = [
    {
      product_name: 'Apple iPhone 14',
      quantity: 2,
      price: '$999',
      buyer_name: 'John Doe',
      buyer_phone: '+123 456 7890',
      order_date: '2024-09-15',
    },
    {
      product_name: 'Samsung Galaxy S23',
      quantity: 1,
      price: '$799',
      buyer_name: 'Jane Smith',
      buyer_phone: '+123 987 6543',
      order_date: '2024-09-16',
    },
    {
      product_name: 'Sony Headphones',
      quantity: 3,
      price: '$199',
      buyer_name: 'Alice Johnson',
      buyer_phone: '+123 654 3210',
      order_date: '2024-09-18',
    },
  ];

  return (
    <div style={{ maxWidth: '90%', margin: '50px auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Ordered Product List
      </h2>
      
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid #ddd',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}>
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <th colSpan="3" style={{ padding: '10px', borderRight: '1px solid #ddd' }}>
              Ordered Product Info
            </th>
            <th colSpan="3" style={{ padding: '10px' }}>Buyer Info</th>
          </tr>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={{ padding: '10px', borderRight: '1px solid #ddd' }}>Product Name</th>
            <th style={{ padding: '10px', borderRight: '1px solid #ddd' }}>Quantity</th>
            <th style={{ padding: '10px', borderRight: '1px solid #ddd' }}>Price</th>
            <th style={{ padding: '10px', borderRight: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', borderRight: '1px solid #ddd' }}>Phone</th>
            <th style={{ padding: '10px' }}>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} style={{ textAlign: 'center' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{order.product_name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{order.quantity}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{order.price}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{order.buyer_name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{order.buyer_phone}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{order.order_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order_product_List;
