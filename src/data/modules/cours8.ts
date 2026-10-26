import { ModuleData } from '../types';

export const cours8: ModuleData = {
  id: 'cours8',
  number: '8',
  title: 'Parler de la météo',
  objectif: 'Décrire le temps qu’il fait avec Il fait… et Il y a…',
  summary:
    'Différence importante : Il fait beau / chaud / froid / X degrés. Il y a du soleil, de la pluie, du vent…',
  imagePack: 'meteo',
  vocabIds: ['soleil', 'nuages', 'pluie', 'neige', 'orage', 'vent', 'brouillard', 'arc'],
  sections: [
    {
      title: 'Il fait…',
      bullets: [
        'Il fait beau / mauvais',
        'Il fait chaud / froid / frais',
        'Il fait 15 degrés / moins 7 degrés',
      ],
      examples: [
        'Quel temps il fait à Luxembourg ?',
        'Il fait moins 7 degrés.',
        'Attention : on dit « Il fait beau » (pas « Il y a beau »).',
      ],
    },
    {
      title: 'Il y a…',
      bullets: [
        'Il y a du soleil / des nuages / de la pluie / du vent',
        'Il y a de l’orage / de la neige / un arc-en-ciel / du brouillard',
      ],
    },
    {
      title: 'Verbes impersonnels',
      bullets: ['Il pleut.', 'Il neige.'],
    },
  ],
  exercises: [
    {
      id: 'c8-1',
      type: 'choix',
      prompt: 'Quelle phrase est correcte ?',
      options: ['Il fait beau.', 'Il y a beau.', 'Il est beau le temps.', 'Il a beau.'],
      answer: 'Il fait beau.',
    },
    {
      id: 'c8-2',
      type: 'choix',
      prompt: '« Il y a du soleil » — structure correcte avec phénomène :',
      options: ['Il y a…', 'Il fait du soleil', 'Il est du soleil', 'Il a du soleil'],
      answer: 'Il y a…',
    },
    {
      id: 'c8-3',
      type: 'ecriture',
      prompt: 'Complétez : Il ___ 10 degrés.',
      answer: 'fait',
      accepted: ['Il fait', 'il fait'],
    },
    {
      id: 'c8-4',
      type: 'ecriture',
      prompt: 'Écrivez : Il y a de la neige.',
      answer: 'Il y a de la neige.',
      accepted: ['Il y a de la neige', 'Il y a de la neige'],
    },
    {
      id: 'c8-5',
      type: 'choix',
      prompt: 'Quand il tombe de l’eau du ciel, on dit…',
      options: ['Il pleut.', 'Il neige.', 'Il fait beau.', 'Il y a du soleil.'],
      answer: 'Il pleut.',
    },
    {
      id: 'c8-6',
      type: 'choix',
      prompt: '« Il y a de l’orage » évoque…',
      options: ['tonnerre et éclairs', 'soleil fort', 'brouillard léger', 'beau temps'],
      answer: 'tonnerre et éclairs',
    },
    {
      id: 'c8-7',
      type: 'ecriture',
      prompt: 'Écrivez : Il fait froid.',
      answer: 'Il fait froid.',
      accepted: ['Il fait froid'],
    },
    {
      id: 'c8-8',
      type: 'choix',
      prompt: 'Complétez : Il y a ___ vent.',
      options: ['du', 'de la', 'des', 'un'],
      answer: 'du',
    },
    {
      id: 'c8-9',
      type: 'ecriture',
      prompt: 'Écrivez : C’est la météo.',
      answer: "C'est la météo.",
      accepted: ["Cest la meteo.", "C'est la meteo.", 'Cest la météo'],
    },
  ],
};
