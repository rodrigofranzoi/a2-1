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
    {
      id: 'c7-9',
      type: 'choix',
      prompt: 'On visite souvent un…',
      options: ['château', 'désert obligatoire', 'verbe', 'comparatif'],
      answer: 'château',
    },
    {
      id: 'c7-10',
      type: 'ecriture',
      prompt: 'Complétez : Dans le ___ du pays. (south)',
      answer: 'sud',
      accepted: ['sud du pays', 'le sud'],
    },
    {
      id: 'c7-11',
      type: 'choix',
      prompt: '« Faire du kayak » est…',
      options: [
        'une activité',
        'un défaut',
        'une préposition',
        'un vêtement',
      ],
      answer: 'une activité',
    },
    {
      id: 'c7-12',
      type: 'choix',
      prompt: 'Le contraire d’« est » est…',
      options: ['ouest', 'nord', 'sud', 'centre'],
      answer: 'ouest',
    },
    {
      id: 'c7-13',
      type: 'ecriture',
      prompt: 'Écrivez : Dans ce pays, on trouve des lacs.',
      answer: 'Dans ce pays, on trouve des lacs.',
      accepted: ['Dans ce pays, on trouve des lacs'],
    },
    {
      id: 'c7-14',
      type: 'choix',
      prompt: 'Une rivière est…',
      options: [
        'un cours d’eau',
        'une montagne',
        'une église',
        'un château',
      ],
      answer: 'un cours d’eau',
    },
    {
      id: 'c7-15',
      type: 'ecriture',
      prompt: 'Écrivez le lieu : ___ (forest)',
      answer: 'forêt',
      accepted: ['foret', 'une forêt', 'la forêt'],
    },
    {
      id: 'c7-16',
      type: 'choix',
      prompt: 'Pour situer Remich, on peut dire…',
      options: [
        'dans le sud-est',
        'dans le passé composé',
        'en face du verbe',
        'moins que le nord',
      ],
      answer: 'dans le sud-est',
    },
  ],
};
