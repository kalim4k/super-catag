import React from 'react';
import { Profile } from '../types';

interface ProfileListProps {
  onUnlockClick: (profile?: Profile) => void;
}

export default function ProfileList({ onUnlockClick }: ProfileListProps) {
  return (
    <div id="profiles-section" className="px-4 max-w-5xl mx-auto">
      {/* Galerie d'Images réelles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="overflow-hidden rounded-2xl border border-neutral-200/60 shadow-xl shadow-neutral-100 bg-white transition-all hover:scale-[1.01] hover:shadow-2xl duration-300">
          <img 
            src="https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/dc6eeb02-eb26-4350-af48-f6dcf52ca912.jpg" 
            alt="Aperçu de profil 1" 
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="overflow-hidden rounded-2xl border border-neutral-200/60 shadow-xl shadow-neutral-100 bg-white transition-all hover:scale-[1.01] hover:shadow-2xl duration-300">
          <img 
            src="https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/396a07d4-432a-4ed5-b8a1-25a004fccaae.jpg" 
            alt="Aperçu de profil 2" 
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-200/60 shadow-xl shadow-neutral-100 bg-white transition-all hover:scale-[1.01] hover:shadow-2xl duration-300">
          <img 
            src="https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/6be5bde1-01aa-4bae-af3c-e8451119a8d0.png" 
            alt="Aperçu de profil 3" 
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
