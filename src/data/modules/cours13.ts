import { ModuleData } from '../types';

export const cours13: ModuleData = {
  id: 'cours13',
  number: '13',
  title: 'Comprendre une location',
  objectif: 'Comprendre une annonce et poser des questions sur un logement à louer.',
  summary:
    'Vocabulaire de l’annonce (meublé, charges, superficie…) et phrases pour contacter un propriétaire.',
  imagePack: 'pieces',
  sections: [
    {
      title: 'L’annonce',
      bullets: [
        'ancien / neuf, calme / bruyant, clair / sombre, confortable',
        'disponible, équipé, meublé, rénové, superficie (m²)',
      ],
    },
    {
      title: 'Les personnes',
      bullets: ['propriétaire, locataire, colocataire, colocation'],
    },
    {
      title: 'Les frais',
      bullets: [
        'loyer, charges, chauffage, eau, électricité, gaz',
        'assurance, ménage, internet',
      ],
      examples: [
        'Je suis intéressé(e) par votre annonce.',
        'Est-ce que ça inclut les charges ?',
        'Quelle est la superficie de l’appartement ?',
        'Le montant est de 895 euros par mois.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c13-1',
      type: 'choix',
      prompt: 'Le ___ est la somme payée chaque mois pour habiter.',
      options: ['loyer', 'propriétaire', 'grenier', 'balcon'],
      answer: 'loyer',
    },
    {
      id: 'c13-2',
      type: 'choix',
      prompt: '« Meublé » signifie…',
      options: [
        'avec des meubles',
        'sans fenêtres',
        'en dehors de la ville',
        'réservé aux touristes',
      ],
      answer: 'avec des meubles',
    },
    {
      id: 'c13-3',
      type: 'ecriture',
      prompt: 'Complétez : Est-ce que ça inclut les ___ ?',
      answer: 'charges',
      accepted: ['les charges'],
    },
    {
      id: 'c13-4',
      type: 'ecriture',
      prompt: 'Écrivez : Je suis intéressé par votre annonce.',
      answer: 'Je suis intéressé par votre annonce.',
      accepted: [
        'Je suis interessee par votre annonce.',
        'Je suis intéressée par votre annonce.',
        'Je suis interesse par votre annonce.',
      ],
    },
    {
      id: 'c13-5',
      type: 'choix',
      prompt: 'La superficie se mesure souvent en…',
      options: ['m²', 'kilogrammes', 'degrés', 'litres'],
      answer: 'm²',
    },
    {
      id: 'c13-6',
      type: 'choix',
      prompt: 'Qui loue son appartement à quelqu’un ?',
      options: ['le propriétaire', 'le locataire', 'le colocataire seulement', 'le voisin'],
      answer: 'le propriétaire',
    },
    {
      id: 'c13-7',
      type: 'ecriture',
      prompt: 'Écrivez : Quelle est la superficie ?',
      answer: 'Quelle est la superficie ?',
      accepted: ['Quelle est la superficie?', 'Quelle est la superficie'],
    },
    {
      id: 'c13-8',
      type: 'choix',
      prompt: 'Les charges peuvent inclure…',
      options: [
        'eau, électricité, chauffage…',
        'seulement le loyer',
        'uniquement le jardin',
        'le métier du locataire',
      ],
      answer: 'eau, électricité, chauffage…',
    },
  ],
};
