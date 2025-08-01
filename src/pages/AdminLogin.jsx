import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check against hardcoded credentials
    if (email === "admin@example.com" && password === "admin123") {
      // Simulate fake JWT token
      const fakeToken = "fake-jwt-token-for-admin";
      
      localStorage.setItem("adminToken", fakeToken);
      alert("✅ Admin successfully logged in!");
      navigate("/dashboard"); // Redirect to admin dashboard
    } else {
      setError("Login failed: Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96 mb-28"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">
          Admin Login
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Admin Email"
          className="w-full mb-4 px-3 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
