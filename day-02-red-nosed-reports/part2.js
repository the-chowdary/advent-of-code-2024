import { puzzle } from './input.js';
import { fixSequence } from './utils.js';

export default function part2(input) {
  const result = input.map(arr => fixSequence(arr));
  return result.filter(value => value === true).length;
}

const input = puzzle('testInput.txt');
console.log(part2(input));
