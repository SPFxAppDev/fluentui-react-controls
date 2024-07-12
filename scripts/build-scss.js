//Convert to css files an replace .scss import to .css
const path = require('path');
const fs = require('fs');
const sass = require('sass');

const srcDir = path.resolve(__dirname, '..', 'src/controls');
const libDir = path.resolve(__dirname, '..', 'lib');

const compileSass = (srcPath, distPath) => {
  const result = sass.compile(srcPath, {
    style: 'compressed', // This will produce minified CSS
  });
  fs.writeFileSync(distPath, result.css);
};

const processDirectory = (dir, subdir = '') => {
  fs.readdirSync(dir).forEach((file) => {
    const srcFile = path.join(dir, file);
    const relPath = path.relative(srcDir, srcFile);
    const libFile = path.join(libDir, relPath);
    const isMainCss = file.endsWith('main.scss');

    if (fs.statSync(srcFile).isDirectory()) {
      fs.mkdirSync(libFile, { recursive: true });
      processDirectory(srcFile, path.join(subdir, file));
    } else if (file.endsWith('.only.scss') || isMainCss) {
      if (isMainCss) {
        // Copy .scss file
        fs.copyFileSync(srcFile, libFile);
        console.log(`Copied: ${srcFile} to ${libFile}`);
      }

      const replaceTerm = isMainCss ? '.scss' : '.only.scss';

      // Compile to .css
      const cssFile = libFile.replace(replaceTerm, '.css');
      compileSass(srcFile, cssFile);
      console.log(`Compiled: ${srcFile} to ${cssFile}`);
    }
  });
};

// const replaceScssReferences = (dir) => {
//   fs.readdirSync(dir).forEach((file) => {
//     const srcFile = path.join(dir, file);
//     if (fs.statSync(srcFile).isDirectory()) {
//       replaceScssReferences(srcFile);
//     } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
//       let content = fs.readFileSync(srcFile, 'utf8');
//       content = content.replace(/\.scss/g, '.css');
//       fs.writeFileSync(srcFile, content);
//     }
//   });
// };

const replaceMainScssReference = () => {
  const indexFilePath = path.resolve(libDir, 'index.js');
  let content = fs.readFileSync(indexFilePath, 'utf8');
  content = content.replace(/\.scss/g, '.css');
  fs.writeFileSync(indexFilePath, content);
};

// Process the src/controls directory
processDirectory(srcDir);

// Replace SCSS references with CSS in lib directory
// replaceScssReferences(libDir);

replaceMainScssReference(libDir);

console.log('Processing complete.');
