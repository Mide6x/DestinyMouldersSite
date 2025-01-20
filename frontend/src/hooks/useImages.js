import { useContext } from 'react';
import { ImagesContext } from '../context/ImagesContext';

export const useImages = () => useContext(ImagesContext); 