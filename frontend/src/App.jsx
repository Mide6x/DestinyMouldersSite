import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProgramsPage from './pages/Programs';
import Leadership from './components/Leadership';
import NotFound from './pages/NotFound';
import './styles/main.css';
import './styles/navbar.css';
import './styles/hero.css';
import { ImagesProvider } from './context/ImagesContext';

function App() {
  return (
    <ImagesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ImagesProvider>
  );
}

export default App;
