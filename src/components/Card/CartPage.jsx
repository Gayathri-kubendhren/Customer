import { useCart } from '../../CartContext';
import { Link } from 'react-router-dom';
const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  // ✅ Calculate total quantity of all items
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  // ✅ Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="p-6">
      <div className="min-w-screen flex  justify-between px-4 py-6">
      <h2 className="text-2xl font-bold mb-2 text-pink-700">🛒 Your Cart</h2>
      <h2 className="text-2xl ">
        <Link to="/">⬅️</Link>
      </h2>
      </div>
      {/* ✅ Show total quantity at top */}
      <p className="text-2xl  text-green-800 mb-4">
        You have <strong>✨{totalQuantity}✨</strong> item{totalQuantity !== 1 ? 's' : ''} in your cart.
      </p>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="border p-4 rounded shadow-sm flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-pink-700 font-bold">₹{item.price}</p>

                {/* ✅ Show Quantity per item */}
                <p className="text-gray-600 text-sm">
                  Quantity: <strong>{item.quantity || 1}</strong>
                </p>

                <button
                  className="mt-2 text-sm text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* ✅ Total Price */}
          <div className="mt-6 text-right text-lg font-semibold text-gray-700">
            Total: ₹{totalPrice}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
