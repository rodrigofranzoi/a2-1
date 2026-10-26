import { ModuleData } from '../types';
import { cours1 } from './cours1';
import { cours2 } from './cours2';
import { cours3 } from './cours3';
import { cours4 } from './cours4';
import { cours5 } from './cours5';
import { cours6 } from './cours6';
import { cours7 } from './cours7';
import { cours8 } from './cours8';
import { cours9 } from './cours9';
import { cours10 } from './cours10';
import { cours11 } from './cours11';
import { cours12 } from './cours12';
import { cours13 } from './cours13';
import { vetements } from './vetements';

export const modules: ModuleData[] = [
  cours1,
  cours2,
  cours3,
  cours4,
  cours5,
  cours6,
  cours7,
  cours8,
  cours9,
  cours10,
  cours11,
  cours12,
  cours13,
  vetements,
];

export function getModule(id: string): ModuleData | undefined {
  return modules.find((m) => m.id === id);
}
