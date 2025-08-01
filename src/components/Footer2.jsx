import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <footer className="bg-white border-t mt-8 ">
      {/* Icon Info Row */}
      <div className="flex flex-wrap justify-around py-6 px-4 bg-white text-center text-gray-800 border-b">
        <div className="mb-4">
          <div className="text-pink-600 text-3xl mb-1">🚚</div>
          <p className="font-bold">FREE SHIPPING</p>
          <p className="text-sm">On Orders Above ₹299</p>
        </div>
        <div className="mb-4">
          <div className="text-pink-600 text-3xl mb-1">↩️</div>
          <p className="font-bold">EASY RETURNS</p>
          <p className="text-sm">15-Day Return Policy</p>
        </div>
        <div className="mb-4">
          <div className="text-pink-600 text-3xl mb-1">✔️</div>
          <p className="font-bold">100% AUTHENTIC</p>
          <p className="text-sm">Products Sourced Directly</p>
        </div>
        <div className="mb-4">
          <div className="text-pink-600 text-3xl mb-1">🏷️</div>
          <p className="font-bold">1900+ BRANDS</p>
          <p className="text-sm">1.2 Lakh+ Products</p>
        </div>
      </div>

      {/* Social Media Row */}
      <div className="flex flex-wrap justify-center items-center gap-4 py-4 bg-gray-50 text-gray-700 text-sm border-b">
        <span>Show us some love ❤️ on social media</span>
        <Link to="/" className="text-xl"><i className="fab fa-instagram" /></Link>
        <Link to="/" className="text-xl"><i className="fab fa-facebook" /></Link>
        <Link to="/" className="text-xl"><i className="fab fa-youtube" /></Link>
        <Link to="/" className="text-xl"><i className="fab fa-twitter" /></Link>
        <Link to="/" className="text-xl"><i className="fab fa-pinterest" /></Link>
      </div>

      {/* Policy Links */}
      <div className="bg-pink-600 text-white text-sm text-center py-3">
        <p className="mb-1">
          <Link to="/" className="mx-2 underline">Terms & Conditions</Link> |
          <Link to="/" className="mx-2 underline">Shipping Policy</Link> |
          <Link to="/" className="mx-2 underline">Cancellation Policy</Link> |
          <Link to="/" className="mx-2 underline">Privacy Policy</Link>
        </p>
        <p>© 2025 HALLEXY E-RETAIL LIMITED All Rights Reserved.</p>
      </div>



      {/* Popular Links */}
      <div
        className="bg-white px-4 py-2 text-xs text-gray-600 leading-snug max-h-[100px] overflow-hidden mb-0"
      >
        <p className="font-semibold mb-2">Popular Links</p>
        <p>
          Men's Fashion, Women's Clothing, Electronics, Mobile Phones, Laptops, Smartwatches, Footwear, Accessories,
          Home Decor, Kitchen Essentials, Grocery, Health & Wellness, Baby Products, Gift Items, Flash Sales, New Arrivals,
          Customer Login, Track Orders, Admin Dashboard, Inventory Management, Secure Payments, Customer Support, Product Reviews,
          Order History, Wishlist, Coupons & Discounts, Return Policy, Shipping Information, Contact Us and more...
        </p>
      </div>
      {/*  */}
      <div className="bg-gray-100 text-gray-700 px-8 py-10 text-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {/* Discover */}
          <div>
            <Link to="/about" >
            <h3 className="font-semibold mb-2">DISCOVER</h3>
            <ul className="space-y-1">
              <li>Men's Ethnic Wear</li>
              <li>Western Dresses</li>
              <li>Casual Shirts</li>
              <li>Formal Outfits</li>
              <li>Footwear for Men</li>
              <li>Wallets & Belts</li>
              <li>Trending Accessories</li>
              <li>Best Deals</li>
              <li>New Arrivals</li>
              <li>Gift Ideas</li>
              <li>Limited-Time Offers</li>
              <li>Hallexy Picks</li>
            </ul></Link>
          </div>

          {/* Shop Makeup */}
          <div><Link to="/beauty" >
            <h3 className="font-semibold mb-2">SHOP MAKEUP</h3>
            <ul className="space-y-1">
              <li>Face Makeup</li>
              <li>Lipsticks</li>
              <li>Foundation</li>
              <li>Compact Powders</li>
              <li>Blush & Highlighter</li>
              <li>Kajal & Eyeliners</li>
              <li>Mascara</li>
              <li>Makeup Brushes</li>
              <li>Primers</li>
              <li>Concealers</li>
              <li>BB & CC Creams</li>
              <li>Makeup Removers</li>
            </ul></Link>
          </div>

          {/* Skin Care */}
          <div><Link to="/ethnic" >
            <h3 className="font-semibold mb-2">ETHNIC WEAR</h3>
            <ul className="space-y-1">
              <li>Kurtis</li>
              <li>Lehengas</li>
              <li>Sarees</li>
              <li>Salwar Suits</li>
              <li>Ethnic Gowns</li>
              <li>Sharara Sets</li>
              <li>Churidar</li>
              <li>Anarkali Dresses</li>
              <li>Palazzo Sets</li>
              <li>Dupattas</li>
            </ul></Link>
          </div>

          {/* Hair Products */}
          <div><Link to="/home" >
            <h3 className="font-semibold mb-2">HOME PRODUCTS</h3>
            <ul className="space-y-1">
              <li>Bed Sheets & Covers</li>
              <li>Curtains & Drapes</li>
              <li>Cushion Covers</li>
              <li>Table Linen</li>
              <li>Floor Mats & Rugs</li>
              <li>Wall Decor</li>
              <li>Laundry Baskets</li>
              <li>Storage Organizers</li>
              <li>Aroma Candles</li>
              <li>Planters & Vases</li>
            </ul></Link>
          </div>

          {/* Fragrance */}
          <div><Link to="/accessories" >
            <h3 className="font-semibold mb-2">ACCESSORIES</h3>
            <ul className="space-y-1">
              <li>Handbags</li>
              <li>Watches</li>
              <li>Jewelry Sets</li>
              <li>Sunglasses</li>
              <li>Wallets & Clutches</li>
              <li>Belts</li>
              <li>Hair Accessories</li>
              <li>Scarves & Stoles</li>
              <li>Caps & Hats</li>
              <li>Footwear</li>
            </ul></Link>
          </div>

          {/* Electronics */}
          <div><Link to="/footwear" >
            <h3 className="font-semibold mb-2">FOOTWEARS</h3>
            <ul className="space-y-1">
              <li>Puma</li>
              <li>Adidas</li>
              <li>Nike</li>
              <li>Reebok</li>
              <li>Bata</li>
              <li>Skechers</li>
              <li>Liberty</li>
              <li>Red Tape</li>
              <li>Relaxo</li>
              <li>Campus</li>
            </ul></Link>
          </div>
        </div>
      </div>
      {/*  */}

    </footer>
  );
};

export default Footer2;
