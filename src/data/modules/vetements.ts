import { ModuleData } from '../types';

export const vetements: ModuleData = {
  id: 'vetements',
  number: 'V',
  title: 'Vocabulaire — les vêtements',
  objectif: 'Mémoriser le vocabulaire des vêtements, chaussures, accessoires et couleurs.',
  summary:
    'Référence illustrée : hauts, bas, chaussures, accessoires, pluie/froid et couleurs.',
  imagePack: 'vetements',
  vocabIds: [
    'chemise',
    'pull',
    'sweat',
    'robe',
    'pantalon',
    'jupe',
    'short',
    'manteau',
    'veste',
    'baskets',
    'bottes',
    'sandales',
    'chapeau',
    'casquette',
    'bonnet',
    'echarpe',
    'gants',
    'sac',
  ],
  sections: [
    {
      title: 'Hauts',
      bullets: [
        't-shirt, chemise, pull, sweat, cardigan, débardeur, blouse, veste, gilet',
      ],
    },
    {
      title: 'Bas',
      bullets: [
        'pantalon, jean, short, jupe, robe, legging, jogging, bermuda, salopette',
      ],
    },
    {
      title: 'Chaussures',
      bullets: [
        'baskets, chaussures, bottes, sandales, tongs, talons, mocassins, chaussons, escarpins',
      ],
    },
    {
      title: 'Accessoires',
      bullets: [
        'chapeau, casquette, bonnet, gants, écharpe, ceinture, foulard, cravate',
        'sac, sac à dos, lunettes, montre, bracelet',
      ],
    },
    {
      title: 'Pluie et froid',
      bullets: ['imperméable, parapluie, manteau, doudoune'],
    },
    {
      title: 'Couleurs',
      bullets: [
        'blanc, noir, gris, rouge, rose, bleu, vert, jaune, marron, beige, orange',
      ],
      examples: ['Un pull rouge.', 'Des baskets blanches.', 'Une écharpe grise.'],
    },
  ],
  exercises: [
    {
      id: 'v-1',
      type: 'choix',
      prompt: 'On met sur la tête quand il fait froid :',
      options: ['un bonnet', 'un jean', 'des sandales', 'une jupe'],
      answer: 'un bonnet',
    },
    {
      id: 'v-2',
      type: 'choix',
      prompt: 'Pour la pluie, on prend…',
      options: ['un parapluie', 'des tongs', 'un débardeur', 'une cravate'],
      answer: 'un parapluie',
    },
    {
      id: 'v-3',
      type: 'ecriture',
      prompt: 'Écrivez : un pantalon',
      answer: 'un pantalon',
      accepted: ['pantalon'],
    },
    {
      id: 'v-4',
      type: 'ecriture',
      prompt: 'Traduisez : scarf → une ___',
      answer: 'écharpe',
      accepted: ['echarpe', 'une écharpe', 'une echarpe'],
    },
    {
      id: 'v-5',
      type: 'choix',
      prompt: 'Les sandales se portent plutôt…',
      options: ['en été', 'sous la neige', 'au ski seulement', 'dans le four'],
      answer: 'en été',
    },
    {
      id: 'v-6',
      type: 'choix',
      prompt: 'Une doudoune est…',
      options: ['un manteau chaud', 'une chaussure', 'un short', 'une ceinture'],
      answer: 'un manteau chaud',
    },
    {
      id: 'v-7',
      type: 'ecriture',
      prompt: "Écrivez : C’est un pull bleu.",
      answer: "C'est un pull bleu.",
      accepted: ["Cest un pull bleu.", "C'est un pull bleu"],
    },
    {
      id: 'v-8',
      type: 'choix',
      prompt: 'Complétez : des ___ noires (shoes for sport)',
      options: ['baskets', 'gants', 'cravates', 'bonnets'],
      answer: 'baskets',
    },
    {
      id: 'v-9',
      type: 'ecriture',
      prompt: 'Écrivez la couleur : rouge',
      answer: 'rouge',
    },
    {
      id: 'v-10',
      type: 'choix',
      prompt: 'On porte des gants…',
      options: ['aux mains', 'aux pieds', 'autour du cou seulement', 'dans les cheveux'],
      answer: 'aux mains',
    },
  ],
};
