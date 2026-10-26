import { ModuleData } from '../types';

export const cours5: ModuleData = {
  id: 'cours5',
  number: '5',
  title: 'Physique (2) — vêtements et matières',
  objectif: 'Nommer les vêtements et utiliser les prépositions en / de / à.',
  summary:
    'Vocabulaire des vêtements, accessoires et matières. Attention aux prépositions : en coton, de toilette, à dents.',
  imagePack: 'vetements',
  vocabIds: [
    'chemise',
    'pull',
    'robe',
    'pantalon',
    'jupe',
    'manteau',
    'baskets',
    'chapeau',
  ],
  sections: [
    {
      title: 'Les vêtements',
      bullets: [
        'Hauts : chemise, pull, sweat, gilet, t-shirt, veste, manteau, doudoune',
        'Bas : pantalon, jupe, short, robe',
        'Chaussures : baskets, bottes, bottines, talons, sandales',
        'Accessoires : casquette, chapeau, sac, bague, bracelet, boucles d’oreilles',
      ],
    },
    {
      title: 'Prépositions : en / de / à',
      bullets: [
        'en + matière : une serviette en coton, un pull en laine, un sac en cuir',
        'de + usage / type : une trousse de toilette, un sac de sport',
        'à + objet : une brosse à dents, un fer à cheveux',
      ],
      examples: [
        'Il a la peau blanche.',
        'Il porte des lunettes.',
        'Une serviette en coton.',
      ],
    },
  ],
  exercises: [
    {
      id: 'c5-1',
      type: 'choix',
      prompt: '« Un pull ___ laine »',
      options: ['en', 'de', 'à', 'du'],
      answer: 'en',
    },
    {
      id: 'c5-2',
      type: 'choix',
      prompt: '« Une trousse ___ toilette »',
      options: ['de', 'en', 'à', 'du'],
      answer: 'de',
    },
    {
      id: 'c5-3',
      type: 'choix',
      prompt: '« Une brosse ___ dents »',
      options: ['à', 'en', 'de', 'au'],
      answer: 'à',
    },
    {
      id: 'c5-4',
      type: 'ecriture',
      prompt: 'Écrivez le nom du vêtement : une ___ (dress)',
      answer: 'robe',
      accepted: ['une robe'],
    },
    {
      id: 'c5-5',
      type: 'ecriture',
      prompt: 'Complétez : Il porte des ___. (glasses)',
      answer: 'lunettes',
      accepted: ['des lunettes', 'Il porte des lunettes'],
    },
    {
      id: 'c5-6',
      type: 'choix',
      prompt: 'Quel mot désigne un manteau chaud gonflé ?',
      options: ['doudoune', 'jupe', 'short', 'sandales'],
      answer: 'doudoune',
    },
    {
      id: 'c5-7',
      type: 'choix',
      prompt: '« Un sac ___ cuir »',
      options: ['en', 'de', 'à', 'au'],
      answer: 'en',
    },
    {
      id: 'c5-8',
      type: 'ecriture',
      prompt: 'Écrivez : C’est une chemise.',
      answer: "C'est une chemise.",
      accepted: ["Cest une chemise.", "C'est une chemise", 'Cest une chemise'],
    },
    {
      id: 'c5-9',
      type: 'choix',
      prompt: 'Les baskets sont…',
      options: ['des chaussures de sport', 'un chapeau', 'une jupe', 'un manteau'],
      answer: 'des chaussures de sport',
    },
  ],
};
