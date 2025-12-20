import fs from 'fs';
import path from 'path';

/**
 * Reads and minifies critical CSS for inlining
 * This reduces render-blocking by inlining essential styles
 */
export function getCriticalCSS(): string {
  const criticalCSSPath = path.join(process.cwd(), 'src/app/critical.css');

  try {
    const criticalCSS = fs.readFileSync(criticalCSSPath, 'utf-8');

    // Minify CSS: remove comments, extra whitespace, newlines
    return criticalCSS
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Collapse whitespace
      .replace(/\s*([{}:;,])\s*/g, '$1') // Remove space around special chars
      .trim();
  } catch (error) {
    console.warn('Critical CSS not found, using fallback');
    // Fallback minimal critical CSS
    return 'html{scroll-behavior:smooth}body{background-color:#02021e;color:#f8f8f8;margin:0;font-family:system-ui,sans-serif}';
  }
}
