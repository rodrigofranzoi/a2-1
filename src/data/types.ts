export type ExerciseType = 'choix' | 'ecriture';

export type ChoiceExercise = {
  id: string;
  type: 'choix';
  prompt: string;
  options: string[];
  answer: string;
  hint?: string;
};

export type WriteExercise = {
  id: string;
  type: 'ecriture';
  prompt: string;
  answer: string;
  accepted?: string[];
  hint?: string;
};

export type Exercise = ChoiceExercise | WriteExercise;

export type LessonSection = {
  title: string;
  bullets: string[];
  examples?: string[];
};

export type VocabItem = {
  id: string;
  label: string;
  category?: string;
};

export type ModuleData = {
  id: string;
  number: string;
  title: string;
  objectif: string;
  summary: string;
  sections: LessonSection[];
  vocabIds?: string[];
  imagePack?: 'routine' | 'vetements' | 'meteo' | 'lieux' | 'directions' | 'pieces' | 'caractere' | 'pays';
  exercises: Exercise[];
};
