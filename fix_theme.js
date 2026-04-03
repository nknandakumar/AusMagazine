const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'app/globals.css',
  'app/page.tsx',
  'app/about/page.tsx',
  'app/contact/page.tsx',
  'app/get-featured/page.tsx',
  'components/ui/Button.tsx',
  'components/ui/AnimatedButton.tsx',
  'components/ui/Navbar.tsx',
  'components/ui/Footer.tsx',
  'components/ui/AnimatedStatCard.tsx',
  'components/ui/PackageCard.tsx',
  'components/ui/Ticker.tsx',
  'components/ui/MarqueeStrip.tsx'
];

function replaceInFile(filePath, replacements) {
  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });
  fs.writeFileSync(fullPath, content);
}

// 1. globals.css
replaceInFile('app/globals.css', [
  { from: /--color-background:\s*#[a-zA-Z0-9]+;/g, to: '--color-background: #ffffff;' },
  { from: /--color-foreground:\s*#[a-zA-Z0-9]+;/g, to: '--color-foreground: #000000;' },
  { from: /--color-primary:\s*#[a-zA-Z0-9]+;/g, to: '--color-primary: #000000;' },
  { from: /--color-secondary:\s*#[a-zA-Z0-9]+;/g, to: '--color-secondary: #C8102E;' },
  { from: /--color-accent:\s*#[a-zA-Z0-9]+;/g, to: '--color-accent: #C8102E;' },
  { from: /--color-primary-tint:\s*#[a-zA-Z0-9]+;/g, to: '--color-primary-tint: #fafafa;' },
]);

// 2. Button.tsx
replaceInFile('components/ui/Button.tsx', [
  { from: /bg-gold/g, to: 'bg-accent' },
  { from: /text-black/g, to: 'text-white' },
  { from: /hover:bg-white hover:text-black/g, to: 'hover:bg-black hover:text-white' }, // default variant hover
]);
// outline variant
replaceInFile('components/ui/Button.tsx', [
  { from: /border border-white bg-transparent text-white hover:bg-black hover:text-white/g, to: 'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white' }
]);

// 3. AnimatedButton.tsx
replaceInFile('components/ui/AnimatedButton.tsx', [
  { from: /bg-gold border-2 border-gold text-black/g, to: 'bg-accent border-2 border-accent text-white' },
  { from: /bg-black transition-all/g, to: 'bg-primary transition-all' },
  { from: /group-hover:text-white/g, to: 'group-hover:text-white' },
  { from: /bg-black flex items-center/g, to: 'bg-primary flex items-center' }
]);

console.log("Basic theme and buttons replaced");
