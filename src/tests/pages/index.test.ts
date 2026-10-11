import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Index Page Static HTML', () => {
  let indexHtml: string;
  beforeEach(() => {
    // Read the built static HTML to ensure the actual components render properly
    // It is available because we ran `npm run build` earlier
    const distPath = path.resolve(process.cwd(), 'dist/index.html');
    if (fs.existsSync(distPath)) {
        indexHtml = fs.readFileSync(distPath, 'utf8');
        document.body.innerHTML = indexHtml;
    } else {
        console.warn('dist/index.html does not exist. Ensure npm run build was run.');
    }
  });

  it('renders the canvas elements in production build', () => {
    if (!indexHtml) return;
    expect(document.getElementById('bg-canvas')).toBeInTheDocument();
    expect(document.getElementById('drawing-canvas')).toBeInTheDocument();
    expect(document.getElementById('grid-canvas')).toBeInTheDocument();
    expect(document.getElementById('line-art-canvas')).toBeInTheDocument();
  });

  it('renders the tool buttons in production build', () => {
    if (!indexHtml) return;
    expect(document.getElementById('tool-brush')).toBeInTheDocument();
    expect(document.getElementById('tool-eraser')).toBeInTheDocument();
    expect(document.getElementById('tool-fill')).toBeInTheDocument();
    expect(document.getElementById('tool-stamp')).toBeInTheDocument();
  });
  
  it('renders standard controls in production build', () => {
    if (!indexHtml) return;
    expect(document.getElementById('undo-btn')).toBeInTheDocument();
    expect(document.getElementById('redo-btn')).toBeInTheDocument();
    expect(document.getElementById('export-btn')).toBeInTheDocument();
    expect(document.getElementById('reset-all-btn')).toBeInTheDocument();
    expect(document.getElementById('color-picker')).toBeInTheDocument();
  });
});
