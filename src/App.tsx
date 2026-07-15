import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Check, 
  Sparkles
} from 'lucide-react';
import ProfileList from './components/ProfileList';

export default function App() {
  // Minuteur de 45 minutes en secondes
  const [timeLeft, setTimeLeft] = useState(2700);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 2700 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleOpenCheckout = () => {
    window.location.href = "https://izimomo.vercel.app/pay";
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#262626] selection:bg-blue-600 selection:text-white relative overflow-x-hidden pb-24 font-sans">
      
      {/* EN-TÊTE DE PAGE */}
      <header className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e6e2d8] py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-extrabold text-xs shadow-sm shadow-blue-600/20">
              EB
            </div>
            <span className="font-extrabold text-neutral-900 tracking-tight text-sm">ESPACE BIZI</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-[#f1ede4] border border-[#e6e2d8] px-3.5 py-1.5 rounded-full text-xs font-bold text-neutral-800">
              <Clock size={14} className="text-blue-600 animate-pulse" />
              <span>Expire dans : <span className="font-mono text-blue-600">{formatTime(timeLeft)}</span></span>
            </div>

            <button
              onClick={handleOpenCheckout}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-5 rounded-full shadow-lg shadow-blue-600/10 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              Débloquer le catalogue
            </button>
          </div>
        </div>
      </header>

      {/* SECTION HÉROS / PRÉSENTATION VISUELLE */}
      <section className="py-8 md:py-12 px-4 max-w-5xl mx-auto text-center space-y-6">
        
        {/* Bannière principale */}
        <div className="flex justify-center">
          <img 
            src="https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/76cad39d-ac23-4be6-b75a-ccdd4c33a47f.png" 
            alt="Catalogue Privé Premium" 
            className="max-w-md w-full h-auto object-contain rounded-2xl shadow-lg border border-neutral-200/50"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 border border-blue-200 rounded-full">
            <Sparkles size={12} className="text-blue-600 animate-pulse" />
            Vérifié & Sécurisé
          </span>
        </div>

        <p className="text-sm md:text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto font-medium leading-relaxed">
          Notre Catalogue est disponibles dans toutes les villes et dans plusieurs pays d’Afrique de l’Ouest (Togo, Bénin, Côte d’Ivoire, Sénégal, Cameroun, etc.).
        </p>

        <div className="pt-3 flex justify-center">
          <button
            onClick={handleOpenCheckout}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-extrabold h-12 px-8 rounded-full text-sm md:text-base transition-all shadow-lg shadow-blue-600/25 hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Débloquer le catalogue maintenant</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Moyens de paiement badges */}
        <div className="pt-2 flex justify-center">
          <img 
            src="https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/a54a78c4-d777-45cb-939a-69ce5e28e28c.png" 
            alt="Moyens de paiement sécurisés" 
            className="max-w-xs w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* PRÉSENTATION VIDÉO */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-2xl border border-[#e6e2d8] shadow-lg bg-[#faf8f5] max-w-md mx-auto">
          <video 
            src="https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/8ce32400-4262-44e6-bf33-51924b2f1791.mp4" 
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-auto block rounded-2xl"
          />
        </div>
      </section>

      {/* GALERIE APERÇU PROFILS */}
      <section className="bg-white border-y border-[#e6e2d8] py-8">
        <ProfileList onUnlockClick={handleOpenCheckout} />
      </section>

      {/* CONTENU DE LA LIVRAISON */}
      <section className="bg-white border-y border-[#e6e2d8] py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 font-sans tracking-tight">
                Ce que vous recevrez immédiatement après achat
              </h2>
            </div>

            <div className="max-w-md mx-auto pt-4 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-neutral-800 text-base font-bold leading-relaxed">Un PDF Premium de plus de 50 pages</span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-neutral-800 text-base font-bold leading-relaxed">Informations détaillées</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLÉMENT DU CATALOGUE (IMAGES CÔTE À CÔTE) */}
      <section className="py-6 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          <img 
            src="https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/18f408a9-879d-4629-ab6f-bb245d6830ea.jpg" 
            alt="Aperçu catalogue 1" 
            className="w-full h-auto object-contain rounded-2xl shadow-md border border-neutral-200/50"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/8b3c6e8c-bd9c-49e7-9b6f-01df5166e808.jpg" 
            alt="Aperçu catalogue 2" 
            className="w-full h-auto object-contain rounded-2xl shadow-md border border-neutral-200/50"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* GRILLE DES TARIFS DE LANCEMENT */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 font-sans">
            Tarifs du catalogue
          </h2>

          <div className="flex justify-center py-2">
            <img 
              src="https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/a226fcac-e7a5-4f22-87f9-213ae88f60f7.svg" 
              alt="Tarifs et Avantages" 
              className="max-w-xl w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="bg-neutral-900 text-white border border-neutral-800 rounded-3xl p-6 md:p-10 max-w-xl mx-auto shadow-2xl relative overflow-hidden space-y-5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <span className="inline-block bg-blue-600 text-white font-extrabold text-xs tracking-wider px-4 py-1 uppercase rounded-full">
                  Offre de Lancement
                </span>
                <p className="text-neutral-400 text-base font-semibold line-through">
                  Prix normal : 49 000 FCFA
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-neutral-400 font-mono uppercase tracking-widest">Aujourd’hui seulement :</p>
                <p className="text-4xl md:text-5xl font-black text-blue-400 font-sans tracking-tight">
                  2500 FCFA
                </p>
                <p className="text-xs text-emerald-400 font-bold tracking-wide">
                  (Paiement unique – Accès immédiat)
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleOpenCheckout}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold h-14 px-10 rounded-full text-base transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Débloquer le catalogue PDF</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-neutral-400 font-mono">
                <Clock size={12} className="text-blue-500 animate-pulse" />
                <span>Expire dans : <span className="text-blue-400 font-bold">{formatTime(timeLeft)}</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIES */}
      <section className="bg-white border-y border-[#e6e2d8] py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-neutral-900 mb-6 font-sans tracking-tight">
            Garanties
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#faf8f5] border border-[#e6e2d8] shadow-xs">
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <span className="text-neutral-800 text-sm font-bold leading-relaxed">Paiement 100% sécurisé</span>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#faf8f5] border border-[#e6e2d8] shadow-xs">
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <span className="text-neutral-800 text-sm font-bold leading-relaxed">Livraison instantanée par email et SMS</span>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#faf8f5] border border-[#e6e2d8] shadow-xs">
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <span className="text-neutral-800 text-sm font-bold leading-relaxed">Support client disponible 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* BANNIÈRE DE SÉCURITÉ */}
      <div className="py-6 bg-white border-b border-[#e6e2d8] flex justify-center px-4">
        <img 
          src="https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/94ec7644-547b-4eb9-9a42-570471bc287c.png" 
          alt="Garanties de sécurité et de discrétion" 
          className="max-w-2xl w-full h-auto object-contain rounded-2xl shadow-sm border border-neutral-100"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* BARRE D'ACTION FIXE EN BAS DE PAGE (STICKY BOTTOM BAR) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800/80 px-4 py-3 sm:py-4 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.3)]">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:flex flex-col">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Offre de Lancement</span>
            </div>
            <p className="text-[#faf8f5] text-sm font-semibold mt-0.5">
              Aujourd’hui seulement : <span className="text-blue-400 font-extrabold text-base">2500 FCFA</span> <span className="text-neutral-500 text-xs line-through font-normal">49 000 FCFA</span>
            </p>
          </div>
          
          <div className="flex md:hidden flex-col text-left shrink-0">
            <span className="text-[10px] text-red-400 font-bold uppercase tracking-wide">Lancement</span>
            <span className="text-[#faf8f5] text-sm font-extrabold">2500 FCFA <span className="text-neutral-500 text-[10px] line-through font-normal">49k</span></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <div className="hidden sm:flex items-center gap-1.5 text-neutral-400 text-xs font-mono bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
              <Clock size={12} className="text-blue-500 animate-pulse" />
              <span>{formatTime(timeLeft)}</span>
            </div>
            
            <button
              onClick={handleOpenCheckout}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-[#faf8f5] text-xs sm:text-sm font-extrabold h-11 px-5 sm:px-8 rounded-full shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0"
            >
              <span>Débloquer le catalogue PDF</span>
              <ArrowRight size={14} className="shrink-0" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
