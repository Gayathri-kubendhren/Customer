import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../CartContext'; // ✅ updated path
import { Link } from 'react-router-dom';


// ✅ Sample product list
const products = [
  {
    id: 1,
    name: 'Denim Jacket',
    image: require('../assets/image/ws-1.jpg'),
    price: 1199,
    rating: 4.2,
    stock: true,
  },
  {
    id: 2,
    name: 'Crop Top',
    image: require('../assets/image/ws-2.avif'),
    price: 699,
    rating: 3.9,
    stock: true,
  },
  {
    id: 3,
    name: 'Printed Jumpsuit',
    image: require('../assets/image/we-3.jpg'),
    price: 1399,
    rating: 4.5,
    stock: true,
  },
  {
    id: 4,
    name: 'Summer Dress',
    image: require('../assets/image/ws-4.avif'),
    price: 1599,
    rating: 4.7,
    stock: true,
  },
  {
    id: 5,
    name: 'Floral Skirt',
    image: require('../assets/image/ws-5.webp'),
    price: 899,
    rating: 4.0,
    stock: false,
  },
  {
    id: 6,
    name: 'Party Gown',
    image: require('../assets/image/ws-6.jpg'),
    price: 1899,
    rating: 4.6,
    stock: true,
  },
  {
    id: 7,
    name: 'Blazer Dress',
    image: require('../assets/image/ws-7.jpg'),
    price: 1499,
    rating: 4.3,
    stock: true,
  },
  {
    id: 8,
    name: 'Tank Top',
    image: require('../assets/image/ws-21.jpg'),
    price: 499,
    rating: 4.8,
    stock: true,
  },
  {
    id: 9,
    name: 'Ripped Jeans',
    image: require('../assets/image/ws-9.jpg'),
    price: 999,
    rating: 4.1,
    stock: true,
  },
  {
    id: 10,
    name: 'Bodycon Dress',
    image: require('../assets/image/ws-10.jpg'),
    price: 1799,
    rating: 4.4,
    stock: true,
  }
];


const  Westerndress= () => {
   const { addToCart } = useCart();
  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="px-6 py-10 bg-white">
      
      <h3 className="text-2xl font-bold mb-6 text-pink-700">✨Western Wear Collections✨</h3>
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

export default Westerndress;
