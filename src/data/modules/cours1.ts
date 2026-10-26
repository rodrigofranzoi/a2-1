import { ModuleData } from '../types';

export const cours1: ModuleData = {
  id: 'cours1',
  number: '1',
  title: 'Revoir les connaissances de A1',
  objectif: 'Parler de la routine quotidienne et se présenter.',
  summary:
    'On révise le vocabulaire de la journée type : se lever, se doucher, travailler, retrouver des amis…',
  imagePack: 'routine',
  sections: [
    {
      title: 'Pour commencer',
      bullets: [
        'Parler de sa nationalité, de son métier et de sa situation familiale.',
        'Poser des questions simples pour faire connaissance.',
      ],
      examples: [
        'D’où venez-vous ?',
        'Que faites-vous dans la vie ?',
        'Vous êtes marié(e) ? Vous avez des enfants ?',
      ],
    },
    {
      title: 'La routine quotidienne',
      bullets: [
        'Utiliser les verbes pronominaux : se réveiller, se lever, se doucher, se coiffer, s’endormir.',
        'Décrire une journée avec le présent.',
      ],
      examples: [
        'Moi, je me lève à 7 heures tous les matins. Et toi ?',
        'Je bois un café et je choisis des vêtements pour le travail.',
        'Le soir, je retrouve des amis ou je fais des courses.',
      ],
    },
    {
      title: 'Vocabulaire utile',
      bullets: [
        'prendre le petit déjeuner / le tram / le bus',
        'envoyer un email, balayer, brosser les dents / les cheveux',
        'travailler, faire des courses, s’endormir',
      ],
    },
  ],
  exercises: [
    {
      id: 'c1-1',
      type: 'choix',
      prompt: 'Complétez : « Le matin, je ___ à 7 heures. »',
      options: ['me lève', 'lève', 'se lève', 'lever'],
      answer: 'me lève',
    },
    {
      id: 'c1-2',
      type: 'choix',
      prompt: 'Quel verbe convient ? « Le soir, je ___ des amis. »',
      options: ['retrouve', 'réveille', 'endors', 'brosse'],
      answer: 'retrouve',
    },
    {
      id: 'c1-3',
      type: 'ecriture',
      prompt: 'Écrivez le verbe correct : Je ___ (se doucher) tous les matins.',
      answer: 'me douche',
      accepted: ['je me douche'],
    },
    {
      id: 'c1-4',
      type: 'choix',
      prompt: 'Que signifie « faire des courses » ?',
      options: [
        'Acheter des aliments / des produits',
        'Courir dans un parc',
        'Suivre un cours de sport',
        'Envoyer un email',
      ],
      answer: 'Acheter des aliments / des produits',
    },
    {
      id: 'c1-5',
      type: 'ecriture',
      prompt: 'Complétez : « Je ___ un café et je choisis des vêtements. » (verbe : boire)',
      answer: 'bois',
      accepted: ['je bois'],
    },
    {
      id: 'c1-6',
      type: 'choix',
      prompt: '« Je m’endors » veut dire…',
      options: [
        'Je commence à dormir',
        'Je me lève',
        'Je me douche',
        'Je travaille',
      ],
      answer: 'Je commence à dormir',
    },
    {
      id: 'c1-7',
      type: 'ecriture',
      prompt: 'Écrivez une phrase complète : Je me lève à huit heures.',
      answer: "Je me lève à huit heures.",
      accepted: [
        'Je me leve a huit heures.',
        'je me lève à 8 heures',
        'Je me lève à 8 heures.',
      ],
    },
    {
      id: 'c1-8',
      type: 'choix',
      prompt: 'Complétez : « Elle ___ les dents après le petit déjeuner. »',
      options: ['se brosse', 'brosse', 'me brosse', 'brosser'],
      answer: 'se brosse',
    },
  ],
};
