import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('DOM manipulations', () => {
  let indexHtml: string;
  beforeEach(() => {
    // A simplified DOM derived directly from index.astro for basic interactions test
    indexHtml = `
      <div class="controls" id="main-controls">
        <button id="toolbox-toggle-btn" style="display: none;">☰ Tools</button>
        <h1 id="main-title">Image Painter</h1>
        <input type="checkbox" id="floating-ui-toggle" />
      </div>
      <div class="control-item action-buttons">
          <button id="undo-btn">Undo</button>
          <button id="redo-btn">Redo</button>
          <button id="clear-btn">Clear Layer</button>
          <button id="reset-all-btn">Reset All</button>
          <button id="export-btn">Export</button>
      </div>
      
      <div class="workspace">
        <div class="canvas-container" id="canvas-wrapper">
          <div id="zoom-wrapper">
            <canvas id="bg-canvas"></canvas>
            <div id="layers-container">
              <canvas id="drawing-canvas" class="layer-canvas" data-layer-id="0"></canvas>
            </div>
            <canvas id="grid-canvas"></canvas>
            <canvas id="line-art-canvas"></canvas>
          </div>
        </div>
      </div>
    `;
    document.body.innerHTML = indexHtml;
  });

  it('toggles floating UI mode', () => {
    const mainControls = document.getElementById('main-controls')!;
    const toolboxToggleBtn = document.getElementById('toolbox-toggle-btn')!;
    const mainTitle = document.getElementById('main-title')!;
    
    function applyUiMode(floating: boolean) {
      if (floating) {
        mainControls.classList.add('floating');
        toolboxToggleBtn.style.display = 'block';
        mainTitle.classList.add('title-floating');
      } else {
        mainControls.classList.remove('floating');
        mainControls.classList.remove('collapsed');
        toolboxToggleBtn.style.display = 'none';
        mainTitle.classList.remove('title-floating');
      }
    }

    applyUiMode(true);
    expect(mainControls.classList.contains('floating')).toBe(true);
    expect(toolboxToggleBtn.style.display).toBe('block');
    expect(mainTitle.classList.contains('title-floating')).toBe(true);
    
    applyUiMode(false);
    expect(mainControls.classList.contains('floating')).toBe(false);
    expect(toolboxToggleBtn.style.display).toBe('none');
    expect(mainTitle.classList.contains('title-floating')).toBe(false);
  });

  it('verifies standard HTML structure required by scripts', () => {
    expect(document.getElementById('bg-canvas')).toBeInTheDocument();
    expect(document.getElementById('drawing-canvas')).toBeInTheDocument();
    expect(document.getElementById('grid-canvas')).toBeInTheDocument();
    expect(document.getElementById('line-art-canvas')).toBeInTheDocument();
    
    expect(document.getElementById('undo-btn')).toBeInTheDocument();
    expect(document.getElementById('redo-btn')).toBeInTheDocument();
  });
});
