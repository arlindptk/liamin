import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ZOOM_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80', alt: 'Cuisine grecque', layer: 2 },
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80', alt: 'Grillades', layer: 2 },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80', alt: 'Grèce', layer: 1 },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80', alt: 'Méditerranée', layer: 2 },
  { src: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&q=80', alt: 'Plats', layer: 3 },
  { src: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80', alt: 'Huile d\'olive', layer: 1 },
  { src: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80', alt: 'Côte grecque', layer: 3 },
  { src: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80', alt: 'Fruits de mer', layer: 3 },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80', alt: 'Cuisine', layer: 1 },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', alt: 'Dégustation', layer: 2 },
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80', alt: 'Salade', layer: 2 },
  { src: 'https://images.unsplash.com/photo-1636654931290-418d20865e03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Méditerranée', layer: 1 },
];

const IMAGE_POSITIONS = [
  { left: '15vw', top: '21%', width: '11.5vw' },
  { left: '29%', top: '15%', width: '9.2vw' },
  { left: '36%', top: '3%', width: '11.5vw' },
  { right: '30%', left: 'auto', top: '11%', width: '7.6vw' },
  { right: '7%', left: 'auto', top: '28%', width: '13.2vw' },
  { right: '3.5%', left: 'auto', bottom: '32%', top: 'auto', width: '4.7vw' },
  { left: '16%', bottom: '13.5%', top: 'auto', width: '10.5vw' },
  { left: '29%', bottom: '24%', top: 'auto', width: '5.9vw' },
  { left: '7.5%', bottom: '46%', top: 'auto', width: '5.2vw' },
  { right: '15%', left: 'auto', bottom: '5.5%', top: 'auto', width: '15vw' },
  { right: '38%', left: 'auto', bottom: '10.5%', top: 'auto', width: '8.3vw' },
  { right: '4%', left: 'auto', top: '5%', width: '6.1vw' },
];

export default function ZoomIntro() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const zoomItems = containerRef.current?.querySelectorAll('.zoom-item');
      const heading = headingRef.current;
      if (!containerRef.current || !zoomItems?.length || !heading) return;

      gsap.set(zoomItems, { opacity: 0.35, z: -320, force3D: true });
      gsap.set(heading, { opacity: 0, z: -800, xPercent: -50, yPercent: -50, force3D: true });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=150%',
            pin: true,
            scrub: 1,
          },
        })
        .to('.zoom-item[data-layer="3"]', { opacity: 1, z: 420, ease: 'power1.inOut' }, 0)
        .to('.zoom-item[data-layer="2"]', { opacity: 1, z: 320, ease: 'power1.inOut' }, 0)
        .to('.zoom-item[data-layer="1"]', { opacity: 1, z: 220, ease: 'power1.inOut' }, 0)
        .to(heading, { opacity: 1, z: 50, xPercent: -50, yPercent: -50, ease: 'power1.inOut' }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="zoom-container h-screen w-full overflow-hidden relative bg-[#050505]"
      style={{ perspective: '100vh' }}
    >
      <h1
        ref={headingRef}
        className="zoom-heading font-serif text-5xl md:text-7xl lg:text-8xl text-white text-center whitespace-nowrap absolute left-1/2 top-1/2 z-0"
        style={{ margin: 0 }}
      >
        LIAMIN
      </h1>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em]">Défiler</span>
        <div className="scroll-mouse flex flex-col items-center">
          <svg
            width="26"
            height="40"
            viewBox="0 0 26 40"
            fill="none"
            className="text-[#C5A059]"
            aria-hidden
          >
            <rect
              x="1"
              y="1"
              width="24"
              height="38"
              rx="12"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="13"
              cy="12"
              r="2"
              fill="currentColor"
              className="scroll-mouse-wheel"
            />
          </svg>
          <div className="scroll-mouse-arrow mt-1 flex flex-col items-center gap-0.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#C5A059]" aria-hidden>
              <path d="M6 2v8M3 7l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {ZOOM_IMAGES.map((img, i) => (
        <div
          key={i}
          className="zoom-item absolute transform-origin-center max-h-[300px] max-w-[300px]"
          data-layer={img.layer}
          style={{
            ...IMAGE_POSITIONS[i],
            opacity: img.layer === 3 ? 0.7 : img.layer === 2 ? 0.5 : 0.35,
            zIndex: img.layer,
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-auto object-cover rounded-sm brightness-125 contrast-105"
          />
        </div>
      ))}
    </div>
  );
}
