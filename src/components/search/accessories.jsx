import { Link } from 'react-router-dom';

import { useCart } from '../../CartContext';
import { FaStar } from 'react-icons/fa';

// ✅ Sample product list
const products = [
  {
    id: 1,
    name: 'Gold Plated Necklace',
    image: require('../../assets/image/s-6.jpg'),
    price: 799,
    rating: 4.5,
    stock: true,
  },
  {
    id: 2,
    name: 'Kundan Choker Set',
    image: require('../../assets/image/s-7.png'),
    price: 999,
    rating: 4.3,
    stock: true,
  },
  {
    id: 3,
    name: 'Pearl Drop Earrings',
    image: require('../../assets/image/s-8.jpg'),
    price: 349,
    rating: 4.6,
    stock: true,
  },
  {
    id: 4,
    name: 'Traditional Neck Set',
    image: require('../../assets/image/s-9.jpg'),
    price: 499,
    rating: 4.2,
    stock: true,
  },
  {
    id: 5,
    name: 'American Diamond Chain',
    image: require('../../assets/image/s-10.webp'),
    price: 299,
    rating: 4.7,
    stock: true,
  },
  {
    id: 6,
    name: 'Antique Jhumka Earrings',
    image: require('../../assets/image/s-11.jpg'),
    price: 399,
    rating: 4.4,
    stock: true,
  },
  {
    id: 7,
    name: 'Stone Studded Maang Tikka',
    image: require('../../assets/image/s-12.jpg'),
    price: 259,
    rating: 4.1,
    stock: true,
  },
  {
    id: 8,
    name: 'Oxidized Gold Necklace',
    image: require('../../assets/image/s-13.jpg'),
    price: 549,
    rating: 4.6,
    stock: true,
  },
  {
    id: 9,
    name: 'Stylish Neck Sets',
    image: require('../../assets/image/s-14.jpg'),
    price: 199,
    rating: 4.3,
    stock: true,
  },
  {
    id: 10,
    name: 'Kundan Bridal Set',
    image: require('../../assets/image/s-15.jpg'),
    price: 1499,
    rating: 4.8,
    stock: true,
  },
  {
    id: 11,
    name: 'Crystal Bracelet',
    image: require('../../assets/image/s-16.webp'),
    price: 299,
    rating: 4.5,
    stock: true,
  },
  {
    id: 12,
    name: 'Gold Plated Anklet',
    image: require('../../assets/image/s-17.jpg'),
    price: 199,
    rating: 4.2,
    stock: true,
  },
  {
    id: 13,
    name: 'Minimalist Pendant Chain',
    image: require('../../assets/image/s-18.png'),
    price: 349,
    rating: 4.4,
    stock: true,
  },
  {
    id: 14,
    name: 'Pearl Drop Neck Set',
    image: require('../../assets/image/s-19.jpg'),
    price: 449,
    rating: 4.6,
    stock: true,
  },
  {
    id: 15,
    name: 'Gold Plated Necklace Set',
    image: require('../../assets/image/s-20.jpg'),
    price: 899,
    rating: 4.7,
    stock: true,
  },
];

const Accessories = () => {
  const { addToCart } = useCart();

  return (
    <div className="px-6 py-10 bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-6 text-pink-700">
          ✨Accessories Collections✨
        </h2>
        <h2 className="text-2xl">
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
              className={`mt-1 text-sm font-medium ${
                product.stock ? 'text-green-600' : 'text-red-500'
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

export default Accessories;
