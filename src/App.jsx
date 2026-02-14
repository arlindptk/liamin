import { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/layout';
import HomeView from './views/HomeView';
import MenuView from './views/MenuView';
import ReservationView from './views/ReservationView';
import PrivatisationView from './views/PrivatisationView';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState('entrees');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrolled = scrollY > 50;
  const introScrollThreshold = typeof window !== 'undefined' ? window.innerHeight * 2.7 : 0;
  const hideNavDuringIntro = currentPage === 'home' && scrollY < introScrollThreshold;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans text-white bg-[#050505] min-h-screen overflow-x-hidden max-w-[100vw]">
      <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navTo={navTo} hidden={hideNavDuringIntro} />

      <main>
        {currentPage === 'home' && <HomeView navTo={navTo} />}
        {currentPage === 'menu' && <MenuView activeCategory={activeCategory} setActiveCategory={setActiveCategory} />}
        {currentPage === 'privatisation' && <PrivatisationView navTo={navTo} />}
        {currentPage === 'reservation' && <ReservationView />}
      </main>

      <Footer />
    </div>
  );
}
