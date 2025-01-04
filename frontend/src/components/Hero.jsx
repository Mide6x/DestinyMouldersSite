import { useImages } from '../context/ImagesContext';

const Hero = () => {
  const { images } = useImages();

  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Welcome to Great Destiny Moulders</h1>
          <h2>Raising Godly and morally sound kids</h2>
          <p>Providing quality Montessori education in Ikeja since 2000</p>
          <button className="enroll-btn">Begin Your Child&apos;s Journey</button>
        </div>
        <div className="hero-image">
          {images.building ? (
            <img 
              src={`http://localhost:5001${images.building.imageUrl}`} 
              alt="School Building" 
            />
          ) : (
            <div className="placeholder-image">
              School Building Image
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;