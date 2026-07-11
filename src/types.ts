export interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  country: string;
  category: 'VIP' | 'Jeune & Dynamique';
  description: string;
  status: 'Disponible' | 'Très demandée' | 'Active';
  whatsappHidden: string;
  whatsappUnlocked: string;
  avatarUrl: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  text: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type PaymentMethod = 'mtn' | 'orange' | 'wave' | 'moov' | 'tmoney' | 'card';
