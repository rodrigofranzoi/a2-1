import { ModuleData } from '../types';

export const cours12: ModuleData = {
  id: 'cours12',
  number: '12',
  title: 'Parler de son habitation',
  objectif: 'Décrire son logement et les pièces ; utiliser dans + pièce.',
  summary:
    'Types de logement (appartement, colocation, ferme…) et vocabulaire des pièces.',
  imagePack: 'pieces',
  vocabIds: ['cuisine', 'chambre', 'salon', 'sdb'],
  sections: [
    {
      title: 'Types de logement',
      bullets: [
        'appartement, maison, colocation, ferme, logement intergénérationnel, foyer',
        'Trouver un toit = trouver un logement',
      ],
    },
    {
      title: 'Les pièces',
      bullets: [
        'chambre, salle de bain, cuisine, salle à manger, salon, bureau',
        'entrée, buanderie, garage, balcon, jardin, grenier, véranda',
      ],
      examples: [
        'Romain est dans la cuisine.',
        'J’habite dans un petit appartement avec mon copain. Il y a une chambre…',
      ],
    },
  ],
  exercises: [
    {
      id: 'c12-1',
      type: 'choix',
      prompt: 'On cuisine dans la…',
      options: ['cuisine', 'chambre', 'buanderie', 'garage'],
      answer: 'cuisine',
    },
    {
      id: 'c12-2',
      type: 'choix',
      prompt: '« Colocation » signifie…',
      options: [
        'partager un logement',
        'acheter une ferme',
        'vivre seul dans un château',
        'travailler à l’hôtel',
      ],
      answer: 'partager un logement',
    },
    {
      id: 'c12-3',
      type: 'ecriture',
      prompt: 'Complétez : Elle est dans la ___. (bathroom)',
      answer: 'salle de bain',
      accepted: ['salle de bains', 'la salle de bain'],
    },
    {
      id: 'c12-4',
      type: 'ecriture',
      prompt: 'Écrivez : Romain est dans la cuisine.',
      answer: 'Romain est dans la cuisine.',
      accepted: ['Romain est dans la cuisine'],
    },
    {
      id: 'c12-5',
      type: 'choix',
      prompt: 'On dort dans la…',
      options: ['chambre', 'entrée', 'buanderie', 'garage'],
      answer: 'chambre',
    },
    {
      id: 'c12-6',
      type: 'choix',
      prompt: 'Le salon sert surtout à…',
      options: ['se détendre / recevoir', 'laver le linge seulement', 'garer la voiture', 'cuisiner'],
      answer: 'se détendre / recevoir',
    },
    {
      id: 'c12-7',
      type: 'ecriture',
      prompt: 'Écrivez : Il y a un balcon.',
      answer: 'Il y a un balcon.',
      accepted: ['Il y a un balcon'],
    },
    {
      id: 'c12-8',
      type: 'choix',
      prompt: '« Trouver un toit » veut dire…',
      options: ['trouver un logement', 'acheter un parapluie', 'construire un garage', 'réparer le grenier'],
      answer: 'trouver un logement',
    },
    {
      id: 'c12-9',
      type: 'choix',
      prompt: 'On lave le linge dans la…',
      options: ['buanderie', 'chambre', 'entrée', 'véranda'],
      answer: 'buanderie',
    },
    {
      id: 'c12-10',
      type: 'ecriture',
      prompt: 'Écrivez : Il y a un jardin.',
      answer: 'Il y a un jardin.',
      accepted: ['Il y a un jardin'],
    },
    {
      id: 'c12-11',
      type: 'choix',
      prompt: 'Le grenier se trouve souvent…',
      options: [
        'sous le toit',
        'sous la terre',
        'dans la rue',
        'au rond-point',
      ],
      answer: 'sous le toit',
    },
    {
      id: 'c12-12',
      type: 'choix',
      prompt: 'On mange souvent dans la…',
      options: [
        'salle à manger',
        'salle de bain',
        'buanderie',
        'garage',
      ],
      answer: 'salle à manger',
    },
    {
      id: 'c12-13',
      type: 'ecriture',
      prompt: 'Complétez : Elle est dans le ___. (living room)',
      answer: 'salon',
      accepted: ['le salon'],
    },
    {
      id: 'c12-14',
      type: 'choix',
      prompt: 'Un garage sert à…',
      options: [
        'garer la voiture',
        'cuisiner',
        'dormir seulement',
        'prendre une douche',
      ],
      answer: 'garer la voiture',
    },
    {
      id: 'c12-15',
      type: 'ecriture',
      prompt: 'Écrivez : J’habite dans un appartement.',
      answer: "J'habite dans un appartement.",
      accepted: [
        'Jhabite dans un appartement.',
        "J'habite dans un appartement",
      ],
    },
    {
      id: 'c12-16',
      type: 'choix',
      prompt: 'Le bureau est une pièce pour…',
      options: [
        'travailler',
        'nager',
        'se garer',
        'faire du pain',
      ],
      answer: 'travailler',
    },
  ],
};
