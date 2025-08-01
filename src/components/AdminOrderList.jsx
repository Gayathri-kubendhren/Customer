import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminOrderList = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('');


  // ✅ Format Date Helper
  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return 'N/A';
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };


  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/orders');
      setOrders(res.data);
    } catch (err) {
      console.error('Error fetching orders', err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleView = (order) => {
    setSelectedOrder(order);
    setStatus(order.status || 'Pending');
    setShowModal(true);
  };

  const handleStatusChange = async () => {
  try {
    console.log('Updating order status to:', status);
    const response = await axios.put(
      `http://localhost:4000/api/orders/${selectedOrder._id}`,
      { status },
      { headers: { 'Content-Type': 'application/json' } }
    );
    alert('✅ Status updated!');
    setShowModal(false);
    fetchOrders(); // Refresh list
  } catch (err) {
    console.error('❌ Failed to update status', err);
    alert('❌ Failed to update status');
  }
};


 const handleDelete = async (id) => {
  if (window.confirm('Are you sure you want to delete this order?')) {
    try {
      await axios.delete(`http://localhost:4000/api/orders/${id}`);
      setOrders((prev) => prev.filter((order) => order._id !== id));
      alert('🗑️ Order deleted successfully');
    } catch (error) {
      console.error('Failed to delete order', error);
      alert('❌ Failed to delete order');
    }
  }
};


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-pink-700 mb-4">🧾 All Orders</h1>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">#</th>
            <th className="p-2">Customer</th>
            <th className="p-2">Status</th>
            <th className="p-2">Total</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id} className="border-t">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{order.name}</td>
              <td className="p-2">{order.status}</td>
              <td className="p-2">₹{order.qty * order.price}</td>
              <td className="p-2 space-x-2">
                <button
                  className="bg-blue-500 px-2 py-1 rounded text-white"
                  onClick={() => handleView(order)}
                >
                  View
                </button>
                <button
                  className="bg-green-500 px-2 py-1 rounded text-white"
                  onClick={() => handleView(order)}
                >
                  Update
                </button>
                <button className="bg-red-500 px-2 py-1 rounded text-white" onClick={() => handleDelete(order._id)}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Order Modal */}
      {showModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-2xl">
            <h2 className="text-xl font-bold mb-4 text-pink-700">📝 Order Details</h2>

            <div className="mb-4">
              <strong>Customer:</strong> {selectedOrder.name}<br />
              <strong>Phone:</strong> {selectedOrder.phone}<br />
              <strong>Address:</strong> {selectedOrder.address}, {selectedOrder.post},{' '}
              {selectedOrder.district}, {selectedOrder.pincode}<br />
              <strong>Order Date:</strong>{' '}
              <span className="text-blue-600">
                {formatDate(selectedOrder.date)} {/* ✅ Date formatting applied here */}
              </span>
            </div>

            <div className="mb-4">
              <strong>Product:</strong> {selectedOrder.productName}<br />
              <strong>Quantity:</strong> {selectedOrder.qty}<br />
              <strong>Price:</strong> ₹{selectedOrder.price}<br />
              <strong>Total:</strong> ₹{selectedOrder.qty * selectedOrder.price}
            </div>

            <div className="mb-4">
              <label className="font-semibold">Status:</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="ml-2 border rounded px-2 py-1"
              >
                <option>Pending</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>

            <div className="flex justify-end space-x-2">
              <button
  onClick={handleStatusChange}
  className={`px-4 py-2 rounded text-white ${status !== selectedOrder.status ? 'bg-green-600' : 'bg-gray-400 cursor-not-allowed'}`}
  disabled={status === selectedOrder.status}
>
  Save
</button>

              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrderList;
