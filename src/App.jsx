import { Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import MissionVision from './pages/MissionVision';

// Simple ScrollToTop component
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallbacks */}
        <Route path="/why-us" element={<Home />} />
        <Route path="*" element={<div className="container mx-auto px-4 py-20 text-center text-xl text-gray-500">Page not found</div>} />
      </Routes>
    </Layout>
  )
}

export default App
