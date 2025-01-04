import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/logo');
        const data = await response.json();
        if (data && data.imageUrl) {
          setLogo(data);
        }
      } catch (error) {
        console.error('Error fetching logo:', error);
      }
    };

    fetchLogo();
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        {logo && (
          <img 
            src={`http://localhost:5001${logo.imageUrl}`} 
            alt={logo.altText || 'School Logo'} 
            className="logo-img"
          />
        )}
        <h1>Great Destiny Moulders</h1>
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/programs">Academics</Link></li>
        <li><Link to="/facilities">Facilities</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar; 