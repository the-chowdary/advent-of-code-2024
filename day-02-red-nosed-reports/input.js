import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const puzzle = (inputFile) => {
  const input = fs
    .readFileSync(path.join(__dirname, inputFile), 'utf-8')
    .toString()
    .trim()
    .split('\n');

  const regex = /\d+/g;
  return input.map(line => {
    return line.match(regex).map(Number);
  });
  
};
