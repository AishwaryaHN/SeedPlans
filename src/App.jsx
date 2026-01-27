import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import VolunteerForm from "./pages/VolunteerForm";
import './App.css';
import './styles/fonts.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CentersPage from './pages/CentersPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import BlogDetails from './pages/BlogDetails';

function App() {
  useEffect(() => {
    const fonts = [
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
    ];

    fonts.forEach(href => {
      const link = document.createElement('link');
      link.href = href;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    });
  }, []);

  return (
    <BrowserRouter>
       <ScrollToTop/>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/centers" element={<CentersPage/>}/>
        <Route path="/events" element={<EventsPage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/volunteer-form" element={<VolunteerForm />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
