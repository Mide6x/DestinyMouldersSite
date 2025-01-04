import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
     <div className="logo">
  <img src="/logo.png" alt="School Logo" className="logo-img" />
  <h1>Great Destiny Moulders</h1>
</div>
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