import { Menu, X } from 'lucide-react';

export default function Navbar({ scrolled, isMenuOpen, setIsMenuOpen, navTo }) {
  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <button onClick={() => navTo('home')} className="font-serif text-3xl tracking-[0.3em] font-bold text-white group outline-none">
            LIA<span className="text-[#C5A059] group-hover:text-white transition-colors">MIN</span>
          </button>

          <div className="hidden md:flex items-center gap-12 font-serif text-[10px] tracking-[0.3em] uppercase">
            <button onClick={() => navTo('home')} className="hover:text-[#C5A059] transition-all outline-none">Concept</button>
            <button onClick={() => navTo('menu')} className="hover:text-[#C5A059] transition-all outline-none">La Carte</button>
            <button onClick={() => navTo('reservation')} className="border border-[#C5A059] text-[#C5A059] px-6 py-2 hover:bg-[#C5A059] hover:text-black transition-all outline-none">Réserver</button>
          </div>

          <button className="md:hidden text-[#C5A059]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-10 animate-fade-in">
          <button onClick={() => navTo('home')} className="font-serif text-3xl text-white">Concept</button>
          <button onClick={() => navTo('menu')} className="font-serif text-3xl text-white">La Carte</button>
          <button onClick={() => navTo('reservation')} className="font-serif text-3xl text-[#C5A059]">Réserver</button>
          <button onClick={() => setIsMenuOpen(false)} className="mt-12 text-white/40 uppercase text-[10px] tracking-widest flex items-center gap-2">Fermer <X size={14} /></button>
        </div>
      )}
    </>
  );
}
