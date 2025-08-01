import { Link } from 'react-router-dom';

import ethnic from '../assets/image/cc-1.webp';
import western from '../assets/image/cc-2.webp';
import menswear from '../assets/image/cc-3.webp';
import footwear from '../assets/image/cc-4.webp';
import home from '../assets/image/cc-5.webp';
import beauty from '../assets/image/cc-6.webp';
import accessories from '../assets/image/cc-7.webp';

const categories = [
  { img: ethnic, label: 'Ethnic Wear', path: '/ethnic' },
  { img: western, label: 'Western Dresses', path: '/westerndress' },
  { img: menswear, label: 'Menswear', path: '/menswear' },
  { img: footwear, label: 'Footwear', path: '/footwear' },
  { img: home, label: 'Home Decor', path: '/home' },
  { img: beauty, label: 'Beauty', path: '/beauty' },
  { img: accessories, label: 'Accessories', path: '/accessories' },
];

const CategorySection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-10 bg-white">
      {categories.map((cat, index) => (
        <Link
          to={cat.path}
          key={index}
          className="flex flex-col items-center group transition transform hover:scale-110 cursor-pointer"
        >
          <div className="bg-pink-100 rounded-t-full rounded-b-md p-5 w-[120px] h-[120px] flex items-center justify-center overflow-hidden shadow-md">
            <img src={cat.img} alt={cat.label} className="w-[70px] h-[70px] object-contain" />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-700 group-hover:underline group-hover:font-semibold">
            {cat.label}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default CategorySection;
