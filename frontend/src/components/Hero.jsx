import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPencil, faAppleWhole, faPuzzlePiece, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="doodles">
        <div className="doodle-item"><FontAwesomeIcon icon={faBook} className="doodle-icon" /></div>
        <div className="doodle-item"><FontAwesomeIcon icon={faPencil} className="doodle-icon" /></div>
        <div className="doodle-item"><FontAwesomeIcon icon={faAppleWhole} className="doodle-icon" /></div>
        <div className="doodle-item"><FontAwesomeIcon icon={faPuzzlePiece} className="doodle-icon" /></div>
        <div className="doodle-item"><FontAwesomeIcon icon={faStar} className="doodle-icon" /></div>
        <div className="doodle-item"><FontAwesomeIcon icon={faHeart} className="doodle-icon" /></div>
        <div className="alphabet">ABC</div>
        <div className="numbers">123</div>
      </div>
      <div className="hero-content">
        <h1>Welcome to Great Destiny Moulders</h1>
        <h2>Raising Godly and morally sound kids</h2>
        <p>Providing quality Montessori education in Ikeja since 2000</p>
        <button className="enroll-btn">Begin Your Child&apos;s Journey</button>
      </div>
    </div>
  );
};

export default Hero;