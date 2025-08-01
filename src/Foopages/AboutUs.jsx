import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    
    <div className="max-w-7xl mx-auto p-6 text-gray-800">
        <div className="flex justify-end mb-6">
        <Link to="/" className="text-[#E71665] underline hover:text-pink-700 text-lg">
          ← Back to Home
        </Link>
    </div>
      <h1 className="text-4xl font-bold mb-6 text-center text-[#E71665]">About Us</h1>

      {/* Who are we? */}
      <section className="mb-8">
         
        <h2 className="text-2xl font-semibold text-[#E71665] mb-2">Who are we?</h2>
        <p className="mb-2">
          Welcome to <strong>Online Shop</strong> — your ultimate destination for fashion that inspires confidence and creativity.
          We are a passionate team dedicated to delivering stylish, comfortable, and affordable clothing for everyone.
        </p>
        <p>
          Our collections span <strong>ethnic wear, western wear, daily essentials, and occasion outfits</strong> — all curated
          with quality and diversity in mind. Whether you're dressing up for a wedding or looking for your everyday casual fit, 
          Hallexy has you covered.
        </p>
      </section>

      {/* Careers */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#E71665] mb-2">Careers</h2>
        <p className="mb-2">
          Want to be part of a creative, fast-moving fashion tech company? We're hiring! 
          Hallexy is home to innovators, designers, engineers, and thinkers who love fashion and e-commerce.
        </p>
        <ul className="list-disc pl-6 mb-2">
          <li>Work in a flexible, remote-friendly environment</li>
          <li>Get access to exclusive staff discounts</li>
          <li>Build meaningful solutions that impact customers worldwide</li>
        </ul>
        <p>
          Send your resume and portfolio to <strong>careers@hallexy.com</strong> — we’d love to meet you!
        </p>
      </section>

      {/* Press */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#E71665] mb-2">Press</h2>
        <p className="mb-2">
          Hallexy is proud to be recognized by fashion media for our bold designs and seamless shopping experience.
          We've been featured in:
        </p>
        <ul className="list-disc pl-6 mb-2">
          <li><em>Vogue India</em> – "Hallexy: The Next-Gen Digital Fashion House"</li>
          <li><em>Elle</em> – "Why Everyone’s Talking About Hallexy’s Sustainable Ethnic Collection"</li>
          <li><em>Fashion Today</em> – "Hallexy Sets a New Benchmark for Online Retail"</li>
        </ul>
        <p>For media kits or interview requests, reach out to us at <strong>press@hallexy.com</strong>.</p>
      </section>

      {/* Sustainability */}
      <section>
        <h2 className="text-2xl font-semibold text-[#E71665] mb-2">Sustainability</h2>
        <p className="mb-2">
          At Hallexy, we don’t just care about fashion — we care about the future. We aim to be a brand with purpose, driven by sustainability and ethics.
        </p>
        <ul className="list-disc pl-6 mb-2">
          <li>Eco-conscious packaging made from recycled materials</li>
          <li>Carbon offset shipping partnerships</li>
          <li>Fabrics sourced from responsible and ethical suppliers</li>
          <li>Minimal-waste manufacturing and recycling initiatives</li>
        </ul>
        <p>
          By choosing Hallexy, you're not only looking great — you’re making a positive impact on the planet.
        </p>
      </section>

        <div className="w-full bg-[#E71665] text-white text-center py-2 text-sm font-semibold animate-pulse">
        🎉 Flat ₹300 OFF on First Order! Limited Time Only 🎉
      </div>


    </div>
  );
};

export default AboutUs;
