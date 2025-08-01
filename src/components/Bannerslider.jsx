import { useEffect, useState } from 'react';
import img11 from '../assets/image/img-11.webp';
import img9 from '../assets/image/img-9.jpg';
import img10 from '../assets/image/img-10.jpg';
import img12 from '../assets/image/img-12.jpg';
import img13 from '../assets/image/img-13.jpg';




const images = [img11, img10 , img9 , img12, img13];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <img
        src={images[current]}
        alt={`Banner ${current + 1}`}
        className=" w-full h-[500px] object-cover transition-all duration-700"
      />
    </div>
  );
};

export default BannerSlider;
