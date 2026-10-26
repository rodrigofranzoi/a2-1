import { ModuleData } from '../types';

export const cours9: ModuleData = {
  id: 'cours9',
  number: '9',
  title: 'Décrire son quartier',
  objectif: 'Parler des commerces et services ; utiliser le relatif où.',
  summary:
    'Vocabulaire du quartier et phrase relative : C’est la boulangerie où j’achète mon pain.',
  imagePack: 'lieux',
  sections: [
    {
      title: 'Lieux du quartier',
      bullets: [
        'boulangerie, supermarché, école, pharmacie, parc, hôpital',
        'cabinet médical, centre commercial, restaurant, musée, crèche, église',
      ],
    },
    {
      title: 'Le relatif « où »',
      bullets: [
        'où relie un lieu et une action',
      ],
      examples: [
        'C’est la boulangerie où j’achète mon pain.',
        'Luxembourg est la ville où je travaille.',
        'C’est le supermarché où je fais mes courses.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c9-1',
      type: 'choix',
      prompt: 'Complétez : C’est la pharmacie ___ j’achète des médicaments.',
      options: ['où', 'qui', 'que', 'dont'],
      answer: 'où',
    },
    {
      id: 'c9-2',
      type: 'choix',
      prompt: 'Où achète-t-on du pain ?',
      options: ['à la boulangerie', 'à l’hôpital', 'au parking', 'à la crèche'],
      answer: 'à la boulangerie',
    },
    {
      id: 'c9-3',
      type: 'ecriture',
      prompt: 'Complétez avec où : C’est le parc ___ je cours.',
      answer: 'où',
      accepted: ['ou', "C'est le parc où je cours."],
    },
    {
      id: 'c9-4',
      type: 'ecriture',
      prompt: "Écrivez : C’est la boulangerie où j’achète mon pain.",
      answer: "C'est la boulangerie où j'achète mon pain.",
      accepted: [
        "Cest la boulangerie ou jachete mon pain.",
        "C'est la boulangerie ou j'achete mon pain.",
      ],
    },
    {
      id: 'c9-5',
      type: 'choix',
      prompt: 'On trouve des médicaments à la…',
      options: ['pharmacie', 'boulangerie', 'crèche', 'église'],
      answer: 'pharmacie',
    },
    {
      id: 'c9-6',
      type: 'choix',
      prompt: '« Centre commercial » = lieu pour…',
      options: ['faire du shopping', 'dormir', 'nager seulement', 'étudier la grammaire'],
      answer: 'faire du shopping',
    },
    {
      id: 'c9-7',
      type: 'ecriture',
      prompt: 'Écrivez le lieu : ___ (supermarket)',
      answer: 'supermarché',
      accepted: ['le supermarché', 'un supermarché', 'supermarche'],
    },
    {
      id: 'c9-8',
      type: 'choix',
      prompt: 'Luxembourg est la ville ___ je travaille.',
      options: ['où', 'qui', 'que', 'quoi'],
      answer: 'où',
    },
  ],
};
