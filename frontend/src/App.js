import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/product/ProductPage';
import SignupPage from './landing_page/signup/SignupPage';
import SupportPage from './landing_page/support/SupportPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound';
import ScrollTop from './ScrollTop'; // Optional (for scroll reset)
import PhilosophiesPage from './landing_page/philosophies/PholosophiesPage';
import MediaPage from './landing_page/media/MediaPage';

function App() {
  return (
    <Router>
      <ScrollTop /> {/* Add this if you want auto-scroll-to-top */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/philosophies" element={<PhilosophiesPage/>}/>
        <Route path="/media" element={<MediaPage/>}/>


        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; 