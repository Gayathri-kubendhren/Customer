import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Menswear = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/products');
        console.log('Fetched data:', res.data);

        if (Array.isArray(res.data.products)) {
          setProducts(res.data.products);
        } else if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          setError('Invalid product data');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="p-4">Loading products...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="p-4">
      {/* ✅ Page Title */}
      <h2 className="text-2xl font-bold mb-6 text-pink-700">
        ✨Menswear Collections✨
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, idx) => (
          <div
            key={product._id || idx}
            className="border p-4 rounded shadow hover:shadow-md transition"
          >
            <img
              src={`http://localhost:4000/uploads/${product.image}`}
              alt={product.name}
              className="h-80 w-full  mb-2 rounded"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-pink-600 font-medium">₹{product.price}</p>
            <p>⭐ {product.rating || 4.5}</p>
            <p className={product.stock_quantity > 0 ? "text-green-600" : "text-red-600"}>
              {product.stock_quantity > 0 ? "In Stock" : "Out of Stock"}
            </p>

            <Link to={`/product/${product.id}`}>
              <button
                className="mt-3 w-full py-2 rounded text-white bg-pink-600 hover:bg-pink-700 font-semibold"
              >
                View Details
              </button>
            </Link>

            <button
              onClick={() => addToCart(product)}
              className={`mt-3 w-full py-2 rounded ${product.stock_quantity > 0
                  ? 'bg-[#E71665] text-white hover:bg-pink-600'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
              disabled={product.stock_quantity <= 0}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menswear;
