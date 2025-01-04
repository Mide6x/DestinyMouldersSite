const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Visit Us</h3>
          <p>📍 Archbishop Vining Memorial Church Cathedral</p>
          <p>Oba Akinjobi Way, GRA, Ikeja</p>
          
          <h3>Enquiries</h3>
          <p>📞 08062910315, 08062948130</p>
          <p>📞 08023160711, 08062766051</p>
          
          <div className="school-hours">
            <h4>School Hours</h4>
            <p>Monday - Friday: 7:30 AM - 3:30 PM</p>
            <p>After School: 3:30 PM - 5:30 PM</p>
          </div>
        </div>
        
        <div className="admission-info">
          <h3>Admission Status</h3>
          <p className="highlight">Admission is in Progress!</p>
          <button className="register-btn">Register Now</button>
        </div>
      </div>
    </section>
  );
};

export default Contact; 