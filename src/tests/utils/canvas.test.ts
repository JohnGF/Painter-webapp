import { describe, it, expect } from 'vitest';
import { matchColor, setColor } from '../../utils/canvas';

describe('Canvas Utils', () => {
  describe('matchColor', () => {
    it('returns true for matching colors', () => {
      const data = new Uint8ClampedArray([255, 0, 0, 255]);
      expect(matchColor(data, 0, 255, 0, 0, 255)).toBe(true);
    });

    it('returns false for non-matching colors', () => {
      const data = new Uint8ClampedArray([255, 0, 0, 255]);
      expect(matchColor(data, 0, 0, 255, 0, 255)).toBe(false);
    });
  });

  describe('setColor', () => {
    it('sets color at position', () => {
      const data = new Uint8ClampedArray([0, 0, 0, 0]);
      setColor(data, 0, 255, 128, 64, 255);
      expect(data[0]).toBe(255);
      expect(data[1]).toBe(128);
      expect(data[2]).toBe(64);
      expect(data[3]).toBe(255);
    });
  });
});
