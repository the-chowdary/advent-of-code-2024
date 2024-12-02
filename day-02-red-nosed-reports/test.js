import assert from 'assert';
import part1 from './part1.js';
import part2 from './part2.js';
import { puzzle } from './input.js';

const testInput = puzzle('testInput.txt');

describe('Day 2: Red-Nosed Reports -> Part - 1', () => {
  it('should calculate number of safe reports', () => {
    assert.strictEqual(part1(testInput), 2);
  });
});

describe('Day 2: Red-Nosed Reports -> Part - 2', () => {
  it('should calculate number of safe reports after removing a level', () => {
    assert.strictEqual(part2(testInput), 4);
  });
});
