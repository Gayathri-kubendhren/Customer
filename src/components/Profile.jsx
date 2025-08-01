// ✅ Profile.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState({ first_name: '', last_name: '', email: '' });
  const [passwordForm, setPasswordForm] = useState({ current: '', newPass: '', confirm: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (!token || !user) return navigate('/login');
    setProfile(user);
  }, [navigate]);

  const handleProfileChange = (e) => {
    const updated = { ...profile, [e.target.name]: e.target.value };
    setProfile(updated);
    localStorage.setItem('user', JSON.stringify(updated));
  };

  const handleSaveProfile = async (e) => {
  e.preventDefault();
  if (profile.first_name && profile.last_name && profile.email) {
    try {
      // ✅ Send user info to Admin Portal (PORT 4000)
      await axios.post('http://localhost:4000/api/customers/add', {
        first_name: profile.first_name,
        last_name: profile.last_name,
        email: profile.email,
        status: 'Active',
      });
      setMessage('✅ Profile Updated and Synced with Admin✨.');
    } catch (err) {
      setMessage('❌ Failed to sync with Admin Portal.');
      console.error(err);
    }
  } else {
    setMessage('⚠️ First name, Last name, and Email are required.');
  }
};


  const handlePasswordChange = (e) => {
    e.preventDefault();
    const { current, newPass, confirm } = passwordForm;
    if (!current || !newPass || !confirm) {
      setMessage('⚠️ All password fields are required.');
      return;
    }
    if (newPass !== confirm) {
      setMessage('❌ New passwords do not match.');
      return;
    }
    setMessage('✅ Password change simulated.');
    setPasswordForm({ current: '', newPass: '', confirm: '' });
  };

  return (
    <div>
        <div>
          <div className="w-full bg-[#E71665] text-white text-center py-2 text-sm font-semibold animate-pulse">
        🎉 Flat ₹300 OFF on First Order! Limited Time Only 🎉
      </div>
        </div>
    
    <div className="max-w-md mx-auto mt-5 border p-6 rounded shadow-lg bg-gradient-to-br from-pink-100 to-pink-100  ">
      <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
      {message && <div className="bg-blue-100 text-blue-700 p-3 mb-4 rounded text-center font-medium">{message}</div>}

      <form onSubmit={handleSaveProfile}>
        <input name="first_name" value={profile.first_name} onChange={handleProfileChange} className="w-full p-2 border mb-3 rounded" placeholder="First Name" />
        <input name="last_name" value={profile.last_name} onChange={handleProfileChange} className="w-full p-2 border mb-3 rounded" placeholder="Last Name" />
        <input name="email" value={profile.email} onChange={handleProfileChange} className="w-full p-2 border mb-4 rounded" placeholder="Email" />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Save Changes</button>
      </form>

      <hr className="my-4" />

      <form onSubmit={handlePasswordChange}>
        <p className="text-lg font-semibold mb-2">Change Password:</p>
        <input type="password" name="current" value={passwordForm.current} onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })} placeholder="Current Password" className="w-full p-2 border mb-3 rounded" />
        <input type="password" name="newPass" value={passwordForm.newPass} onChange={(e) => setPasswordForm({ ...passwordForm, newPass: e.target.value })} placeholder="New Password" className="w-full p-2 border mb-3 rounded" />
        <input type="password" name="confirm" value={passwordForm.confirm} onChange={(e) => setPasswordForm({ ...passwordForm, confirm: e.target.value })} placeholder="Confirm Password" className="w-full p-2 border mb-4 rounded" />
        <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">Change Password</button>
        <div className="text-center mt-4">
          <Link to="/" className="text-blue-600 underline hover:text-blue-800">⬅️ Back to Home</Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Profile;
