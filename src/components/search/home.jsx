import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext';
import { FaStar } from 'react-icons/fa';

// ✅ Sample product list
// ✅ Sample product list - Home Decor
const products = [
  {
    id: 1,
    name: 'Vintage Table Lamp Sofa Sets',
    image: require('../../assets/image/s-56.jpg'),
    price: 899,
    rating: 4.5,
    stock: true,
  },
  {
    id: 2,
    name: 'Handcrafted Wooden Cupboards',
    image: require('../../assets/image/s-52.jpg'),
    price: 1299,
    rating: 4.6,
    stock: true,
  },
  {
    id: 3,
    name: 'Elegant Wall Mirror',
    image: require('../../assets/image/s-53.jpg'),
    price: 1499,
    rating: 4.4,
    stock: true,
  },
  {
    id: 4,
    name: 'Macrame Wall Hanging',
    image: require('../../assets/image/s-54.jpg'),
    price: 749,
    rating: 4.3,
    stock: true,
  },
  {
    id: 5,
    name: 'Ceramic Flower Vase',
    image: require('../../assets/image/s-55.jpg'),
    price: 999,
    rating: 4.7,
    stock: true,
  },
  {
    id: 6,
    name: 'Fragrance Diffuser Set',
    image: require('../../assets/image/s-51.jpg'),
    price: 699,
    rating: 4.2,
    stock: true,
  },
  {
    id: 7,
    name: 'Decorative Candle Holders',
    image: require('../../assets/image/s-57.jpg'),
    price: 599,
    rating: 4.5,
    stock: true,
  },
  {
    id: 8,
    name: 'Abstract Wall Art Set',
    image: require('../../assets/image/s-58.jpg'),
    price: 1599,
    rating: 4.6,
    stock: true,
  },
  {
    id: 9,
    name: 'Indoor LED String Lights ',
    image: require('../../assets/image/s-65.jpg'),
    price: 899,
    rating: 4.4,
    stock: true,
  },
  {
    id: 10,
    name: 'Cotton Throw Blanket ',
    image: require('../../assets/image/s-60.jpg'),
    price: 499,
    rating: 4.7,
    stock: true,
  },
  {
    id: 11,
    name: 'Mini Succulent Plants (Set of 3)',
    image: require('../../assets/image/s-61.jpg'),
    price: 349,
    rating: 4.1,
    stock: true,
  },
  {
    id: 12,
    name: 'Boho Floor Rug',
    image: require('../../assets/image/s-62.jpg'),
    price: 1399,
    rating: 4.3,
    stock: true,
  },
  {
    id: 13,
    name: 'Glass Terrarium Holder',
    image: require('../../assets/image/s-63.jpg'),
    price: 799,
    rating: 4.5,
    stock: true,
  },
  {
    id: 14,
    name: 'Woven Storage Basket',
    image: require('../../assets/image/s-64.jpg'),
    price: 649,
    rating: 4.6,
    stock: true,
  },
  {
    id: 15,
    name: 'Designer Cushion Covers (Pack of 4)',
    image: require('../../assets/image/s-59.jpg'),
    price: 1199,
    rating: 4.8,
    stock: true,
  }
];





const Home= () => {
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

export default Home;
