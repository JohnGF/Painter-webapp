import { describe, it, expect } from 'vitest';
import { hexToRgb, rgbToHex, hexToHsl, hslToHex } from '../../utils/colors';

describe('Color Utils', () => {
  describe('hexToRgb', () => {
    it('converts valid hex to rgb', () => {
      expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0, a: 255 });
      expect(hexToRgb('#00ff00')).toEqual({ r: 0, g: 255, b: 0, a: 255 });
      expect(hexToRgb('#0000ff')).toEqual({ r: 0, g: 0, b: 255, a: 255 });
      expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255, a: 255 });
      expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0, a: 255 });
    });

    it('returns default for invalid hex', () => {
      expect(hexToRgb('invalid')).toEqual({ r: 0, g: 0, b: 0, a: 255 });
    });
  });

  describe('rgbToHex', () => {
    it('converts valid rgb to hex', () => {
      expect(rgbToHex(255, 0, 0)).toBe('#ff0000');
      expect(rgbToHex(0, 255, 0)).toBe('#00ff00');
      expect(rgbToHex(0, 0, 255)).toBe('#0000ff');
      expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
      expect(rgbToHex(0, 0, 0)).toBe('#000000');
    });
  });

  describe('hexToHsl', () => {
    it('converts hex to hsl', () => {
      const red = hexToHsl('#ff0000');
      expect(red.h).toBe(0);
      expect(red.s).toBe(100);
      expect(red.l).toBe(50);
    });
  });

  describe('hslToHex', () => {
    it('converts hsl to hex', () => {
      expect(hslToHex(0, 100, 50)).toBe('#ff0000');
      expect(hslToHex(120, 100, 50)).toBe('#00ff00');
      expect(hslToHex(240, 100, 50)).toBe('#0000ff');
    });
  });
});
