import React from 'react';
import { Link } from 'react-router-dom';


const pastOrders = [
  {
    id: 2001,
    productName: 'Highlighter Palette',
    productImage: require('../assets/image/s-21.jpg'),
    qty: 1,
    price: 299,
    date: '10/07/2025, 2:00 PM',
    payment: 'Card Payment',
    status: '✅ Delivered',
    address: '789 Silk Street, Perambur, Chennai - 600011',
    phone: '9012345678',
  },
  {
    id: 2002,
    productName: 'Matte Liquid Lipstick',
    productImage: require('../assets/image/s-31.jpg'),
    qty: 2,
    price: 399,
    date: '08/07/2025, 11:15 AM',
    payment: 'UPI',
    status: '✅ Delivered',
    address: '222 MG Road, Peelamedu, Coimbatore - 641004',
    phone: '9988776655',
  }
];

const PastHistory = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="min-w-screen flex  justify-between px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-green-700">🕓 Past Finished Orders</h1>
       <h2 className="text-2xl ">
        <Link to="/">⬅️</Link>
      </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastOrders.map((order) => (
          <div
            key={order.id}
            className="p-4 border rounded-xl shadow bg-white hover:shadow-md transition duration-200"
          >
            <img
              src={order.productImage}
              alt={order.productName}
              className="w-32 h-32 object-cover mb-3 mx-auto rounded"
            />
            <h2 className="font-semibold text-lg text-center">{order.productName}</h2>
            <p className="text-sm text-gray-700 mt-1 text-center">Qty: {order.qty}</p>
            <p className="text-sm text-gray-700 text-center mb-2">
              Total: ₹{order.price * order.qty}
            </p>
            <div className="text-sm text-gray-600 space-y-1 border-t pt-3 mt-3">
              <p><strong>🗓 Ordered On:</strong> {order.date}</p>
              <p><strong>💳 Payment:</strong> {order.payment}</p>
              <p><strong>📍 Shipping:</strong> {order.address}</p>
              <p><strong>📞 Phone:</strong> {order.phone}</p>
              <p><strong>📦 Status:</strong> {order.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastHistory;
