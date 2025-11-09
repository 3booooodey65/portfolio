import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const tailwindPreflightPath = resolve(projectRoot, 'node_modules', 'tailwindcss', 'lib', 'css', 'preflight.css');
const fallbackPreflightPath = resolve(projectRoot, 'vendor', 'tailwind', 'preflight.css');

if (!existsSync(tailwindPreflightPath)) {
  if (!existsSync(fallbackPreflightPath)) {
    console.warn('[ensure-tailwind-preflight] Fallback preflight.css not found; skipping copy.');
  } else {
    mkdirSync(dirname(tailwindPreflightPath), { recursive: true });
    copyFileSync(fallbackPreflightPath, tailwindPreflightPath);
    console.log('[ensure-tailwind-preflight] Restored Tailwind preflight.css from local fallback.');
  }
}
