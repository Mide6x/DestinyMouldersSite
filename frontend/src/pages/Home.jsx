import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

const Home = () => {
  return (
    <div className="home">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Footer />
    </div>
  );
};

export default Home;
