import { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/layout';
import HomeView from './views/HomeView';
import MenuView from './views/MenuView';
import ReservationView from './views/ReservationView';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('entrees');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans text-white bg-[#050505] min-h-screen">
      <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navTo={navTo} />

      <main>
        {currentPage === 'home' && <HomeView navTo={navTo} />}
        {currentPage === 'menu' && <MenuView activeCategory={activeCategory} setActiveCategory={setActiveCategory} />}
        {currentPage === 'reservation' && <ReservationView />}
      </main>

      <Footer />
    </div>
  );
}
