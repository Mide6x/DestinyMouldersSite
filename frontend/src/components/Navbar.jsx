import { Link } from 'react-router-dom';
import { useImages } from '../context/ImagesContext';

const Navbar = () => {
  const { images } = useImages();

  return (
    <nav className="navbar">
      <div className="logo">
        {images.logo ? (
          <img 
            src={`http://localhost:5001${images.logo.imageUrl}`} 
            alt="School Logo" 
          />
        ) : (
          <span>Great Destiny Moulders</span>
        )}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/leadership">Leadership</Link></li>
        <li><Link to="/programs">Academics</Link></li>
        <li><Link to="/facilities">Facilities</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar; 