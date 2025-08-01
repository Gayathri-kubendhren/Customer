import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];

    // Save to backend if not already synced
    const uploadOrders = async () => {
      for (const order of storedOrders) {
        try {
          await axios.post('http://localhost:4000/api/orders', order);
        } catch (error) {
          console.error('Failed to upload order:', error);
        }
      }
    };

    uploadOrders(); // 👈 sync once

    setOrders(storedOrders);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="min-w-screen  flex justify-between items-center">
      <h1 className="text-3xl font-bold mb-6 text-pink-700">📦 Order History</h1>
      
      <h2 className="text-2xl ">
        <Link to="/">⬅️</Link>
      </h2>
      </div>
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order, i) => (
            <div
              key={i}
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
                <p><strong>📍 Shipping:</strong> {order.address}, {order.post}, {order.district} - {order.pincode}</p>
                <p><strong>📞 Phone:</strong> {order.phone}</p>
                <p><strong>📦 Status:</strong> {order.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to='/PastHistory'> <h1 className="text-2xl font-bold mb-6 text-pink-700 mt-10">⏰Past History</h1></Link>
    </div>
  );
};

export default OrderHistory;
