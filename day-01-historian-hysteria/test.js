import assert from 'assert';
import part1 from './part1.js';
import part2 from './part2.js';
import { puzzle } from './input.js';

const testInput = puzzle('testInput.txt');

describe('Day 1: Historian Hysteria -> Part - 1', () => {
  it('should calculate distance apart and add them', () => {
    assert.strictEqual(part1(testInput), 11);
  });
});

describe('Day 1: Historian Hysteria -> Part - 2', () => {
  it('should calculate similarity score of right list item and multiply with left list item', () => {
    assert.strictEqual(part2(testInput), 31);
  });
});
