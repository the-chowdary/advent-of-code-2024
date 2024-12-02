import { puzzle } from './input.js';

export default function part2(input) {
  const regex = /(\d+)\s+(\d+)/g;

  let list1 = [];
  let list2 = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    list1.push(parseInt(match[1], 10));
    list2.push(parseInt(match[2], 10));
  }

  const countMap = list2.reduce((map, item) => {
    map[item] = (map[item] || 0) + 1;
    return map;
  }, {});

  let result = 0;
  for (let num of list1) {
    const frequency = countMap[num] || 0;
    result += num * frequency;
  }
  return result;
}

const input = puzzle('testInput.txt');
console.log(part2(input));
