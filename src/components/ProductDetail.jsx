// ✅ Import hooks and other dependencies
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import products from '../data/Products';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  const handleBuyNow = () => {
    if (quantity > product.stock) {
      setError(`Only ${product.stock} items in stock`);
    } else {
      setError('');
      navigate(`/buy/${product.id}?qty=${quantity}`);
    }
  };

  if (!product) return <p className="text-center text-red-500">Product not found</p>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* ✅ Page Heading OUTSIDE the card */}
      <h1 className="text-4xl font-extrabold text-pink-700 text-center mb-4">
        🛍️ Product Details
      </h1>
      <h2 className="text-2xl w-full text-right">
        <Link to="/">⬅️</Link>
      </h2>

      {/* ✅ Scrolling Banner OUTSIDE the card */}
      <div className="overflow-hidden whitespace-nowrap mb-8">
        <div className="inline-block animate-marquee text-pink-600 text-lg font-semibold text-center w-full">
          🎉 Big Sale! | ✨ Stylish Picks Just for You | 💃 Limited Stock Available | 🛒 Order Now!
        </div>
      </div>


      {/* ✅ Product Card */}
      <div className="bg-white shadow-md rounded p-8">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-96 object-cover rounded"
          />

          <div>
            <h2 className="text-3xl font-bold text-pink-700">{product.name}</h2>
            <p className="text-2xl text-gray-700 font-semibold mt-2">₹{product.price}</p>

            <div className="flex items-center gap-1 text-yellow-500 mt-2">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>

            <p className={`mt-3 text-lg ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
            </p>

            <p className="mt-4 text-gray-600">
              This is a beautiful and high-quality product designed with care and style.
              Perfect for any occasion, it blends comfort, elegance, and durability.
              Whether you're dressing up or keeping it casual, this piece will make you feel
              confident and stylish. A must-have addition to your wardrobe!
            </p>

            {/* ✅ Quantity Selector */}
            {product.stock > 0 && (
              <div className="mt-4">
                <label className="text-sm font-medium">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => {
                    const value = Math.min(Number(e.target.value), product.stock);
                    setQuantity(value);
                  }}
                  className="ml-2 w-20 px-2 py-1 border rounded"
                />
              </div>
            )}

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button
              onClick={handleBuyNow}
              disabled={!product.stock}
              className={`mt-6 px-6 py-2 rounded text-white font-semibold ${product.stock ? 'bg-pink-600 hover:bg-pink-700' : 'bg-gray-300 cursor-not-allowed'
                }`}
            >
              Buy Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
