// Regenerates Andre_Ottoni_Resume.pdf from index.html.
// Usage: npx -p playwright node scripts/build-pdf.js
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const root = path.join(__dirname, '..');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(root, 'index.html'), { waitUntil: 'networkidle' });
  await page.pdf({ path: path.join(root, 'Andre_Ottoni_Resume.pdf'), preferCSSPageSize: true, printBackground: true });
  await browser.close();
})();
