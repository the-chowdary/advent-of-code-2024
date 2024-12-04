import assert from 'assert';
import part1 from './part1.js';
import { puzzle } from './input.js';

const testInput = puzzle('testInput.txt');

describe('Day 3: Mull It Over -> Part - 1', () => {
  it('should calculate corrupted memory for uncorrupted mul instructions', () => {
    assert.strictEqual(part1(testInput), 161);
  });
});

