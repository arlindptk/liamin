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
        { name: "Poulpe grillé", price: "18,50 €", desc: "Poulpe, huile d'olive et citron" },
        { name: "Mezzé", price: "18 €", desc: "Houmous, tzatziki, dolmas, feta et préparations chaudes" },
        { name: "Calamars", price: "16,50 €", desc: "Calamars frits ou grillés" },
        { name: "Feta au four", price: "14,50 €", desc: "Feta, miel de thym et origan" },
        { name: "Dolmas / Dolmas gratinés", price: "14 €", desc: "Feuilles de vigne farcies au riz et herbes" },
        { name: "Beignets de courgette", price: "14 €", desc: "Courgettes frites, tzatziki" },
        { name: "Salade grecque", price: "11,50 €", desc: "Tomates, concombres, feta, olives et oignons" },
        { name: "Salade paysanne", price: "10 €", desc: "Lardons, œuf, tomates, croûtons et fromage" },
        { name: "Feta", price: "8,50 €", desc: "Tranche de feta AOC, huile d'olive et origan" }
      ]
    },
    {
      group: "Planches à Partager",
      items: [
        { name: "Planche Mixte", price: "10 €", desc: "Charcuteries, fromages et olives" },
        { name: "Planche Charcuterie", price: "9 €", desc: "Charcuteries" },
        { name: "Planche Méditerranéenne", price: "8 €", desc: "Légumes marinés et olives" }
      ]
    }
  ],
  plats: [
    {
      group: "Nos Mijotés Traditionnels",
      items: [
        { name: "Agneau athénien", price: "22 €", desc: "Agneau, tomates, oignons et épices" },
        { name: "Giouvetsi d'agneau", price: "21 €", desc: "Agneau, pâtes orzo et sauce tomate" },
        { name: "Moussaka", price: "20 €", desc: "Aubergines, viande hachée et béchamel" },
        { name: "Giouvetsi de poulet", price: "20 €", desc: "Poulet, pâtes orzo et sauce tomate" },
        { name: "Merguez provençales", price: "20 €", desc: "Merguez et herbes de Provence" },
        { name: "Kefta sauce maison", price: "19 €", desc: "Boulettes de bœuf, épices et sauce tomate" },
        { name: "Moussaka végétarienne", price: "17 €", desc: "Aubergines, légumes et béchamel" }
      ]
    },
    {
      group: "Nos Grillades",
      items: [
        { name: "Mix grill", price: "27,50 €", desc: "Agneau, bœuf et poulet" },
        { name: "Mixte viande", price: "27 €", desc: "Agneau, bœuf et poulet" },
        { name: "Mezzé de plats", price: "26,50 €", desc: "Assortiment de kefta, moussaka et grillades" },
        { name: "Côte d'agneau", price: "24,50 €", desc: "Côte d'agneau et herbes" },
        { name: "Pavé de bœuf", price: "24,50 €", desc: "Pavé de bœuf" },
        { name: "Brochette maison", price: "22,50 €", desc: "Filet de bœuf, poivrons et oignons" },
        { name: "Brochette mixte", price: "22 €", desc: "Bœuf, poulet et légumes" },
        { name: "Brochette bœuf", price: "20,50 €", desc: "Morceaux de bœuf et légumes" },
        { name: "Gyros porc/poulet (Duo)", price: "20 €", desc: "Porc et poulet à la broche" },
        { name: "Brochette poulet", price: "19 €", desc: "Poulet, citron et origan" },
        { name: "Gyros porc ou poulet", price: "18,50 €", desc: "Porc ou poulet à la broche" }
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
        { name: "Trio de poissons, sauce maison", price: "28,50 €", desc: "Espadon, saumon et filet de bar" },
        { name: "Espadon grillé", price: "24 €", desc: "Espadon grillé" },
        { name: "Filet de bar croustillant", price: "23 €", desc: "Filet de bar, peau croustillante" },
        { name: "Saumon poêlé", price: "22,50 €", desc: "Saumon et coulis d'herbes" },
        { name: "Brochettes de scampis", price: "19,50 €", desc: "Scampis grillés et citron" }
      ]
    },
    {
      group: "Scampis & Gambas",
      items: [
        { name: "Scampis à l'ail", price: "18,50 €", desc: "Scampis et ail" },
        { name: "Scampis maison", price: "18,50 €", desc: "Scampis, sauce maison" },
        { name: "Scampis diaboliques", price: "18,50 €", desc: "Scampis et piment" },
        { name: "Scampis au safran", price: "18,50 €", desc: "Scampis et safran" },
        { name: "Scampis frits", price: "18,50 €", desc: "Scampis frits" },
        { name: "Gambas", price: "18,50 €", desc: "Gambas grillées, fleur de sel" }
      ]
    }
  ],
  douceurs: [
    {
      group: "Desserts Maison",
      items: [
        { name: "Assortiment Liamin", price: "10 €", desc: "Sélection de nos desserts" },
        { name: "Moelleux au chocolat", price: "9,5 €", desc: "Chocolat, cœur coulant" },
        { name: "Baklava / Kadaifi", price: "9 €", desc: "Pâte filo, miel et pistaches" },
        { name: "Mousse au chocolat", price: "9 €", desc: "Chocolat noir" },
        { name: "Dame Blanche", price: "9 €", desc: "Glace vanille, chocolat chaud et chantilly" },
        { name: "Panacota / Brésilienne", price: "8,5 €", desc: "Crème et caramel" },
        { name: "Crème brûlée lavande", price: "8,5 €", desc: "Crème, lavande et sucre caramélisé" },
        { name: "Trio de Sorbets", price: "8 €", desc: "Trois sorbets aux fruits" }
      ]
    },
    {
      group: "Digestifs & Spiritueux",
      items: [
        { name: "Metaxa / Cointreau", price: "6 €", desc: "Metaxa ou Cointreau" },
        { name: "Amaretto / Ouzo", price: "5 €", desc: "Amaretto ou Ouzo" },
        { name: "Liqueurs de fruits", price: "5 €", desc: "Coco, Banane, 4 Fruits, Rose" }
      ]
    }
  ]
};
