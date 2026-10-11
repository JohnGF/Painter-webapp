import '@testing-library/jest-dom/vitest';

// Mock TextEncoder / TextDecoder
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

// Mock window.alert
window.alert = () => {};

// Mock FileReader
class MockFileReader {
  onload: ((e: any) => void) | null = null;
  readAsDataURL() {
    if (this.onload) {
      this.onload({ target: { result: 'data:image/png;base64,' } });
    }
  }
}
(global as any).FileReader = MockFileReader;

// Mock Image
class MockImage {
  onload: (() => void) | null = null;
  src: string = '';
  width: number = 100;
  height: number = 100;
  set srcAttr(val: string) {
    this.src = val;
    if (this.onload) setTimeout(this.onload, 0);
  }
}
(global as any).Image = MockImage;

// Mock Canvas context
const mockContext = {
  fillRect: () => {},
  clearRect: () => {},
  getImageData: () => ({
    data: new Uint8ClampedArray(400), // 10x10
    width: 10,
    height: 10
  }),
  putImageData: () => {},
  createImageData: () => ({}),
  setTransform: () => {},
  drawImage: () => {},
  save: () => {},
  fillText: () => {},
  restore: () => {},
  beginPath: () => {},
  moveTo: () => {},
  lineTo: () => {},
  closePath: () => {},
  stroke: () => {},
  translate: () => {},
  scale: () => {},
  rotate: () => {},
  arc: () => {},
  fill: () => {},
  measureText: () => ({ width: 0 }),
  transform: () => {},
  rect: () => {},
  clip: () => {},
};

(HTMLCanvasElement.prototype as any).getContext = () => mockContext;
(HTMLCanvasElement.prototype as any).toDataURL = () => 'data:image/png;base64,';

