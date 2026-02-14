import { Phone, Mail, Users, Gift, Calendar } from 'lucide-react';
import { Button } from '../components/ui';
import { CONTACT } from '../config/site';

export default function PrivatisationView({ navTo }) {
  const evenements = [
    { icon: <Gift size={24} className="text-[#C5A059]" />, label: 'Anniversaires', desc: 'Célébrez dans un cadre intimiste et raffiné' },
    { icon: <Users size={24} className="text-[#C5A059]" />, label: 'Réunions d\'entreprise', desc: 'Séminaires, team building, déjeuners d\'affaires' },
    { icon: <Calendar size={24} className="text-[#C5A059]" />, label: 'Événements privés', desc: 'Mariages, fiançailles, repas de famille' },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        {/* Titre et accroche */}
        <div className="text-center mb-20">
          <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-6 block">Salle privatisable</span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Privatisez la salle pour tout événement</h1>
          <div className="w-24 h-px bg-[#C5A059]/50 mx-auto mb-10" />
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Réservez l’intégralité de notre salle et vivez une expérience exclusive. Mariages, anniversaires, séminaires ou repas en famille — nous nous adaptons à chaque occasion.
          </p>
        </div>

        {/* CTA Téléphone */}
        <div className="bg-white/5 border border-[#C5A059]/30 p-10 md:p-14 mb-16 flex flex-col items-center text-center">
          <p className="text-[#C5A059] text-[10px] uppercase tracking-[0.3em] mb-4">Pour privatiser la salle</p>
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="font-serif text-4xl md:text-5xl text-white hover:text-[#C5A059] transition-colors duration-300 inline-flex items-center gap-4"
          >
            <Phone size={36} className="text-[#C5A059]" />
            {CONTACT.phone}
          </a>
          <p className="text-gray-400 text-sm mt-6 max-w-lg mx-auto leading-relaxed">
            Contactez-nous pour discuter de votre projet : capacité, menu sur mesure, date et budget. Nous élaborons ensemble une offre personnalisée pour votre événement.
          </p>
          <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 mt-4 text-[#C5A059] hover:text-white transition-colors text-sm">
            <Mail size={18} />
            {CONTACT.email}
          </a>
          <div className="flex justify-center w-full mt-8">
            <Button variant="primary" onClick={() => navTo('reservation')}>Privatiser la salle</Button>
          </div>
        </div>

        {/* Types d'événements */}
        <div className="mb-20">
          <h2 className="font-serif text-2xl text-white text-center mb-12 uppercase tracking-widest">Pour tous vos événements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {evenements.map((e, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/5 p-8 hover:border-[#C5A059]/30 transition-colors">
                <div className="mb-4">{e.icon}</div>
                <h3 className="font-serif text-lg text-white mb-2">{e.label}</h3>
                <p className="text-gray-500 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Encart résumé */}
        <div className="border-t border-white/10 pt-16 text-center">
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            La salle Liamin peut être privatisée pour toute occasion. Notre équipe met à votre disposition son savoir-faire culinaire et son sens de l’accueil pour un moment unique.
          </p>
        </div>
      </div>
    </div>
  );
}
