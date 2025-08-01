import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext';
import { FaStar } from 'react-icons/fa';

// ✅ Sample product list
const products = [
  {
    id: 1,
    name: 'Highlighter Palette',
    image: require('../../assets/image/s-21.jpg'),
    price: 299,
    rating: 4.3,
    stock: true,
  },
  {
    id: 2,
    name: 'Waterproof Mascara',
    image: require('../../assets/image/s-22.jpg'),
    price: 349,
    rating: 4.4,
    stock: true,
  },
  {
    id: 3,
    name: 'Glow Highlighter Palette',
    image: require('../../assets/image/s-23.jpg'),
    price: 499,
    rating: 4.6,
    stock: true,
  },
  {
    id: 4,
    name: 'Nude Eyeshadow Kit',
    image: require('../../assets/image/s-24.jpg'),
    price: 599,
    rating: 4.2,
    stock: true,
  },
  {
    id: 5,
    name: ' Face eye color',
    image: require('../../assets/image/s-25.jpg'),
    price: 699,
    rating: 4.7,
    stock: true,
  },
  {
    id: 6,
    name: 'Charcoal Face Mask',
    image: require('../../assets/image/s-26.jpg'),
    price: 199,
    rating: 4.4,
    stock: true,
  },
  {
    id: 7,
    name: 'Color Moisturizer',
    image: require('../../assets/image/s-27.jpg'),
    price: 349,
    rating: 4.5,
    stock: true,
  },
  {
    id: 8,
    name: 'Vitamin C Moisturizer',
    image: require('../../assets/image/s-28.jpg'),
    price: 249,
    rating: 4.3,
    stock: true,
  },
  {
    id: 9,
    name: 'Makeup Brush Set',
    image: require('../../assets/image/s-29.jpg'),
    price: 499,
    rating: 4.6,
    stock: true,
  },
  {
    id: 10,
    name: 'BB Cream Foundation',
    image: require('../../assets/image/s-30.jpg'),
    price: 399,
    rating: 4.1,
    stock: true,
  },
  {
    id: 11,
    name: 'Matte Liquid Lipstick',
    image: require('../../assets/image/s-31.jpg'),
    price: 299,
    rating: 4.3,
    stock: true,
  },
  {
    id: 12,
    name: 'Aloe Vera Gel Lipstick',
    image: require('../../assets/image/s-32.jpg'),
    price: 199,
    rating: 4.2,
    stock: true,
  },
  {
    id: 13,
    name: 'Beauty Paint Set',
    image: require('../../assets/image/s-33.jpg'),
    price: 259,
    rating: 4.4,
    stock: true,
  },
  {
    id: 14,
    name: 'Lip Balm Pack',
    image: require('../../assets/image/s-21.jpg'),
    price: 149,
    rating: 4.5,
    stock: true,
  },
  {
    id: 15,
    name: 'Sunscreen SPF 50+',
    image: require('../../assets/image/s-35.jpg'),
    price: 349,
    rating: 4.7,
    stock: true,
  }
];



const Beauty = () => {
   const { addToCart } = useCart();
  return (
    <div className="px-6 py-10 bg-white">
      <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold mb-6 text-pink-700">✨Beauty Collections✨</h2>
      <h2 className="text-2xl ">
        <Link to="/">⬅️</Link>
      </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
          >
            <div className="overflow-hidden rounded">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
            <p className="text-[#E71665] font-bold text-base mt-1">₹{product.price}</p>

            <div className="flex items-center gap-1 text-yellow-500 mt-1">
              {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="text-gray-500 ml-1 text-sm">({product.rating})</span>
            </div>

            <p
              className={`mt-1 text-sm font-medium ${product.stock ? 'text-green-600' : 'text-red-500'
                }`}
            >
              {product.stock ? 'In Stock' : 'Out of Stock'}
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
              className={`mt-3 w-full py-2 rounded ${
                product.stock
                  ? 'bg-[#E71665] text-white hover:bg-pink-600'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
              disabled={!product.stock}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beauty;
