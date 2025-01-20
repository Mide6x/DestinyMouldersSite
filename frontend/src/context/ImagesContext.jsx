import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

// Import all images
import logo from '../assets/logo.png';
import creche from '../assets/images/sections/preschool.jpeg';
import preschool from '../assets/images/sections/preschool.jpeg';
import nursery from '../assets/images/sections/nursery.jpeg';
import kindergarten from '../assets/images/sections/preschool.jpeg';
import primary from '../assets/images/sections/primary.jpeg';
import afterSchool from '../assets/images/sections/afterschool 2.jpeg';

export const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
  const [images] = useState({
    logo: { imageUrl: logo },
    creche: { imageUrl: creche },
    preschool: { imageUrl: preschool },
    nursery: { imageUrl: nursery },
    kindergarten: { imageUrl: kindergarten },
    primary: { imageUrl: primary },
    afterSchool: { imageUrl: afterSchool }
  });

  return (
    <ImagesContext.Provider value={{ images }}>
      {children}
    </ImagesContext.Provider>
  );
};

ImagesProvider.propTypes = {
  children: PropTypes.node.isRequired,
}; 