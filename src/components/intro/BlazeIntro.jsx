import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const WORD = 'LIAMIN';
const SUBTITLE = 'Une soirée qui change tout.';

export default function BlazeIntro({ onComplete }) {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const glowRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = lettersRef.current.filter(Boolean);
      const glow = glowRef.current;
      const subtitle = subtitleRef.current;
      if (!containerRef.current || !letters.length) return;

      gsap.set(letters, { opacity: 0, y: 60, scale: 0.6 });
      if (glow) gsap.set(glow, { opacity: 0, scale: 1.2 });
      if (subtitle) gsap.set(subtitle, { opacity: 0, y: 16 });

      const tl = gsap.timeline({ onComplete });

      // Entrée des lettres en "blaze" (stagger rapide)
      tl.to(letters, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        stagger: 0.06,
        ease: 'back.out(1.4)',
      });

      // Lueur dorée + sous-titre
      if (glow) {
        tl.to(glow, { opacity: 0.35, scale: 1, duration: 0.4, ease: 'power2.out' }, '-=0.3');
      }
      if (subtitle) {
        tl.to(subtitle, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2');
      }

      // Maintien bref puis disparition
      tl.to(containerRef.current, { opacity: 0, duration: 0.6, ease: 'power2.in' }, '+=0.8');
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="blaze-intro fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
      style={{ pointerEvents: 'none' }}
    >
      {/* Lueur dorée derrière le titre */}
      <div
        ref={glowRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <div
          className="w-[min(90vw,520px)] h-32 rounded-full blur-[80px]"
          style={{ background: 'radial-gradient(ellipse, rgba(197,160,89,0.5) 0%, transparent 70%)' }}
        />
      </div>

      <div className="flex flex-col items-center gap-6 text-center">
        <h1
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter select-none"
          style={{ margin: 0 }}
          aria-hidden
        >
          {WORD.split('').map((char, i) => (
            <span
              key={i}
              ref={(el) => (lettersRef.current[i] = el)}
              className="inline-block"
              style={{ textShadow: '0 0 40px rgba(197,160,89,0.4)' }}
            >
              {char}
            </span>
          ))}
        </h1>
        <p
          ref={subtitleRef}
          className="text-[#C5A059] text-xs sm:text-sm tracking-[0.35em] uppercase font-light max-w-xs sm:max-w-sm"
          aria-hidden
        >
          {SUBTITLE}
        </p>
      </div>
    </div>
  );
}
