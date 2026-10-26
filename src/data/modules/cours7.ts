import { ModuleData } from '../types';

export const cours7: ModuleData = {
  id: 'cours7',
  number: '7',
  title: 'Caractériser un pays',
  objectif: 'Décrire un pays (géographie, paysages, activités) — focus Luxembourg.',
  summary:
    'Situer un lieu (nord, sud, est, ouest, centre) et parler de ce qu’on peut faire dans un pays.',
  imagePack: 'pays',
  sections: [
    {
      title: 'Géographie',
      bullets: [
        'nord / sud / est / ouest / centre',
        'Oesling (nord) et Gutland au Luxembourg',
      ],
      examples: ['Remich se trouve dans le sud-est du Luxembourg.'],
    },
    {
      title: 'Paysages',
      bullets: [
        'église, désert, mer, montagne, colline, lac, rivière, champ, forêt, ville, château',
      ],
    },
    {
      title: 'Activités',
      bullets: [
        'visiter un musée / un château, faire de la randonnée, du shopping, du kayak, du vélo',
        'se baigner, nager',
      ],
      examples: [
        'Dans ce pays, il y a / on trouve…',
        'Dans ce pays, on peut…',
      ],
    },
  ],
  exercises: [
    {
      id: 'c7-1',
      type: 'choix',
      prompt: 'Remich se trouve dans le ___ du Luxembourg.',
      options: ['sud-est', 'nord-ouest', 'centre exact', 'désert'],
      answer: 'sud-est',
    },
    {
      id: 'c7-2',
      type: 'choix',
      prompt: 'Pour parler d’activités possibles, on dit…',
      options: ['Dans ce pays, on peut…', 'Dans ce pays, on doit être…', 'Dans ce pays, on était…', 'Dans ce pays, on sera…'],
      answer: 'Dans ce pays, on peut…',
    },
    {
      id: 'c7-3',
      type: 'ecriture',
      prompt: 'Complétez : Dans ce pays, il y ___ des forêts.',
      answer: 'a',
      accepted: ['il y a', 'Dans ce pays, il y a'],
    },
    {
      id: 'c7-4',
      type: 'choix',
      prompt: 'Quel mot désigne une petite élévation de terrain ?',
      options: ['colline', 'mer', 'désert', 'ville'],
      answer: 'colline',
    },
    {
      id: 'c7-5',
      type: 'ecriture',
      prompt: 'Écrivez : On peut faire de la randonnée.',
      answer: 'On peut faire de la randonnée.',
      accepted: ['On peut faire de la randonnee.', 'On peut faire de la randonnée'],
    },
    {
      id: 'c7-6',
      type: 'choix',
      prompt: 'Le contraire de « sud » est…',
      options: ['nord', 'est', 'ouest', 'centre'],
      answer: 'nord',
    },
    {
      id: 'c7-7',
      type: 'choix',
      prompt: '« On trouve des châteaux » ≈',
      options: ['Il y a des châteaux', 'On mange des châteaux', 'On mesure des châteaux', 'On porte des châteaux'],
      answer: 'Il y a des châteaux',
    },
    {
      id: 'c7-8',
      type: 'ecriture',
      prompt: 'Écrivez le lieu : ___ (lake)',
      answer: 'lac',
      accepted: ['un lac', 'le lac'],
    },
  ],
};
