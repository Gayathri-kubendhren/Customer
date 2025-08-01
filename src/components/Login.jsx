import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setForm({ email: '', password: '' });
    setError('');
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError('Please enter email and password');
      return;
    }

    try {
      // ✅ Login from Customer Portal (PORT 5000)
      const res = await axios.post('http://localhost:5000/api/userauth/login', form);
      const token = res.data.token;
      localStorage.setItem('token', token);

      // ✅ Decode JWT token to extract user info
      const decoded = JSON.parse(atob(token.split('.')[1]));
      const user = {
        first_name: decoded.first_name || '',
        last_name: decoded.last_name || '',
        email: decoded.email,
      };

      // ✅ Save user in localStorage
      localStorage.setItem('user', JSON.stringify(user));

      // ✅ Add user to Admin Portal's DB (PORT 4000)
      

      alert('✅ Login successful!');
      navigate('/profile');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Login failed. Please try again.');
    }
  };

  return (
    <div>
      
       <div className="w-full bg-[#E71665] text-white text-center py-2 text-sm font-semibold animate-pulse">
        🎉 Flat ₹300 OFF on First Order! Limited Time Only 🎉
      </div>

      <div className=" min-h-screen flex items-center justify-center ">
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 border p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-pink-700">Customer Login</h2>
      {error && <p className="text-red-600 mb-2 text-center">{error}</p>}

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 border mb-3 rounded"
        required
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full p-2 border mb-4 rounded"
        required
      />

      <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
        Login
      </button>

      <p className="text-sm text-center mt-3 text-blue-600">
        <Link to="/profile" className="underline">Forgot Password?</Link>
      </p>
    </form>
    </div>
    </div>
  );
};

export default Login;
