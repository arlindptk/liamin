import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Button } from '../components/ui';
import { Flame, Leaf, Heart, Sparkles } from 'lucide-react';
import BlazeIntro from '../components/intro/BlazeIntro';
import ZoomIntro from '../components/intro/ZoomIntro';
import ZoomRevealSection from '../components/intro/ZoomRevealSection';

export default function HomeView({ navTo }) {
  const [introPhase, setIntroPhase] = useState('blaze');
  const [refArt, inViewArt] = useInView();
  const [refHistoire, inViewHistoire] = useInView();
  const [refPiliers, inViewPiliers] = useInView();
  const [refAmbiance, inViewAmbiance] = useInView();
  const [refCta, inViewCta] = useInView();

  const piliers = [
    {
      icon: <Leaf size={28} className="text-[#C5A059]" />,
      title: 'Produits d’exception',
      text: 'Nous sélectionnons avec soin chaque ingrédient : huile d’olive, herbes de montagne, poissons et viandes d’origine contrôlée pour une carte fidèle à la Méditerranée.'
    },
    {
      icon: <Flame size={28} className="text-[#C5A059]" />,
      title: 'Une carte de saison',
      text: 'Nous faisons évoluer notre menu au fil des saisons et des arrivages. Poissons du jour, légumes de marché et viandes sélectionnées : l’essentiel pour une cuisine toujours fraîche et généreuse.'
    },
    {
      icon: <Heart size={28} className="text-[#C5A059]" />,
      title: 'L’art de recevoir',
      text: 'Chez Liamin, chaque soir est une occasion de vous faire voyager. Une équipe dévouée, une ambiance feutrée et un cadre raffiné pour des moments inoubliables.'
    },
    {
      icon: <Sparkles size={28} className="text-[#C5A059]" />,
      title: 'Tradition & modernité',
      text: 'Nous perpétuons les recettes de nos aïeux tout en les sublimant. Mezzés, mijotés et grillades se côtoient dans une carte généreuse et authentique.'
    }
  ];

  return (
    <div className="animate-fade-in bg-[#050505]">
      {/* ——— Zoom toujours en DOM ; BlazeIntro en overlay pour éviter le flash Hero ——— */}
      <ZoomIntro />
      <ZoomRevealSection />
      {introPhase === 'blaze' && (
        <BlazeIntro onComplete={() => setIntroPhase('zoom')} />
      )}

      {/* ——— Hero ——— */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=1920&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom opacity-60"
          alt="Restaurant Ambiance"
        />
        {/* Voile noir en haut : transition douce depuis la section texte */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #050505 0%, #050505 25%, rgba(5,5,5,0.85) 45%, rgba(5,5,5,0.5) 65%, transparent 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#050505] z-[11]" />
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <span className="text-[#C5A059] tracking-[0.5em] uppercase text-sm mb-6 block animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>Since 2025</span>
          <h1 className="font-serif text-7xl md:text-9xl text-white mb-8 tracking-tighter animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>LIAMIN</h1>
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-widest uppercase mb-12 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            Une expérience culinaire nocturne
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
            <Button variant="primary" onClick={() => navTo('menu')}>Découvrir la Carte</Button>
            <Button variant="outline" onClick={() => navTo('reservation')}>Réserver une Table</Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#C5A059] to-transparent"></div>
        </div>
      </section>

      {/* ——— L'Art de Recevoir ——— */}
      <section ref={refArt} className="py-32 bg-[#050505] border-y border-white/5">
        <div className={`max-w-4xl mx-auto px-6 text-center reveal-up ${inViewArt ? 'in-view' : ''}`}>
          <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-6 block">Notre philosophie</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-10">L'Art de Recevoir</h2>
          <div className="w-24 h-px bg-[#C5A059]/50 mx-auto mb-12 line-reveal-center" />
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
            Chaque ingrédient de notre carte a été sélectionné pour sa pureté et son authenticité. Du poulpe grillé à l’huile d’olive aux grillades de bœuf et d’agneau, nous vous invitons à redécouvrir les classiques helléniques dans un cadre d’exception.
          </p>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed italic max-w-2xl mx-auto">
            "La cuisine grecque est un voyage. Chez Liamin, nous en sommes les passeurs — entre tradition familiale et exigence contemporaine."
          </p>
        </div>
      </section>

      {/* ——— Notre Histoire ——— */}
      <section ref={refHistoire} className="py-32 bg-[#050505] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`grid md:grid-cols-2 gap-16 items-center reveal-up ${inViewHistoire ? 'in-view' : ''}`}>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80&fit=crop"
                alt="Cuisine et passion"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 text-[#C5A059] font-serif text-sm tracking-[0.3em] uppercase">La Bruyère · Depuis 2025</span>
            </div>
            <div className="space-y-6">
              <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em]">Notre histoire</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white">Une passion transmise</h2>
              <div className="w-20 h-px bg-[#C5A059]/50" />
              <p className="text-gray-400 text-lg leading-relaxed">
                Liamin est né de l’envie de faire vivre la cuisine méditerranéenne à La Bruyère. Depuis 2025, notre maison accueille les amateurs de saveurs sincères : mezzés préparés à la main, mijotés longuement en jarre, grillades maison et poissons choisis selon l’arrivage du jour.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Nous croyons que chaque repas doit être un moment de partage et d’évasion. C’est pourquoi nous veillons à ce que l’accueil, le cadre et l’assiette ne fassent qu’un — pour une expérience Liamin inoubliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Les piliers ——— */}
      <section ref={refPiliers} className="py-32 bg-[#050505] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-20 reveal-up ${inViewPiliers ? 'in-view' : ''}`}>
            <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 block">Ce qui nous distingue</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Les piliers de Liamin</h2>
            <div className="w-24 h-px bg-[#C5A059]/50 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {piliers.map((p, i) => (
              <div
                key={i}
                className={`reveal-up ${inViewPiliers ? 'in-view' : ''} reveal-up-delay-${(i % 4) + 1} bg-white/[0.03] border border-white/5 p-8 hover:border-[#C5A059]/30 transition-colors duration-500`}
              >
                <div className="mb-6">{p.icon}</div>
                <h3 className="font-serif text-xl text-white mb-4 tracking-wide">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Ambiance ——— */}
      <section ref={refAmbiance} className="py-0 bg-[#050505]">
        <div className={`max-w-7xl mx-auto px-6 reveal-up ${inViewAmbiance ? 'in-view' : ''}`}>
          <div className="relative aspect-[21/9] md:aspect-[3/1] rounded-sm overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop"
              alt="Ambiance du restaurant"
              className="absolute inset-0 w-full h-full object-cover animate-glow-pulse"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
            <div className="absolute inset-0 flex items-end justify-center md:justify-start pb-16 md:pb-20 md:pl-20">
              <div className="text-center md:text-left max-w-xl">
                <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 block">L’ambiance</span>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Une soirée comme nulle part ailleurs</h2>
                <p className="text-gray-400 text-sm md:text-base">
                  Lumière tamisée, service attentif et convivialité méditerranéenne : chaque détail est pensé pour que vous vous sentiez chez vous, dans un écrin de raffinement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— CTA final ——— */}
      <section ref={refCta} className="py-32 bg-[#050505] border-t border-white/5">
        <div className={`max-w-3xl mx-auto px-6 text-center reveal-up ${inViewCta ? 'in-view' : ''}`}>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Prêt à vivre l’expérience ?</h2>
          <p className="text-gray-400 text-lg mb-12">
            Découvrez notre carte, réservez votre table et laissez-vous embarquer pour une soirée inoubliable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="primary" onClick={() => navTo('menu')}>Voir la Carte</Button>
            <Button variant="outline" onClick={() => navTo('reservation')}>Réserver</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
