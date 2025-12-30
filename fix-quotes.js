const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all .tsx files
const files = glob.sync('app/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;
  
  // Replace standalone apostrophes in text (but not in strings/attributes)
  // This is a simple approach - replace common patterns
  const replacements = [
    // Common contractions and possessives
    [/(\w)'(\w)/g, "$1&apos;$2"], // don't -> don&apos;t, it's -> it&apos;s
    [/(\w)'s\s/g, "$1&apos;s "], // firm's -> firm&apos;s
    [/(\w)'\s/g, "$1&apos; "], // firms' -> firms&apos;
    // Quotes in text content (but be careful with JSX attributes)
    [/([^=])"([^"]+)"([^>])/g, "$1&quot;$2&quot;$3"], // "text" -> &quot;text&quot;
  ];
  
  // More targeted replacements
  content = content.replace(/(\w)'re\s/g, "$1&apos;re ");
  content = content.replace(/(\w)'ve\s/g, "$1&apos;ve ");
  content = content.replace(/(\w)'ll\s/g, "$1&apos;ll ");
  content = content.replace(/(\w)'d\s/g, "$1&apos;d ");
  content = content.replace(/(\w)'m\s/g, "$1&apos;m ");
  content = content.replace(/(\w)'s\s/g, "$1&apos;s ");
  content = content.replace(/(\w)'\s/g, "$1&apos; ");
  
  // Fix quotes in paragraph text (but not in JSX attributes)
  content = content.replace(/(<p[^>]*>.*?)"([^"]+)"(.*?<\/p>)/gs, (match, p1, text, p2) => {
    return p1 + '&quot;' + text + '&quot;' + p2;
  });
  
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Fixed ${file}`);
});
