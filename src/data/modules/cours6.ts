import { ModuleData } from '../types';

export const cours6: ModuleData = {
  id: 'cours6',
  number: '6',
  title: 'Décrire le caractère',
  objectif: 'Parler des qualités et des défauts ; comparer avec plus / moins / aussi … que.',
  summary:
    'Vocabulaire du caractère et structures de comparaison pour décrire les personnes.',
  imagePack: 'caractere',
  sections: [
    {
      title: 'Qualités',
      bullets: [
        'chaleureux, curieux, discret, doux, extraverti, fidèle, honnête',
        'indépendant, optimiste, ordonné, prudent, réfléchi, spontané, travailleur',
      ],
    },
    {
      title: 'Défauts',
      bullets: [
        'autoritaire, bruyant, cruel, envieux, inquiet, maniaque, menteur',
        'paresseux, pessimiste, peureux, prétentieux, sans gêne, stupide, superficiel, têtu',
      ],
    },
    {
      title: 'Comparer',
      bullets: [
        'plus … que / moins … que / aussi … que',
      ],
      examples: [
        'Il est plus bavard que moi.',
        'Elle est moins sociable que ma voisine.',
        'Tu es aussi maniaque que ton frère.',
      ],
    },
    {
      title: 'Expressions',
      bullets: [
        'avoir des yeux de lynx',
        'avoir une mémoire d’éléphant',
        'être têtu comme une mule',
      ],
    },
  ],
  exercises: [
    {
      id: 'c6-1',
      type: 'choix',
      prompt: '« Il est ___ bavard que moi. » (comparatif de supériorité)',
      options: ['plus', 'moins', 'aussi', 'très'],
      answer: 'plus',
    },
    {
      id: 'c6-2',
      type: 'choix',
      prompt: 'Quel mot est une qualité ?',
      options: ['honnête', 'menteur', 'paresseux', 'prétentieux'],
      answer: 'honnête',
    },
    {
      id: 'c6-3',
      type: 'choix',
      prompt: 'Quel mot est un défaut ?',
      options: ['têtu', 'fidèle', 'optimiste', 'doux'],
      answer: 'têtu',
    },
    {
      id: 'c6-4',
      type: 'ecriture',
      prompt: 'Complétez : Elle est ___ sociable que sa sœur. (infériorité)',
      answer: 'moins',
      accepted: ['Elle est moins'],
    },
    {
      id: 'c6-5',
      type: 'ecriture',
      prompt: 'Écrivez : Tu es aussi maniaque que ton frère.',
      answer: 'Tu es aussi maniaque que ton frère.',
      accepted: ['Tu es aussi maniaque que ton frere.'],
    },
    {
      id: 'c6-6',
      type: 'choix',
      prompt: '« Mémoire d’éléphant » signifie…',
      options: [
        'très bonne mémoire',
        'mauvaise mémoire',
        'être grand',
        'être paresseux',
      ],
      answer: 'très bonne mémoire',
    },
    {
      id: 'c6-7',
      type: 'choix',
      prompt: 'Pour une égalité, on utilise…',
      options: ['aussi … que', 'plus … que', 'moins … que', 'très … que'],
      answer: 'aussi … que',
    },
    {
      id: 'c6-8',
      type: 'ecriture',
      prompt: 'Écrivez l’adjectif : quelqu’un qui travaille beaucoup → ___',
      answer: 'travailleur',
      accepted: ['travailleuse', 'un travailleur'],
    },
  ],
};
