import { MENU_CATEGORIES, FULL_MENU } from '../data/menu';

export default function MenuView({ activeCategory, setActiveCategory }) {
  return (
    <div className="pt-32 pb-32 bg-[#050505] min-h-screen">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-4">Le Menu</h2>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto mb-6"></div>
          <p className="text-gray-400 uppercase tracking-[0.3em] text-xs">Tradition Grecque & Excellence Belge</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20 sticky top-24 z-30 py-4 bg-[#050505]/80 backdrop-blur-md">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-3 px-6 py-3 font-serif text-[10px] tracking-[0.2em] uppercase transition-all duration-500 border ${
                activeCategory === cat.id
                  ? 'bg-[#C5A059] text-black border-[#C5A059]'
                  : 'bg-transparent text-gray-500 border-white/10 hover:border-[#C5A059] hover:text-[#C5A059]'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-1 gap-16 max-w-5xl mx-auto animate-fade-in-up">
          {FULL_MENU[activeCategory].map((section, sIdx) => (
            <div key={sIdx} className="bg-white/5 p-8 md:p-12 border border-white/5">
              <h3 className="font-serif text-2xl text-[#C5A059] mb-12 text-center tracking-widest uppercase border-b border-[#C5A059]/30 pb-4 inline-block mx-auto w-full">
                {section.group}
              </h3>
              <div className={`grid gap-x-16 gap-y-10 ${section.group === 'Sauces & Accompagnements' ? 'grid-cols-1 max-w-2xl mx-auto' : 'md:grid-cols-2'}`}>
                {section.items.map((item, iIdx) => (
                  <div key={iIdx} className="group relative flex flex-col border-b border-white/5 pb-4 hover:border-[#C5A059]/50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 mb-2">
                      <h4 className="font-serif text-lg text-white group-hover:text-[#C5A059] transition-colors duration-500 shrink-0">
                        {item.name}
                      </h4>
                      {item.price !== '—' && (
                        <span className="font-serif text-[#C5A059] shrink-0 sm:text-right">{item.price}</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm font-light italic leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
