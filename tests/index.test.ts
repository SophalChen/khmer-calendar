import { describe, expect, it } from 'vitest';
import { VERSION } from '../src/index.js';

describe('Khmer Calendar', () => {
  it('has a valid version', () => {
    expect(VERSION).toBe('0.1.0');
  });
});