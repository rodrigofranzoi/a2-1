import { ModuleData } from '../types';

export const cours4: ModuleData = {
  id: 'cours4',
  number: '4',
  title: 'Caractériser le physique (1)',
  objectif: 'Décrire le physique d’une personne avec avoir, être, mesurer, faire, porter.',
  summary:
    'Yeux, cheveux, taille, corpulence : structures pour décrire quelqu’un.',
  imagePack: 'caractere',
  sections: [
    {
      title: 'Structures clés',
      bullets: [
        'Il/Elle a… → information précise (yeux, cheveux, barbe…)',
        'Il/Elle est… → information générale (grand, mince…)',
        'Il/Elle mesure… → taille',
        'Il/Elle fait une taille… → taille de vêtement',
        'Il/Elle porte… → vêtements',
      ],
      examples: [
        'Il/Elle a les yeux bleus.',
        'Il/Elle mesure 1 mètre 55.',
        'Il/Elle fait une taille 44.',
        'Il/Elle porte une robe.',
      ],
    },
    {
      title: 'Vocabulaire',
      bullets: [
        'Yeux : bleus, marrons, verts',
        'Cheveux : blonds, bruns, châtains, roux ; courts / longs ; bouclés / raides',
        'Taille : petit, grand, de taille moyenne',
        'Corpulence : mince, maigre, gros, corpulent, costaud, musclé',
      ],
    },
  ],
  exercises: [
    {
      id: 'c4-1',
      type: 'choix',
      prompt: 'Pour les yeux, on dit…',
      options: ['Il a les yeux bleus.', 'Il est les yeux bleus.', 'Il mesure les yeux bleus.', 'Il porte les yeux bleus.'],
      answer: 'Il a les yeux bleus.',
    },
    {
      id: 'c4-2',
      type: 'choix',
      prompt: '« Elle mesure 1 mètre 70 » parle de…',
      options: ['sa taille (hauteur)', 'sa nationalité', 'ses cheveux', 'ses vêtements'],
      answer: 'sa taille (hauteur)',
    },
    {
      id: 'c4-3',
      type: 'ecriture',
      prompt: 'Complétez : Elle ___ les cheveux longs. (avoir)',
      answer: 'a',
      accepted: ['Elle a', 'elle a'],
    },
    {
      id: 'c4-4',
      type: 'ecriture',
      prompt: 'Écrivez : Il porte une robe.',
      answer: 'Il porte une robe.',
      accepted: ['Il porte une robe'],
    },
    {
      id: 'c4-5',
      type: 'choix',
      prompt: 'Quel adjectif pour des cheveux pas droits ?',
      options: ['bouclés', 'raides', 'courts', 'blonds'],
      answer: 'bouclés',
    },
    {
      id: 'c4-6',
      type: 'choix',
      prompt: '« Il fait une taille 44 » signifie…',
      options: [
        'Il porte la taille 44',
        'Il mesure 44 mètres',
        'Il a 44 ans',
        'Il a 44 cheveux',
      ],
      answer: 'Il porte la taille 44',
    },
    {
      id: 'c4-7',
      type: 'ecriture',
      prompt: 'Écrivez : Elle a les yeux verts.',
      answer: 'Elle a les yeux verts.',
      accepted: ['Elle a les yeux verts'],
    },
    {
      id: 'c4-8',
      type: 'choix',
      prompt: 'Complétez : « Il ___ grand et mince. »',
      options: ['est', 'a', 'mesure', 'porte'],
      answer: 'est',
    },
  ],
};
