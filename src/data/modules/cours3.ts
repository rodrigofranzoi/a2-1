import { ModuleData } from '../types';

export const cours3: ModuleData = {
  id: 'cours3',
  number: '3',
  title: 'Le présent — révision systématique',
  objectif: 'Maîtriser le présent des verbes en -er, -ir et des irréguliers ; décrire une journée.',
  summary:
    'Conjugaison au présent (-er, -ir, être/avoir, prendre, vouloir, pouvoir) et rédaction d’une journée classique.',
  imagePack: 'routine',
  sections: [
    {
      title: 'Verbes en -er',
      bullets: ['parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent'],
      examples: ['J’habite à Luxembourg-ville.', 'Je travaille le matin.'],
    },
    {
      title: 'Verbes en -ir (2 bases)',
      bullets: ['finir / choisir → je finis, tu finis, il finit, nous finissons…'],
      examples: ['Je finis le travail à 17 h.', 'Elle choisit un livre.'],
    },
    {
      title: 'Irréguliers fréquents',
      bullets: ['être, avoir, prendre, vouloir, pouvoir'],
      examples: [
        'Je suis expatriée.',
        'Le matin, je me lève à 7 heures. Je vais au travail en tram.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c3-1',
      type: 'choix',
      prompt: '« Nous ___ (parler) français. »',
      options: ['parlons', 'parlez', 'parlent', 'parle'],
      answer: 'parlons',
    },
    {
      id: 'c3-2',
      type: 'choix',
      prompt: '« Ils ___ (finir) à 18 h. »',
      options: ['finissent', 'finissez', 'finit', 'finissons'],
      answer: 'finissent',
    },
    {
      id: 'c3-3',
      type: 'ecriture',
      prompt: 'Conjuguez : je ___ (être)',
      answer: 'suis',
      accepted: ['je suis'],
    },
    {
      id: 'c3-4',
      type: 'ecriture',
      prompt: 'Complétez : J’___ à Luxembourg-ville. (habiter)',
      answer: "J'habite à Luxembourg-ville.",
      accepted: ['habite', "Jhabite a Luxembourg-ville.", "J'habite a Luxembourg-ville."],
    },
    {
      id: 'c3-5',
      type: 'choix',
      prompt: '« Vous ___ (vouloir) un café ? »',
      options: ['voulez', 'veulent', 'voulons', 'veux'],
      answer: 'voulez',
    },
    {
      id: 'c3-6',
      type: 'choix',
      prompt: '« Elle ___ (choisir) une robe. »',
      options: ['choisit', 'choisissent', 'choisissez', 'choisissons'],
      answer: 'choisit',
    },
    {
      id: 'c3-7',
      type: 'ecriture',
      prompt: 'Écrivez : Je vais au travail en tram.',
      answer: 'Je vais au travail en tram.',
      accepted: ['Je vais au travail en tram'],
    },
    {
      id: 'c3-8',
      type: 'choix',
      prompt: '« Nous ___ (avoir) un rendez-vous. »',
      options: ['avons', 'avez', 'ont', 'a'],
      answer: 'avons',
    },
  ],
};
