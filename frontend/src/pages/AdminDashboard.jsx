import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imageCompression from 'browser-image-compression';
import LoadingSpinner from '../components/LoadingSpinner';
import Toast from '../components/Toast';
import ProgressBar from '../components/ProgressBar';
import '../styles/admin.css';

const AdminDashboard = () => {
  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
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

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setError('');
      try {
        validateImage(file);
        const compressedFile = await compressImage(file);
        setLogo(compressedFile);
        setPreview(URL.createObjectURL(compressedFile));
      } catch (error) {
        setError(error.message);
        showToast(error.message, 'error');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('logo', logo);

    try {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:5001/api/upload/logo');
      xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('adminToken')}`);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(progress);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          showToast('Logo uploaded successfully!');
          setLogo(null);
          setPreview('');
        } else {
          throw new Error('Upload failed');
        }
        setLoading(false);
      };

      xhr.onerror = () => {
        throw new Error('Network error occurred');
      };

      xhr.send(formData);
    } catch (error) {
      setError(error.message);
      showToast(error.message, 'error');
      setLoading(false);
    }
  };

  return (
    <div className="admin-dashboard">
      {toast.show && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast({ ...toast, show: false })} 
        />
      )}
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={() => {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
        }} className="logout-btn">
          Logout
        </button>
      </div>
      
      <div className="upload-section">
        <h2>Upload School Logo</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="logo-preview">
            {preview && <img src={preview} alt="Logo Preview" />}
          </div>
          <input 
            type="file" 
            onChange={handleLogoUpload}
            accept="image/*"
            disabled={loading}
          />
          {loading && <ProgressBar progress={uploadProgress} />}
          <button 
            type="submit" 
            disabled={!logo || loading}
            className={loading ? 'loading' : ''}
          >
            {loading ? 'Uploading...' : 'Upload Logo'}
          </button>
        </form>
      </div>
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default AdminDashboard; 