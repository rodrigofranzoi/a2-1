import { ModuleData } from '../types';

export const cours2: ModuleData = {
  id: 'cours2',
  number: '2',
  title: 'Le présent — invitations et sorties',
  objectif: 'Réviser le présent et parler d’invitations (repas, pique-nique).',
  summary:
    'On révise les verbes essentiels au présent et on s’entraîne à accepter ou refuser une invitation.',
  imagePack: 'routine',
  sections: [
    {
      title: 'Compréhension',
      bullets: [
        'Comprendre un message téléphonique : changement de plan (repas en famille → pique-nique).',
        'Repérer qui, où, quoi.',
      ],
      examples: [
        'Je suis désolée mais il y a un changement.',
        'Je peux venir au pique-nique.',
        'On se retrouve où ?',
      ],
    },
    {
      title: 'Verbes au présent',
      bullets: [
        'aller, faire, avoir, prendre, aimer, être, apprendre, pouvoir',
        'se retrouver, s’appeler',
      ],
      examples: [
        'Je vais au parc.',
        'Nous faisons un pique-nique.',
        'Ils peuvent venir demain.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c2-1',
      type: 'choix',
      prompt: 'Conjuguez : « Nous ___ (aller) au parc. »',
      options: ['allons', 'allez', 'vont', 'vais'],
      answer: 'allons',
    },
    {
      id: 'c2-2',
      type: 'choix',
      prompt: '« Je peux venir » exprime…',
      options: ['une possibilité / un accord', 'un refus', 'une obligation', 'un passé'],
      answer: 'une possibilité / un accord',
    },
    {
      id: 'c2-3',
      type: 'ecriture',
      prompt: 'Complétez : On se ___ où ? (verbe : se retrouver)',
      answer: 'retrouve',
      accepted: ['On se retrouve'],
    },
    {
      id: 'c2-4',
      type: 'choix',
      prompt: 'Conjuguez : « Ils ___ (faire) un pique-nique. »',
      options: ['font', 'faites', 'faisons', 'fait'],
      answer: 'font',
    },
    {
      id: 'c2-5',
      type: 'ecriture',
      prompt: 'Écrivez : Je suis désolée mais il y a un changement.',
      answer: 'Je suis désolée mais il y a un changement.',
      accepted: [
        'Je suis desolee mais il y a un changement.',
        'Je suis désolé mais il y a un changement.',
      ],
    },
    {
      id: 'c2-6',
      type: 'choix',
      prompt: 'Conjuguez : « Tu ___ (avoir) le temps ? »',
      options: ['as', 'a', 'avez', 'avons'],
      answer: 'as',
    },
    {
      id: 'c2-7',
      type: 'ecriture',
      prompt: 'Conjuguez au présent : je ___ (pouvoir)',
      answer: 'peux',
      accepted: ['je peux'],
    },
    {
      id: 'c2-8',
      type: 'choix',
      prompt: 'Conjuguez : « Elle ___ (prendre) le bus. »',
      options: ['prend', 'prenez', 'prennent', 'prenons'],
      answer: 'prend',
    },
    {
      id: 'c2-9',
      type: 'choix',
      prompt: 'Conjuguez : « Vous ___ (être) libres demain ? »',
      options: ['êtes', 'sont', 'sommes', 'est'],
      answer: 'êtes',
    },
    {
      id: 'c2-10',
      type: 'ecriture',
      prompt: 'Conjuguez : nous ___ (faire)',
      answer: 'faisons',
      accepted: ['nous faisons'],
    },
    {
      id: 'c2-11',
      type: 'choix',
      prompt: 'Pour refuser poliment une invitation, on peut dire…',
      options: [
        'Je suis désolé(e), je ne peux pas.',
        'Je vais au pique-nique maintenant.',
        'On se retrouve où ?',
        'Ils font un pique-nique.',
      ],
      answer: 'Je suis désolé(e), je ne peux pas.',
    },
    {
      id: 'c2-12',
      type: 'ecriture',
      prompt: 'Écrivez : Je peux venir demain.',
      answer: 'Je peux venir demain.',
      accepted: ['Je peux venir demain'],
    },
    {
      id: 'c2-13',
      type: 'choix',
      prompt: 'Conjuguez : « Ils ___ (aimer) le picnic. »',
      options: ['aiment', 'aime', 'aimez', 'aimons'],
      answer: 'aiment',
    },
    {
      id: 'c2-14',
      type: 'choix',
      prompt: 'Conjuguez : « Je ___ (apprendre) le français. »',
      options: ['apprends', 'apprend', 'apprenez', 'apprenons'],
      answer: 'apprends',
    },
    {
      id: 'c2-15',
      type: 'ecriture',
      prompt: 'Complétez : Comment tu ___ ? (s’appeler)',
      answer: "t'appelles",
      accepted: ["tu t'appelles", 'tappelles', "t'appelles"],
    },
    {
      id: 'c2-16',
      type: 'choix',
      prompt: '« Il y a un changement » signifie…',
      options: [
        'quelque chose a changé',
        'tout est identique',
        'on annule le présent',
        'on conjugue un verbe',
      ],
      answer: 'quelque chose a changé',
    },
  ],
};
