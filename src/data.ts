import { Profile, Testimonial, FAQItem } from './types';

export const PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Inès',
    age: 24,
    city: 'Abidjan (Cocody)',
    country: 'Côte d’Ivoire',
    category: 'VIP',
    description: 'Passionnée de voyages, d’art contemporain et de gastronomie. Très sociable, élégante, disponible pour des dîners et des discussions enrichissantes.',
    status: 'Disponible',
    whatsappHidden: '+225 07 •• •• •• 89',
    whatsappUnlocked: '+225 07 45 82 11 89',
    avatarUrl: 'gradient-rose',
    tags: ['Élégante', 'Dîners', 'Voyages']
  },
  {
    id: '2',
    name: 'Amandine',
    age: 22,
    city: 'Cotonou (Fidjrossé)',
    country: 'Bénin',
    category: 'Jeune & Dynamique',
    description: 'Étudiante en Master Communication, dynamique et toujours de bonne humeur. Adore les sorties à la plage, le cinéma et faire de nouvelles connaissances.',
    status: 'Très demandée',
    whatsappHidden: '+229 97 •• •• •• 32',
    whatsappUnlocked: '+229 97 21 04 66 32',
    avatarUrl: 'gradient-teal',
    tags: ['Souriante', 'Plage', 'Étudiante']
  },
  {
    id: '3',
    name: 'Awa',
    age: 26,
    city: 'Dakar (Plateau)',
    country: 'Sénégal',
    category: 'VIP',
    description: 'Chef d’entreprise indépendante. Raffinée et discrète. Recherche des profils sérieux pour partager de bons moments de détente et des sorties sélectes.',
    status: 'Active',
    whatsappHidden: '+221 77 •• •• •• 54',
    whatsappUnlocked: '+221 77 63 90 22 54',
    avatarUrl: 'gradient-purple',
    tags: ['Indépendante', 'Raffinée', 'Discrète']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Rodrigue K.',
    location: 'Abidjan, Côte d’Ivoire',
    text: 'Le catalogue est vraiment incroyable. J’ai reçu le lien d’accès et le PDF immédiatement par email et SMS.',
    rating: 5,
    date: 'Hier'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Comment vais-je recevoir le catalogue après mon paiement ?',
    answer: 'Immédiatement après la validation du paiement, vous recevez un email contenant le lien de téléchargement direct de votre PDF premium.'
  }
];

export const PAYMENT_OPERATORS = [
  {
    id: 'mtn',
    name: 'MTN Mobile Money',
    logoBg: 'bg-[#FFCC00]',
    logoTextColor: 'text-black',
    countries: ['Bénin', 'Togo', 'Côte d’Ivoire', 'Cameroun']
  },
  {
    id: 'orange',
    name: 'Orange Money',
    logoBg: 'bg-[#FF6600]',
    logoTextColor: 'text-white',
    countries: ['Côte d’Ivoire', 'Sénégal', 'Cameroun']
  },
  {
    id: 'wave',
    name: 'Wave Mobile Money',
    logoBg: 'bg-[#40A5E6]',
    logoTextColor: 'text-white',
    countries: ['Sénégal', 'Côte d’Ivoire']
  }
];
