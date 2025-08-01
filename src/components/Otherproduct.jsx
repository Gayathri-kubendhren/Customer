import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../CartContext'; // ✅ updated path
import { Link } from 'react-router-dom';

// ✅ Sample product list
const products = [
  {
    id: 1,
    name: 'Stylish Sneakers',
    image: require('../assets/image/o-1.jpg'),
    price: 1299,
    rating: 4.4,
    stock: true,
  },
  {
    id: 2,
    name: 'Elegant Earrings',
    image: require('../assets/image/o-2.jpg'),
    price: 299,
    rating: 4.1,
    stock: false,
  },
  {
    id: 3,
    name: 'Aroma Candles Set',
    image: require('../assets/image/o-3.jpg'),
    price: 499,
    rating: 4.7,
    stock: true,
  },
  {
    id: 4,
    name: 'Wall Hanging Decor',
    image: require('../assets/image/o-4.jpg'),
    price: 899,
    rating: 4.5,
    stock: true,
  },
  {
    id: 5,
    name: 'Makeup Kit Essentials',
    image: require('../assets/image/o-5.jpg'),
    price: 699,
    rating: 4.6,
    stock: true,
  },
  {
    id: 6,
    name: 'Leather Wallet',
    image: require('../assets/image/o-6.jpg'),
    price: 599,
    rating: 4.3,
    stock: true,
  },
  {
    id: 7,
    name: 'Casual Flip Flops',
    image: require('../assets/image/o-7.jpg'),
    price: 349,
    rating: 4.0,
    stock: true,
  },
  {
    id: 8,
    name: 'Beaded Necklace',
    image: require('../assets/image/o-8.jpg'),
    price: 499,
    rating: 4.5,
    stock: false,
  },
  {
    id: 9,
    name: 'Room Fragrance Spray',
    image: require('../assets/image/o-9.jpg'),
    price: 399,
    rating: 4.8,
    stock: true,
  },
  {
    id: 10,
    name: 'Hair Care Combo Pack',
    image: require('../assets/image/o-10.jpg'),
    price: 799,
    rating: 4.7,
    stock: true,
  }
];


const Otherproduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;
  const { addToCart } = useCart();

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="px-6 py-10 bg-white">
      
      <h3 className="text-2xl font-bold mb-6 text-pink-700">✨Other Products Collections✨</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
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
              onClick={() => addToCart(product)} // ✅ Add this
              className={`mt-3 w-full py-2 rounded ${product.stock
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

      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center items-center gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? 'bg-[#E71665] text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Otherproduct;
