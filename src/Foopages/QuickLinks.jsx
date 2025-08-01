import React from "react";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 text-gray-800">
      {/* Back to Home */}
      <div className="flex justify-end mb-6">
        <Link
          to="/"
          className="text-[#E71665] underline hover:text-pink-700 text-lg"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-10 text-center text-[#E71665]">
        Quick Links
      </h1>

      {/* Offer Zone */}
      <section className="mb-10 bg-pink-50 p-6 rounded-lg shadow-md hover:bg-pink-100 transition">
        <h2 className="text-2xl font-semibold mb-2 text-[#E71665]">🎉 Offer Zone</h2>
        <p>
          Explore our latest discounts and exclusive offers on fashion for men and women. 
          Enjoy up to 70% OFF on top brands. Limited time only!
        </p>
        <Link
          to="/home"
          className="inline-block mt-3 text-[#E71665] underline hover:text-pink-700"
        >
          Shop Now →
        </Link>
      </section>

      {/* New Launches */}
      <section className="mb-10 bg-pink-50 p-6 rounded-lg shadow-md hover:bg-pink-100 transition">
        <h2 className="text-2xl font-semibold mb-2 text-[#E71665]">🚀 New Launches</h2>
        <p>
          Be the first to grab our fresh arrivals! From seasonal trends to designer drops, 
          discover what’s new in-store today.
        </p>
        <Link
          to="/accessories"
          className="inline-block mt-3 text-[#E71665] underline hover:text-pink-700"
        >
          Explore New Arrivals →
        </Link>
      </section>

      {/* Men's Fashion */}
      <section className="mb-10 bg-pink-50 p-6 rounded-lg shadow-md hover:bg-pink-100 transition">
        <h2 className="text-2xl font-semibold mb-2 text-[#E71665]">👕 Men's Fashion</h2>
        <p>
          Discover stylish outfits for every occasion – ethnic wear, casual shirts, 
          formal suits, activewear, and more, curated just for men.
        </p>
        <Link
          to="/menswear"
          className="inline-block mt-3 text-[#E71665] underline hover:text-pink-700"
        >
          Shop Men's Collection →
        </Link>
      </section>

      {/* Gift Cards */}
      <section className="bg-pink-50 p-6 rounded-lg shadow-md hover:bg-pink-100 transition">
        <h2 className="text-2xl font-semibold mb-2 text-[#E71665]">🎁 Gift Cards</h2>
        <p>
          Give the gift of choice with Hallexy Gift Cards! Perfect for birthdays, 
          holidays, or special surprises. Available in flexible denominations.
        </p>
        <Link
          to="/beauty"
          className="inline-block mt-3 text-[#E71665] underline hover:text-pink-700"
        >
          Buy a Gift Card →
        </Link>
      </section>
    </div>
  );
};

export default QuickLinks;
