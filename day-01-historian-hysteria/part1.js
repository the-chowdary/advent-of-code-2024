import { puzzle } from './input.js';

export default function part1(input) {
  const regex = /(\d+)\s+(\d+)/g;

  let list1 = [];
  let list2 = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    list1.push(parseInt(match[1], 10));
    list2.push(parseInt(match[2], 10));
  }

  list1.sort();
  list2.sort();

  let result = 0;
  let i= 0;
  while (i != list1.length) {
    result += Math.abs(list1[i] - list2[i]);
    i++;
  }
  return result;
}

const input = puzzle('testInput.txt');
console.log(part1(input));
