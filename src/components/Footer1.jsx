import gp1 from '../assets/image/gp1.jpg';
import ap1 from '../assets/image/ap1.jpg';
import { Link } from 'react-router-dom';


const Footer1 = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 px-10 py-10">
      {/* Top section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8 border-b border-gray-600 pb-8">
        {/* Newsletter */}
        <div className="flex-1">
          <h4 className="font-semibold mb-2">Get special discount on your inbox</h4>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 text-black rounded"
              id="emailInput" // optional if you want to fetch value
            />
            <button
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
              onClick={() => {
                alert("🎉 Discount email offer sent successfully!");
              }}
            >
              SEND
            </button>
          </div>
        </div>


        {/* App Download */}
        <div className="flex-1">
          <h4 className="font-semibold mb-2">EXPERIENCE THE APP</h4>
          <div className="flex gap-2">
            <img src={gp1} alt="Google Play" className="h-10" />
            <img src={ap1} alt="App Store" className="h-10" />

          </div>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h4 className="font-semibold mb-2">NEED HELP?</h4>
          <p>Call us at <strong>1800-267-4444</strong></p>
          <p className="text-sm">Mon–Sat 8AM–10PM, Sun 10AM–7PM</p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-sm">
        {/* About */}
        <div>
          <Link to="/about">
            <h5 className="font-bold mb-3 hover:text-[#E71665]">About Us</h5>
          
          <ul className="space-y-1">
            <li>Who are we?</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Sustainability</li>
          </ul></Link>
        </div>

        {/* Help */}
        <div>
          <Link to="/help" >

          <h5 className="font-bold mb-3 hover:text-[#E71665]">Help</h5>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul></Link>
        </div>

        {/* Quick Links */}
        <div>
          <Link to="/quick-links">
          <h5 className="font-bold mb-3">Quick Links</h5>
          <ul className="space-y-1">
            <li>Offer Zone</li>
            <li>New Launches</li>
            <li>Men's Fashion</li>
            <li>Gift Cards</li>
          </ul></Link>
        </div>

        {/* Top Categories */}
        <div>
          <h5 className="font-bold mb-3">Top Categories</h5>
          <ul className="space-y-1">
            <li>Makeup</li>
            <li>Skincare</li>
            <li>Footwear</li>
            <li>Accessories</li>
          </ul>
        </div>
      </div>

    </footer>
  );
};

export default Footer1;
