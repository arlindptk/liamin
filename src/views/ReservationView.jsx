import { MapPin, Phone, Clock, Sparkles, UtensilsCrossed } from 'lucide-react';
import { CONTACT, HORAIRES } from '../config/site';

export default function ReservationView() {
  return (
    <div className="pt-32 pb-0 bg-[#050505] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        {/* Titre et accroche */}
        <div className="text-center mb-20">
          <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-6 block">Réserver</span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Une table chez Liamin</h1>
          <div className="w-24 h-px bg-[#C5A059]/50 mx-auto mb-10" />
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Une soirée en Méditerranée vous attend. Réservez par téléphone pour garantir votre place et vivre l’expérience Liamin dans les meilleures conditions.
          </p>
        </div>

        {/* CTA Téléphone — bloc principal */}
        <div className="bg-white/5 border border-[#C5A059]/30 p-10 md:p-14 mb-16 text-center">
          <p className="text-[#C5A059] text-[10px] uppercase tracking-[0.3em] mb-4">Réserver par téléphone</p>
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="font-serif text-4xl md:text-5xl text-white hover:text-[#C5A059] transition-colors duration-300 inline-flex items-center gap-4"
          >
            <Phone size={36} className="text-[#C5A059]" />
            {CONTACT.phone}
          </a>
          <p className="text-gray-400 text-sm mt-6 max-w-lg mx-auto leading-relaxed">
            Grillades maison, mezzés maison et poissons du jour dans une ambiance feutrée : réservez votre table et laissez-vous embarquer.
          </p>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Appelez-nous pour réserver ou pour toute question — nous sommes à votre écoute.
          </p>
        </div>

        {/* Infos pratiques en grille */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12">

          {/* Horaires */}
          <div className="bg-white/5 border border-white/5 p-8">
            <div className="flex items-center gap-3 mb-8">
              <Clock size={24} className="text-[#C5A059]" />
              <h2 className="font-serif text-xl text-[#C5A059] uppercase tracking-widest">Heures d’ouverture</h2>
            </div>
            <div className="space-y-3 text-sm">
              {HORAIRES.map(({ jour, heures, ferme }) => (
                <p key={jour} className={`flex justify-between gap-4 border-b border-white/5 pb-2 ${ferme ? 'text-[#C5A059]' : 'text-gray-400'}`}>
                  <span>{jour}</span>
                  <span className="shrink-0 text-right">{heures}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Adresse */}
          <div className="bg-white/5 border border-white/5 p-8">
            <div className="flex items-center gap-3 mb-8">
              <MapPin size={24} className="text-[#C5A059]" />
              <h2 className="font-serif text-xl text-[#C5A059] uppercase tracking-widest">Nous trouver</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {CONTACT.address.street}<br />
              {CONTACT.address.zip} {CONTACT.address.city}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${CONTACT.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              Voir sur la carte →
            </a>
          </div>
        </div>

        {/* Encart ambiance & dress code */}
        <div className="mt-24 md:mt-32 flex flex-col sm:flex-row items-center justify-center gap-8 py-10 border-y border-white/5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <UtensilsCrossed size={22} className="text-[#C5A059] shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">Ambiance</p>
              <p className="text-gray-400 text-sm">Méditerranéenne & conviviale</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Sparkles size={22} className="text-[#C5A059] shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">Tenue</p>
              <p className="text-gray-400 text-sm">Élégant & raffiné</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
