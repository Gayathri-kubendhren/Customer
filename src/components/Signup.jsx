import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { first_name, last_name, email, password } = form;

    // ✅ Check if all fields are filled
    if (!first_name || !last_name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // ✅ Check password length
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    // ✅ Check strong password pattern
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!strongPasswordRegex.test(password)) {
      setError('Password must include uppercase, lowercase letters, and a number');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/userauth/register', form);
      alert('Registration successful!');
      localStorage.setItem('user', JSON.stringify({ first_name, last_name, email }));
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
   <div >
    
       <div className="w-full bg-[#E71665] text-white text-center py-2 text-sm font-semibold animate-pulse">
        🎉 Flat ₹300 OFF on First Order! Limited Time Only 🎉
      </div>

      <div className=" min-h-screen flex items-center justify-center  ">
        
   <div  >
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10  border p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Your Account</h2>
      {error && <p className="text-red-600 mb-2 text-center">{error}</p>}
      <input
        name="first_name"
        placeholder="First Name"
        onChange={handleChange}
        className="w-full p-2 border mb-3 rounded"
      />
      <input
        name="last_name"
        placeholder="Last Name"
        onChange={handleChange}
        className="w-full p-2 border mb-3 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full p-2 border mb-3 rounded"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full p-2 border mb-4 rounded"
      />
      <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded">
        Register
      </button>
      <p className="text-center mt-4 text-sm">
        Already have an account?{' '}
        <Link to="/login" className="text-pink-600 underline">
          Login
        </Link>
      </p>
    </form>
    </div>
    </div>
    </div>
  );
};

export default Signup;
