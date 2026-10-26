import { gradeAnswer, normalizeAnswer } from './normalizeAnswer';

function assert(cond: boolean, msg: string) {
  if (!cond) throw new Error(msg);
}

assert(normalizeAnswer("C'est") === 'cest', 'normalize apostrophe');
assert(gradeAnswer('cest', "C'est").status === 'proche', 'cest ~ C\'est');
assert(gradeAnswer("C'est", "C'est").status === 'exact', 'exact match');
assert(gradeAnswer('Il feit froid', 'Il fait froid').status === 'proche', 'typo feit');
assert(gradeAnswer('bonjour', 'Il fait froid').status === 'faux', 'wrong answer');

console.log('Tous les tests de correction souple sont OK.');
