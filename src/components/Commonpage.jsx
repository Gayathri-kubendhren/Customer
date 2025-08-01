import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CommonLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', {
        email,
        password,
      });

      const { token, role } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/customer');
      }
    } catch (err) {
      setErrorMsg('❗ Invalid email or password.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-[350px]">
        <h2 className="text-xl font-bold text-center text-pink-600 mb-4">Admin Login Panel</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 mb-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 mb-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
            Login
          </button>
        </form>
        {errorMsg && <p className="text-red-500 mt-3 text-center">{errorMsg}</p>}
      </div>
    </div>
  );
};

export default CommonLoginPage;
