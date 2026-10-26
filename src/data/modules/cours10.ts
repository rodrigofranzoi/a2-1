import { ModuleData } from '../types';

export const cours10: ModuleData = {
  id: 'cours10',
  number: '10',
  title: 'Expliquer un chemin',
  objectif: 'Donner et comprendre des indications pour se déplacer en ville.',
  summary:
    'Vocabulaire urbain (feu, carrefour, rond-point…) et verbes de direction (tout droit, tourner, traverser…).',
  imagePack: 'directions',
  sections: [
    {
      title: 'Repères urbains',
      bullets: [
        'feu (tricolore), arrêt de bus, carrefour / croisement, parking',
        'pont, rond-point, passage piéton',
      ],
    },
    {
      title: 'Donner le chemin',
      bullets: [
        'aller / continuer tout droit',
        'tourner / prendre à droite / à gauche',
        'traverser, passer devant, revenir sur ses pas, se garer',
      ],
      examples: [
        'Au carrefour, ils tournent à gauche.',
        'Vous traversez le rond-point, puis vous prenez à gauche.',
        'Au rond-point, il faut prendre la deuxième sortie.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c10-1',
      type: 'choix',
      prompt: '« Continuer tout droit » signifie…',
      options: [
        'ne pas tourner',
        'revenir en arrière',
        'tourner à gauche',
        's’arrêter',
      ],
      answer: 'ne pas tourner',
    },
    {
      id: 'c10-2',
      type: 'choix',
      prompt: 'Au rond-point, on peut…',
      options: ['prendre une sortie', 'nager', 'se doucher', 'envoyer un email'],
      answer: 'prendre une sortie',
    },
    {
      id: 'c10-3',
      type: 'ecriture',
      prompt: 'Complétez : Tournez à ___. (right)',
      answer: 'droite',
      accepted: ['à droite', 'Tournez à droite'],
    },
    {
      id: 'c10-4',
      type: 'ecriture',
      prompt: 'Écrivez : Allez tout droit.',
      answer: 'Allez tout droit.',
      accepted: ['Allez tout droit', 'Allez tout droit'],
    },
    {
      id: 'c10-5',
      type: 'choix',
      prompt: 'On traverse la rue sur le…',
      options: ['passage piéton', 'rond-point', 'parking', 'pont seulement'],
      answer: 'passage piéton',
    },
    {
      id: 'c10-6',
      type: 'choix',
      prompt: '« Revenir sur ses pas » = ',
      options: ['retourner en arrière', 'accélérer', 'tourner deux fois', 'se garer'],
      answer: 'retourner en arrière',
    },
    {
      id: 'c10-7',
      type: 'ecriture',
      prompt: 'Complétez : Au carrefour, prenez à ___. (left)',
      answer: 'gauche',
      accepted: ['à gauche', 'prenez à gauche'],
    },
    {
      id: 'c10-8',
      type: 'choix',
      prompt: 'Pour stationner la voiture, on dit…',
      options: ['se garer', 'se lever', 'se doucher', 'se retrouver'],
      answer: 'se garer',
    },
  ],
};
