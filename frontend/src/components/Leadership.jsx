import rtRevImage from '../assets/rt-rev-odedeji.jpeg';
import drLydiaImage from '../assets/dr-lydia-odedeji.jpeg';
import mrsMercyImage from '../assets/mrs-mercy-adewole.jpeg';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/leadership.css';

const Leadership = () => {
  const leaders = [
    {
      name: 'Rt Rev James Olusola Odedeji',
      role: 'STAKEHOLDER/DIRECTOR',
      image: rtRevImage,
      description: 'As the visionary leader of Great Destiny Moulders, Rt Rev Odedeji brings spiritual guidance and educational excellence together, fostering an environment where children grow both in knowledge and character.'
    },
    {
      name: 'DR (MRS) LYDIA ODEDEJI',
      role: 'STAKEHOLDER/DIRECTOR',
      image: drLydiaImage,
      description: 'With a profound commitment to educational excellence, Dr. Lydia Odedeji helps shape our curriculum and approach to ensure every child receives the highest quality Montessori education while maintaining strong moral values.'
    },
    {
      name: 'MRS MERCY ADEWOLE',
      role: 'THE SCHOOL COORDINATOR',
      image: mrsMercyImage,
      description: 'Leading our day-to-day operations, Mrs. Adewole ensures that Great Destiny Moulders maintains its high standards in both academic excellence and character development for all our students.'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <section className="leadership-section">
          <div className="leadership-header">
            <h1>Our Leadership Team</h1>
            <p className="leadership-intro">
              Meet the dedicated leaders behind Great Destiny Moulders Nursery and Primary School, 
              committed to raising godly and morally sound children through quality education
            </p>
          </div>
          <div className="container">
            <div className="leadership-grid">
              {leaders.map((leader) => (
                <div className="leader-card" key={leader.name}>
                  <div className="leader-image">
                    <img src={leader.image} alt={leader.name} />
                    <div className="leader-overlay"></div>
                  </div>
                  <div className="leader-info">
                    <h3>{leader.name}</h3>
                    <div className="role-divider"></div>
                    <h4>{leader.role}</h4>
                    <p>{leader.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Leadership; 