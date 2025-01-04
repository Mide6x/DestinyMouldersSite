const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/admission">Admission</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📍 Archbishop Vining Memorial Church Cathedral, Oba Akinjobi Way, GRA, Ikeja</p>
          <p>📞 08062910315, 08062948130</p>
          <p>📞 08023160711, 08062766051</p>
          <p>📧 info@brightstarsacademy.com</p>
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
        <p>&copy; 2024 Bright Stars Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 