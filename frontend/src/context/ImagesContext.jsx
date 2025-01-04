import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect } from 'react';

const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState({
    logo: null,
    building: null,
    creche: null,
    preschool: null,
    nursery: null,
    kindergarten: null,
    primary: null,
    afterSchool: null
  });

  const fetchAllImages = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/images/all');
      if (!response.ok) throw new Error('Failed to fetch images');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchAllImages();
  }, []);

  return (
    <ImagesContext.Provider value={{ images, fetchAllImages }}>
      {children}
    </ImagesContext.Provider>
  );
};

ImagesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useImages = () => useContext(ImagesContext); 