import { UtensilsCrossed, Flame, Fish, Coffee } from 'lucide-react';

export const MENU_CATEGORIES = [
  { id: 'entrees', name: 'Entrées & Planches', icon: <UtensilsCrossed size={18} /> },
  { id: 'plats', name: 'Mijotés & Grillades', icon: <Flame size={18} /> },
  { id: 'mer', name: 'Poissons & Scampis', icon: <Fish size={18} /> },
  { id: 'douceurs', name: 'Desserts & Digestifs', icon: <Coffee size={18} /> }
];

export const FULL_MENU = {
  entrees: [
    {
      group: "Nos Entrées",
      items: [
        { name: "Poulpe grillé", price: "18,50 €", desc: "La spécialité de la maison à l'huile d'olive" },
        { name: "Mezzé", price: "18 €", desc: "Sélection de nos meilleures préparations froides et chaudes" },
        { name: "Calamars", price: "16,50 €", desc: "Frits ou grillés selon votre préférence" },
        { name: "Feta au four", price: "14,50 €", desc: "Miel de thym et origan" },
        { name: "Dolmas / Dolmas gratinés", price: "14 €", desc: "Feuilles de vigne farcies au riz et herbes" },
        { name: "Beignets de courgette", price: "14 €", desc: "Recette traditionnelle au tzatziki" },
        { name: "Salade grecque", price: "11,50 €", desc: "Tomates, concombres, feta, olives et oignons" },
        { name: "Salade paysanne", price: "10 €", desc: "L'authenticité du terroir" },
        { name: "Feta", price: "8,50 €", desc: "Tranche de feta AOC, huile d'olive et origan" }
      ]
    },
    {
      group: "Planches à Partager",
      items: [
        { name: "Planche Mixte", price: "10 €", desc: "L'équilibre parfait pour l'apéro" },
        { name: "Planche Charcuterie", price: "9 €", desc: "Sélection de fines charcuteries" },
        { name: "Planche Méditerranéenne", price: "8 €", desc: "Légumes marinés et olives" }
      ]
    }
  ],
  plats: [
    {
      group: "Nos Mijotés Traditionnels",
      items: [
        { name: "Agneau athénien", price: "22 €", desc: "Mijoté lent aux épices douces" },
        { name: "Giouvetsi d'agneau", price: "21 €", desc: "Cuit en jarre avec pâtes orzo" },
        { name: "Moussaka", price: "20 €", desc: "La recette classique de nos grands-mères" },
        { name: "Giouvetsi de poulet", price: "20 €", desc: "Alternative tendre à la volaille" },
        { name: "Merguez provençales", price: "20 €", desc: "Saveurs du sud grillées" },
        { name: "Kefta sauce maison", price: "19 €", desc: "Boulettes de bœuf épicées" },
        { name: "Moussaka végétarienne", price: "17 €", desc: "Aubergines et légumes de saison" }
      ]
    },
    {
      group: "Nos Grillades",
      items: [
        { name: "Mix grill", price: "27,50 €", desc: "L'assortiment royal de nos viandes" },
        { name: "Mezzé de plats", price: "26,50 €", desc: "Dégustation variée de nos spécialités chaudes" },
        { name: "Côte d'agneau", price: "24,50 €", desc: "Grillées aux herbes de montagne" },
        { name: "Pavé de bœuf", price: "24,50 €", desc: "Sélection du boucher, tendreté garantie" },
        { name: "Brochette maison", price: "22,50 €", desc: "Cœur de filet et légumes" },
        { name: "Brochette mixte", price: "22 €", desc: "Le meilleur du bœuf et du poulet" },
        { name: "Brochette bœuf", price: "20,50 €", desc: "Morceaux choisis grillés" },
        { name: "Gyros porc/poulet (Duo)", price: "20 €", desc: "Fine découpe à la broche" },
        { name: "Brochette poulet", price: "19 €", desc: "Marinée au citron et origan" },
        { name: "Gyros porc ou poulet", price: "18,50 €", desc: "L'incontournable classique" }
      ]
    },
    {
      group: "Sauces & Accompagnements",
      items: [
        { name: "Sauces au choix", price: "5 €", desc: "Poivre, Champignon, Moutarde, Tomate feta, Provençale. Faites maison à la minute." },
        { name: "Accompagnements inclus", price: "—", desc: "Pâtes, Pommes de terre au four ou Salade" },
        { name: "Suppléments", price: "—", desc: "Frites, pomme de terre grecque, légumes chauds" }
      ]
    }
  ],
  mer: [
    {
      group: "Poissons & Crustacés",
      items: [
        { name: "Trio de poissons, sauce maison", price: "28,50 €", desc: "La sélection du pêcheur selon arrivage" },
        { name: "Espadon grillé", price: "24 €", desc: "Tranche épaisse à la plancha" },
        { name: "Filet de bar croustillant", price: "23 €", desc: "Peau dorée et chair fondante" },
        { name: "Saumon poêlé", price: "22,50 €", desc: "Accompagné de son coulis d'herbes" },
        { name: "Brochettes de scampis", price: "19,50 €", desc: "Grillées et citronnées" }
      ]
    },
    {
      group: "Scampis & Gambas",
      items: [
        { name: "Scampis à l'ail", price: "18,50 €", desc: "Classique et indémodable" },
        { name: "Scampis maison", price: "18,50 €", desc: "La recette secrète de Liamin" },
        { name: "Scampis diaboliques", price: "18,50 €", desc: "Pour les amateurs de sensations fortes" },
        { name: "Scampis au safran", price: "18,50 €", desc: "Élégance et douceur" },
        { name: "Scampis frits", price: "18,50 €", desc: "Légèreté et croustillant" },
        { name: "Gambas", price: "18,50 €", desc: "Entières, grillées à la fleur de sel" }
      ]
    }
  ],
  douceurs: [
    {
      group: "Desserts Maison",
      items: [
        { name: "Assortiment Liamin", price: "10 €", desc: "Un voyage complet à travers nos douceurs" },
        { name: "Moelleux au chocolat", price: "9,5 €", desc: "Cœur coulant, servi chaud" },
        { name: "Baklava / Kadaifi", price: "9 €", desc: "Pâtisserie orientale au miel et pistaches" },
        { name: "Mousse au chocolat", price: "9 €", desc: "Onctuosité et chocolat noir intense" },
        { name: "Dame Blanche", price: "9 €", desc: "Glace vanille, chocolat chaud et chantilly" },
        { name: "Panacota / Brésilienne", price: "8,5 €", desc: "Douceur crémeuse et croquant" },
        { name: "Crème brûlée lavande", price: "8,5 €", desc: "Parfum floral et sucre craquant" },
        { name: "Trio de Sorbets", price: "8 €", desc: "Fraîcheur de fruits de saison" }
      ]
    },
    {
      group: "Digestifs & Spiritueux",
      items: [
        { name: "Metaxa / Cointreau", price: "6 €", desc: "L'excellence pour conclure" },
        { name: "Amaretto / Ouzo", price: "5 €", desc: "L'âme de la Grèce dans votre verre" },
        { name: "Liqueurs de fruits", price: "5 €", desc: "Coco, Banane, 4 Fruits, Rose" }
      ]
    }
  ]
};
