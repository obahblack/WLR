/* build.js — assembles about-v1/v2/v3.html from the shared sources.
   Pages are self-contained single files that render when opened directly via
   file:// (inline text/babel + shared-data.js loaded as a plain script, which
   browsers do load from file:// — only Babel's external-script fetching is
   blocked). Re-run with: node build.js
   Usage: node build.js */

const fs = require('fs');
const path = require('path');

const dir = __dirname;
const sharedJsx = fs.readFileSync(path.join(dir, 'shared.jsx'), 'utf8');

const PAGES = [
  {
    file: 'about-v1.html',
    src: 'pages/about-v1.jsx',
    title: 'About — White Label Resell',
    description: 'White Label Resell is the people behind your digital work — a multidisciplinary team of named specialists designing, building and growing better digital businesses under your brand. est. 2018.',
  },
  {
    file: 'about-v2.html',
    src: 'pages/about-v2.jsx',
    title: 'About — White Label Resell',
    description: 'The story and culture of White Label Resell — a specialist team that partners with agencies to design, build and grow better digital businesses. est. 2018.',
  },
  {
    file: 'about-v3.html',
    src: 'pages/about-v3.jsx',
    title: 'About — White Label Resell',
    description: 'The White Label Resell collective — a multidisciplinary team of specialists connected by one shared standard, building better digital businesses together. est. 2018.',
  },
];

const SCRIPTS = `<!-- React + Babel from unpkg, pinned with SRI (same as home.html) -->
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
<!-- shared verified data (plain JS — loads under file://) -->
<script src="shared-data.js"></script>`;

const template = (title, description, body) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${description}" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="design.css">
</head>
<body>
<div id="root"></div>
${SCRIPTS}
<script type="text/babel">
${body}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</script>
</body>
</html>
`;

for (const p of PAGES) {
  const page = fs.readFileSync(path.join(dir, p.src), 'utf8');
  if (/<\/script/i.test(sharedJsx)) throw new Error('shared.jsx contains </script>');
  if (/<\/script/i.test(page)) throw new Error(p.src + ' contains </script>');
  const html = template(p.title, p.description, sharedJsx + '\n' + page);
  fs.writeFileSync(path.join(dir, p.file), html);
  console.log('built ' + p.file + ' (' + html.length + ' bytes)');
}
console.log('done');
