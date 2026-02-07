/**
 * Configuration du site Liamin
 * Adresse, téléphone, horaires, réseaux sociaux
 */

export const SITE = {
  name: 'LIAMIN',
  tagline: 'Prestige & Terroir',
  description: 'Gastronomie Fine Méditerranéenne. Des grillades de qualité supérieure et une sélection de mezzés artisanaux.',
};

export const CONTACT = {
  phone: '0470 06 08 04',
  phoneTel: '+32470060804',
  address: {
    street: 'Rue de Rhisnes 4',
    zip: '5080',
    city: 'La Bruyère',
  },
  mapsQuery: 'Rue+de+Rhisnes+4+5080+La+Bruyère',
};

export const HORAIRES = [
  { jour: 'Lundi', heures: 'Fermé', ferme: true },
  { jour: 'Mardi', heures: '18:00 — 22:00' },
  { jour: 'Mercredi', heures: '18:00 — 22:00' },
  { jour: 'Jeudi', heures: '18:00 — 22:00' },
  { jour: 'Vendredi', heures: '18:00 — 22:00' },
  { jour: 'Samedi', heures: '18:00 — 22:00' },
  { jour: 'Dimanche', heures: '12:00 — 14:30  ·  18:00 — 22:00' },
];

export const SOCIAL = {
  instagram: 'https://www.instagram.com/liamin.restaurant/',
  facebook: 'https://www.facebook.com/profile.php?id=61574485050837',
};
