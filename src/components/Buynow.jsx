import { useParams, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import products from '../data/Products'; // Update path if needed

const districts = [
  'Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli',
  'Erode', 'Thanjavur', 'Vellore', 'Dindigul', 'Tirunelveli'
];

const paymentMethods = [
  'Cash on Delivery',
  'UPI',
  'Debit/Credit Card',
  'Net Banking',
  'PhonePe',
  'Google Pay',
  'Paytm Wallet',
  'Amazon Pay'
];

const Buynow = () => {
  const { id } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const qty = parseInt(query.get('qty')) || 1;

  const product = products.find(p => p.id === parseInt(id));
  const [showForm, setShowForm] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    post: '',
    pincode: '',
    district: '',
    phone: '',
    payment: 'Cash on Delivery',
  });

  const [orderData, setOrderData] = useState(null);

  if (!product) return <p className="text-center text-red-500">Product not found</p>;

  const handlePlaceOrderClick = () => {
    setShowForm(true);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

const handleOrderSubmit = async (e) => {
  e.preventDefault();

  const order = {
    id: Date.now(), // For localStorage use
    productId: product.id,
    name: formData.name,
    address: formData.address,
    post: formData.post,
    pincode: formData.pincode,
    district: formData.district,
    phone: formData.phone,
    payment: formData.payment,
    qty: qty,
    date: new Date().toLocaleString(),
    productName: product.name,
    productImage: product.image,
    price: product.price,
    status: 'Pending'
  };

  // ✅ 1. Save to localStorage
  const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
  localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));

  // ✅ 2. Send to MongoDB via backend
  try {
    await axios.post('http://localhost:4000/api/orders', order);
  } catch (error) {
    console.error('❌ Error sending order to server:', error.message);
    alert('Order saved locally, but failed to sync with server.');
  }

  // ✅ 3. UI updates
  setOrderData(order);
  setOrderPlaced(true);
  setShowForm(false);
};

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded shadow">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">🛍 Confirm Your Order</h1>

      {!orderPlaced ? (
        <>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
              <p className="mt-2 text-lg text-pink-700 font-semibold">
                ₹{product.price} x {qty} = ₹{product.price * qty}
              </p>
              <p className="mt-1 text-sm text-gray-500">Quantity: {qty}</p>
              <p className={`mt-2 text-sm ${product.stock ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock ? 'In Stock' : 'Out of Stock'}
              </p>

              {!showForm && (
                <button
                  onClick={handlePlaceOrderClick}
                  className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded shadow"
                >
                  ✅ Place Order
                </button>
              )}
            </div>
          </div>

          {showForm && (
            <form onSubmit={handleOrderSubmit} className="mt-8 border-t pt-6 space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">📝 Shipping Details</h2>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <textarea
                name="address"
                placeholder="Street Address / House No."
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="post"
                placeholder="Post Office"
                value={formData.post}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                pattern="\d{6}"
                title="Enter 6-digit pincode"
                className="w-full p-2 border rounded"
              />
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">-- Select District --</option>
                {districts.map((d, i) => (
                  <option key={i} value={d}>{d}</option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[6-9]{1}[0-9]{9}"
                title="Enter valid 10-digit phone number"
                className="w-full p-2 border rounded"
              />
              <select
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                {paymentMethods.map((method, i) => (
                  <option key={i} value={method}>{method}</option>
                ))}
              </select>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
              >
                🛒 Confirm Order
              </button>
            </form>
          )}
        </>
      ) : (
        <div className="text-center text-green-700 mt-10">
          <h2 className="text-2xl font-bold">🎉 Order Placed Successfully!</h2>
          <p className="mt-2">Thank you, {orderData.name}! Your order for <strong>{orderData.qty} x {orderData.productName}</strong> is confirmed.</p>
          <p className="mt-1 text-sm text-gray-600">📍 {orderData.address}, {orderData.post}, {orderData.district} - {orderData.pincode}</p>
          <p className="text-sm text-gray-600">📞 {orderData.phone}</p>
          <p className="text-sm text-gray-600">💳 Payment Mode: {orderData.payment}</p>
          <p className="text-sm text-gray-600">🕒 Order Date: {orderData.date}</p>
          

        </div>
      )}
    </div>
  );
};

export default Buynow;
