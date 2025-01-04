import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/admission">Admission</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/admin">Admin Login</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📍 Archbishop Vining Memorial Church Cathedral, Oba Akinjobi Way, GRA, Ikeja</p>
          <p>📞 08062910315, 08062948130</p>
          <p>📞 08023160711, 08062766051</p>
          <p>📧 info@greatdestinymoulders.com</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Great Destiny Moulders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 