// frontend/src/pages/Setting.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Setting = () => {
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [primaryColor, setPrimaryColor] = useState('#FF5733');
  const [secondaryColor, setSecondaryColor] = useState('#00AACC');
  const [fontFamily, setFontFamily] = useState('Roboto');
  const [customHTML, setCustomHTML] = useState('');

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
    setLogoPreview(URL.createObjectURL(file));
  };

  const handleSaveSettings = async () => {
    const formData = new FormData();
    if (logo) formData.append('logo', logo);
    else formData.append('existingLogo', logoPreview); // keep old one

    formData.append('primaryColor', primaryColor);
    formData.append('secondaryColor', secondaryColor);
    formData.append('fontFamily', fontFamily);
    formData.append('customHTML', customHTML);

    try {
      await axios.post('http://localhost:4000/api/settings', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Settings saved successfully!');
    } catch (err) {
      console.error(err);
      alert('Error saving settings');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-pink-700">Customer Portal Branding Settings</h2>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Logo Upload:</label>
        <input type="file" onChange={handleLogoChange} />
        {logoPreview && (
          <div className="mt-3">
            <img src={logoPreview} alt="Logo Preview" className="h-20 object-contain" />
          </div>
        )}
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Primary Color:</label>
        <input
          type="color"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
          className="w-16 h-10 p-1 border rounded"
        />
        <span className="ml-3">{primaryColor}</span>
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Secondary Color:</label>
        <input
          type="color"
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
          className="w-16 h-10 p-1 border rounded"
        />
        <span className="ml-3">{secondaryColor}</span>
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Font Family:</label>
        <select
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Roboto">Roboto</option>
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Custom HTML Block for Dashboard:</label>
        <textarea
          value={customHTML}
          onChange={(e) => setCustomHTML(e.target.value)}
          rows="6"
          className="w-full p-3 border rounded"
          placeholder="<h1>Welcome to the Dashboard</h1>"
        ></textarea>
      </div>

      <button
        onClick={handleSaveSettings}
        className="px-6 py-2 bg-pink-600 text-white font-semibold rounded hover:bg-pink-700"
      >
        Save Settings
      </button>
    </div>
  );
};

export default Setting;
