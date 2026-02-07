import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { SITE, CONTACT, HORAIRES, SOCIAL } from '../../config/site';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-24 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
        <div className="space-y-6">
          <h3 className="font-serif text-3xl tracking-widest text-white">{SITE.name}</h3>
          <p className="text-gray-500 font-light text-sm leading-relaxed">
            {SITE.description}
          </p>
          <div className="flex gap-6 text-[#C5A059]">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Liamin">
              <Instagram size={24} className="cursor-pointer hover:text-white transition-all" />
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Liamin">
              <Facebook size={24} className="cursor-pointer hover:text-white transition-all" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-[#C5A059] mb-8 uppercase tracking-[0.2em] text-[10px] font-bold">Heures d'Ouverture</h4>
          <div className="space-y-3 text-sm font-light text-gray-400">
            {HORAIRES.map(({ jour, heures, ferme }) => (
              <p key={jour} className={`flex justify-between gap-4 border-b border-white/5 pb-2 ${ferme ? 'text-[#C5A059]' : ''}`}>
                <span>{jour}</span>
                <span className="shrink-0 text-right">
                  {jour === 'Dimanche' ? <>12:00 — 14:30<br />18:00 — 22:00</> : heures}
                </span>
              </p>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-[#C5A059] mb-8 uppercase tracking-[0.2em] text-[10px] font-bold">Accès</h4>
          <div className="space-y-6 text-sm font-light text-gray-400">
            <div className="flex items-start gap-4">
              <MapPin size={18} className="text-[#C5A059] flex-shrink-0" />
              <span>{CONTACT.address.street},<br />{CONTACT.address.zip} {CONTACT.address.city}</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={18} className="text-[#C5A059]" />
              <span>{CONTACT.phone}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] text-gray-600 tracking-[0.4em] uppercase">
          &copy; {new Date().getFullYear()} {SITE.name} — {SITE.tagline}
        </p>
      </div>
    </footer>
  );
}
