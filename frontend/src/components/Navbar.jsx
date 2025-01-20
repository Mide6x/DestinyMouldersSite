import { Link } from 'react-router-dom';
import { useImages } from '../hooks/useImages';

const Navbar = () => {
  const { images } = useImages();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={images.logo?.imageUrl} alt="Logo" />
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