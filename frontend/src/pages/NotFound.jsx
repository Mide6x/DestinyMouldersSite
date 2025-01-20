import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar';

const NotFound = () => {
  return (
    <div><Navbar />
      <ScrollProgress />
    <div className="not-found">
      
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <a href="/" className="home-link">Go Back Home</a>
    </div>
    </div>
  );
};

export default NotFound; 