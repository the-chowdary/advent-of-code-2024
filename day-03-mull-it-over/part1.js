import { puzzle } from './input.js';

export default function part1(input) {
  let result = 0;
  let match = 0;
  const regex = /mul\((\d+),(\d+)\)/g;
  input = input.join('\n').match(regex);

  while ((match = regex.exec(input.join('\n'))) !== null) {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);

    result += x * y;
  }
  return result;
}

const input = puzzle('testInput.txt');
console.log(part1(input));
