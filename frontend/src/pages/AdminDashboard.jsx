import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUploadCloud, FiTrash2, FiLogOut } from 'react-icons/fi';
import imageCompression from 'browser-image-compression';
import Toast from '../components/Toast';
import { apiCall } from '../utils/api';

const SECTIONS = {
  logo: 'School Logo',
  building: 'School Building',
  creche: 'Creche',
  preschool: 'Preschool',
  nursery: 'Nursery',
  kindergarten: 'Kindergarten',
  primary: 'Primary',
  afterSchool: 'After School'
};

const AdminDashboard = () => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const navigate = useNavigate();

  const fetchAllImages = useCallback(async () => {
    try {
      const data = await apiCall('/images/all');
      setImages(data);
    } catch (error) {
      showToast('Error fetching images: ' + error.message, 'error');
    }
  }, []);

  useEffect(() => {
    fetchAllImages();
  }, [fetchAllImages]);

  const handleFileSelect = async (event, section) => {
    const file = event.target.files[0];
    if (file) {
      try {
        validateImage(file);
        const compressedFile = await compressImage(file);
        await handleUpload(compressedFile, section);
      } catch (error) {
        showToast(error.message, 'error');
      }
    }
  };

  const handleUpload = async (file, section) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('image', file);
    formData.append('section', section);

    try {
      await apiCall('/upload/image', {
        method: 'POST',
        body: formData
      });
      showToast('Image uploaded successfully!');
      await fetchAllImages();
    } catch (error) {
      showToast(error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (section) => {
    if (!window.confirm(`Are you sure you want to delete the ${SECTIONS[section]} image?`)) return;

    setLoading(true);
    try {
      await apiCall(`/images/${section}`, {
        method: 'DELETE'
      });
      showToast('Image deleted successfully!');
      await fetchAllImages();
    } catch (error) {
      showToast(error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const validateImage = (file) => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if (!validTypes.includes(file.type)) {
      throw new Error('Invalid file type. Please upload a JPEG, PNG, or GIF.');
    }

    if (file.size > maxSize) {
      throw new Error('File size too large. Maximum size is 5MB.');
    }
  };

  const compressImage = async (file) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024
    };
    try {
      return await imageCompression(file, options);
    } catch (error) {
      console.error('Compression failed:', error);
      return file;
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="admin-dashboard">
      <Toast message={toast.message} type={toast.type} 
        onClose={() => setToast({ ...toast, show: false })} />
      
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={() => {
          localStorage.removeItem('adminToken');
          navigate('/admin');
        }} className="logout-btn">
          <FiLogOut /> Logout
        </button>
      </div>
      
      <div className="sections-grid">
        {Object.entries(SECTIONS).map(([key, title]) => (
          <div key={key} className="section-card">
            <h3>{title}</h3>
            <div className="image-preview">
              {images[key] ? (
                <div className="image-container">
                  <img src={`https://destinymoulderssite.onrender.com${images[key].imageUrl}`} alt={title} />
                  <div className="image-actions">
                    <label className="action-btn upload-btn">
                      <FiUploadCloud />
                      <input
                        type="file"
                        onChange={(e) => handleFileSelect(e, key)}
                        accept="image/*"
                        disabled={loading}
                      />
                    </label>
                    <button 
                      className="action-btn delete-btn"
                      onClick={() => handleDelete(key)}
                      disabled={loading}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ) : (
                <label className="upload-zone">
                  <input
                    type="file"
                    onChange={(e) => handleFileSelect(e, key)}
                    accept="image/*"
                    disabled={loading}
                  />
                  <FiUploadCloud className="upload-icon" />
                  <p>Click to upload</p>
                </label>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard; 