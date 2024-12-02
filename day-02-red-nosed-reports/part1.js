import { puzzle } from './input.js';
import { isStrictlyIncreasingOrDecreasing } from './utils.js';

export default function part1(input) {
  const result = input.map(arr => isStrictlyIncreasingOrDecreasing(arr));
  return result.filter(value => value === true).length;
}

const input = puzzle('testInput.txt');
console.log(part1(input));
