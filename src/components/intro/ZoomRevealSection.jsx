import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const QUOTE_LINES = ["Quand la Méditerranée,", "rencontre la nuit"];

export default function ZoomRevealSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const textEl = textRef.current;
    if (!section || !textEl) return;

    const chars = textEl.querySelectorAll('.char');
    charsRef.current = chars;
    gsap.set(chars, { opacity: 0.15 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'center center',
        end: '+=120%',
        pin: true,
        scrub: 1,
      },
    });
    tl.to(chars, {
      opacity: 1,
      duration: 1,
      ease: 'none',
      stagger: 0.03,
    });
    tl.to(textEl, { opacity: 0, scale: 1.15, duration: 0.5 }, '+=0.2');

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="zoom-reveal-section min-h-screen bg-[#050505] flex items-center justify-center px-6 py-20 relative"
    >
      {/* Dégradé en bas pour adoucir la transition vers le hero */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(5,5,5,0.4) 35%, #050505 100%)',
        }}
      />
      <p
        ref={textRef}
        className="opacity-reveal font-serif text-3xl md:text-5xl lg:text-6xl text-center text-white max-w-4xl leading-tight"
      >
        {QUOTE_LINES.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.split('').map((char, i) => (
              <span key={`${lineIndex}-${i}`} className="char inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        ))}
      </p>
    </section>
  );
}
