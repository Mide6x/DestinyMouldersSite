import { useState } from 'react';

const AdminDashboard = () => {
  const [section, setSection] = useState('');

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    formData.append('section', section);

    try {
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Upload successful:', data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="upload-section">
        <h2>Upload Images</h2>
        <select value={section} onChange={(e) => setSection(e.target.value)}>
          <option value="">Select Section</option>
          <option value="hero">Hero Section</option>
          <option value="about">About Section</option>
          <option value="facilities">Facilities</option>
        </select>
        <input 
          type="file" 
          onChange={handleImageUpload}
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default AdminDashboard;