import React, { useState } from 'react';
import { ShoppingBag, Heart, Star, SlidersHorizontal, Search, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';

interface DressItem {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
  category: string;
  tag?: string;
  description: string;
}

const DRESSES: DressItem[] = [
  {
    id: 'd1',
    name: 'Robe de Soirée Étoilée',
    price: '89 000 FCFA',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80',
    category: 'Soirée',
    tag: 'Best-Seller',
    description: 'Une coupe sirène élégante avec des broderies fines de sequins scintillants.'
  },
  {
    id: 'd2',
    name: 'Robe d\'Été Fleurie Céleste',
    price: '45 000 FCFA',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80',
    category: 'Casual',
    tag: 'Nouveauté',
    description: 'Tissu léger en mousseline avec un imprimé floral rafraîchissant.'
  },
  {
    id: 'd3',
    name: 'Robe Cocktail Rouge Velours',
    price: '65 000 FCFA',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1539008885128-fc18bf34a2e4?w=800&auto=format&fit=crop&q=80',
    category: 'Cocktail',
    tag: 'Édition Limitée',
    description: 'Une texture douce en velours royal avec une fente subtile sur le côté.'
  },
  {
    id: 'd4',
    name: 'Robe Plissée Lin Naturel',
    price: '39 000 FCFA',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80',
    category: 'Casual',
    description: 'Fabriquée en lin 100% biologique, idéal pour les journées ensoleillées.'
  },
  {
    id: 'd5',
    name: 'Robe Satinée Emeraude',
    price: '79 000 FCFA',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1518049368264-e5141c246c77?w=800&auto=format&fit=crop&q=80',
    category: 'Soirée',
    tag: 'Populaire',
    description: 'Robe de gala drapée en satin de soie d\'une couleur vert émeraude impériale.'
  },
  {
    id: 'd6',
    name: 'Robe Bohème Dentelle',
    price: '55 000 FCFA',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80',
    category: 'Cocktail',
    description: 'Détails en dentelle vintage avec des manches cloches pour une touche bohème élégante.'
  }
];

export default function RobePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [orderedItem, setOrderedItem] = useState<string | null>(null);

  const categories = ['Tous', 'Soirée', 'Cocktail', 'Casual'];

  const filteredDresses = DRESSES.filter(dress => {
    const matchesCategory = selectedCategory === 'Tous' || dress.category === selectedCategory;
    const matchesSearch = dress.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dress.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (dressName: string) => {
    setCartCount(prev => prev + 1);
    setOrderedItem(dressName);
    setTimeout(() => {
      setOrderedItem(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1c1c] font-sans">
      {/* Top Banner bar */}
      <div className="bg-[#1c1c1c] text-white text-[11px] font-bold tracking-widest text-center py-2 uppercase">
        Livraison gratuite à partir de 100 000 FCFA • Collection Printemps-Été 2026
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e6e2d8] px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-widest uppercase text-neutral-900">
              MAISON <span className="text-amber-700">ROBE</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-neutral-600">
            <a href="#collection" className="hover:text-amber-700 transition-colors">Collection</a>
            <a href="#about" className="hover:text-amber-700 transition-colors">Notre Maison</a>
            <a href="#guarantees" className="hover:text-amber-700 transition-colors">Garanties</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="absolute right-3 top-2.5 text-neutral-400">
                <Search size={16} />
              </span>
              <input
                type="text"
                placeholder="Rechercher une robe..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border border-[#e6e2d8] rounded-full h-9 pl-4 pr-10 text-xs font-medium focus:outline-none focus:border-amber-700 w-40 sm:w-56 transition-all"
              />
            </div>

            <div className="relative cursor-pointer">
              <ShoppingBag size={20} className="text-neutral-800 hover:text-amber-700 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-700 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Toast Notification */}
      {orderedItem && (
        <div className="fixed top-20 right-4 z-50 bg-white border border-emerald-100 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 animate-slide-in">
          <CheckCircle className="text-emerald-500 shrink-0" size={18} />
          <div className="text-xs">
            <p className="font-extrabold text-neutral-900">Ajouté au panier !</p>
            <p className="text-neutral-500 font-medium">{orderedItem}</p>
          </div>
        </div>
      )}

      {/* Hero Banner Section */}
      <section className="relative bg-[#ebe6df] overflow-hidden py-16 md:py-24 px-6">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-900 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-neutral-900 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/60 px-3 py-1 rounded-full">
              L'excellence à la française
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-none">
              Créations Uniques &amp; Tissus Nobles
            </h1>
            <p className="text-neutral-600 text-sm md:text-base font-medium leading-relaxed max-w-lg">
              Découvrez notre collection capsule exclusive de robes de soirée et de robes d'été légères façonnées à la main pour sublimer chaque occasion spéciale.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="#collection" 
                className="bg-amber-800 hover:bg-amber-950 text-white text-xs font-extrabold tracking-wider uppercase h-12 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Découvrir la Collection</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-amber-700/20 to-neutral-200 rounded-3xl blur-md opacity-30" />
            <div className="relative rounded-3xl overflow-hidden border border-[#e6e2d8] shadow-2xl aspect-[4/3] bg-neutral-100">
              <img 
                src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1000&auto=format&fit=crop&q=80" 
                alt="Maison Robe Signature" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Collection Grid */}
      <section id="collection" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-[#e6e2d8] pb-6">
          <div>
            <h2 className="text-2xl font-black text-neutral-900 tracking-tight uppercase">Notre Catalogue</h2>
            <p className="text-xs text-neutral-500 font-medium mt-1">Sélectionnez la robe idéale parmi nos pièces de créateurs.</p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === category 
                    ? 'bg-amber-800 text-white shadow-sm' 
                    : 'bg-white text-neutral-600 border border-[#e6e2d8] hover:bg-neutral-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredDresses.length === 0 ? (
          <div className="text-center py-16 bg-white border border-[#e6e2d8] rounded-2xl p-8">
            <p className="text-sm text-neutral-500 font-bold">Aucun modèle ne correspond à votre recherche.</p>
            <button 
              onClick={() => { setSelectedCategory('Tous'); setSearchQuery(''); }}
              className="mt-4 text-xs font-bold uppercase text-amber-800 hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDresses.map((dress) => (
              <div 
                key={dress.id} 
                className="bg-white rounded-2xl overflow-hidden border border-[#e6e2d8] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                  {dress.tag && (
                    <span className="absolute top-4 left-4 z-10 bg-amber-800 text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {dress.tag}
                    </span>
                  )}
                  <button 
                    onClick={() => toggleFavorite(dress.id)}
                    className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-sm text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    <Heart 
                      size={16} 
                      className={favorites.includes(dress.id) ? 'fill-red-500 text-red-500' : ''} 
                    />
                  </button>
                  <img 
                    src={dress.image} 
                    alt={dress.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">{dress.category}</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star size={12} className="fill-current" />
                        <span className="text-xs font-bold text-neutral-700">{dress.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-base font-black text-neutral-900 group-hover:text-amber-800 transition-colors">{dress.name}</h3>
                    <p className="text-xs text-neutral-500 font-medium leading-relaxed line-clamp-2">{dress.description}</p>
                  </div>

                  <div className="pt-2 flex justify-between items-center border-t border-neutral-100">
                    <span className="text-base font-extrabold text-neutral-900">{dress.price}</span>
                    <button 
                      onClick={() => handleAddToCart(dress.name)}
                      className="bg-neutral-900 hover:bg-amber-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <ShoppingBag size={14} />
                      <span>Ajouter</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Guarantees section */}
      <section id="guarantees" className="bg-white border-t border-[#e6e2d8] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-tight">Notre charte d'engagement</h2>
            <p className="text-xs text-neutral-500 font-medium max-w-md mx-auto">Chaque création de notre Maison bénéficie d'une attention méticuleuse.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#faf8f5] border border-[#e6e2d8] rounded-2xl text-center space-y-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mx-auto font-black">
                1
              </div>
              <h4 className="text-sm font-bold uppercase text-neutral-900">Matières Supérieures</h4>
              <p className="text-xs text-neutral-500 font-medium leading-relaxed">Satin lourd, soie naturelle et dentelles fines minutieusement choisies.</p>
            </div>

            <div className="p-6 bg-[#faf8f5] border border-[#e6e2d8] rounded-2xl text-center space-y-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mx-auto font-black">
                2
              </div>
              <h4 className="text-sm font-bold uppercase text-neutral-900">Satisfait ou Retouché</h4>
              <p className="text-xs text-neutral-500 font-medium leading-relaxed">Nous prenons en charge les retouches personnalisées sous 14 jours.</p>
            </div>

            <div className="p-6 bg-[#faf8f5] border border-[#e6e2d8] rounded-2xl text-center space-y-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mx-auto font-black">
                3
              </div>
              <h4 className="text-sm font-bold uppercase text-neutral-900">Service Clients VIP</h4>
              <p className="text-xs text-neutral-500 font-medium leading-relaxed">Un conseiller joignable pour guider votre choix de taille.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 text-xs py-12 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2026 Maison Robe S.A. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#terms" className="hover:text-white transition-colors">Conditions Générales de Vente</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
