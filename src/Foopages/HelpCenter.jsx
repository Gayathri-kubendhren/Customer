import React from "react";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-800">
      {/* Top-right Back to Home link */}
      <div className="flex justify-end mb-6">
        <Link to="/" className="text-[#E71665] underline hover:text-pink-700 text-lg">
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center text-[#E71665]">Help & Support</h1>

      {/* Help */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#E71665] mb-2">Help</h2>
        <p>
          Need assistance? We’re here to make your shopping experience smooth and enjoyable. 
          Whether it's product queries, order tracking, or size guides, check our resources or reach out!
        </p>
      </section>

      {/* Contact Us */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#E71665] mb-2">Contact Us</h2>
        <p>
          Have questions or feedback? Our support team is ready to help!
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Email: <strong>support@hallexy.com</strong></li>
          <li>Phone: <strong>+91 98765 43210</strong></li>
          <li>Available: Mon–Sat, 9AM to 7PM IST</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#E71665] mb-2">Frequently Asked Questions (FAQ)</h2>
        <p className="mb-2 font-medium">1. How can I track my order?</p>
        <p>Log in to your account and go to "My Orders" to view the status and tracking details.</p>

        <p className="mt-4 mb-2 font-medium">2. Can I cancel or change my order?</p>
        <p>Orders can be canceled within 2 hours of placing them. Contact our team for urgent changes.</p>

        <p className="mt-4 mb-2 font-medium">3. What if I receive a damaged product?</p>
        <p>Please share photos with us via email within 24 hours, and we’ll arrange a replacement.</p>
      </section>

      {/* Shipping */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#E71665] mb-2">Shipping Information</h2>
        <ul className="list-disc ml-6">
          <li>Standard Delivery: 4–7 business days</li>
          <li>Express Delivery: 1–3 business days (extra charges apply)</li>
          <li>Free shipping on orders over ₹999</li>
          <li>Currently shipping across India</li>
        </ul>
      </section>

      {/* Returns */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#E71665] mb-2">Returns & Exchanges</h2>
        <p>
          Not satisfied with your purchase? No problem!
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Easy 7-day return policy</li>
          <li>Item must be unused, with tags and original packaging</li>
          <li>Refunds are processed within 5–7 business days after return approval</li>
          <li>To initiate a return, email us at <strong>returns@hallexy.com</strong></li>
        </ul>
      </section>
    </div>
  );
};

export default HelpCenter;
