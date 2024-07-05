//Convert to css files an replace .scss import to .css

const path = require('path');
const fs = require('fs');
const sass = require('sass');

const srcDir = path.resolve(__dirname, 'src/controls');

const compileSass = (srcPath, distPath) => {
  const result = sass.renderSync({ file: srcPath });
  fs.writeFileSync(distPath, result.css);
};

const replaceReferences = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const srcFile = path.join(dir, file);
    if (fs.statSync(srcFile).isDirectory()) {
      replaceReferences(srcFile);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(srcFile, 'utf8');
      content = content.replace(/\.scss/g, '.css');
      fs.writeFileSync(srcFile, content);
    }
  });
};

const processDirectory = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const srcFile = path.join(dir, file);
    const destFile = srcFile.replace('.scss', '.css');
    if (fs.statSync(srcFile).isDirectory()) {
      processDirectory(srcFile);
    } else if (file.endsWith('.scss')) {
      compileSass(srcFile, destFile);
    }
  });
};

processDirectory(srcDir);
replaceReferences(srcDir);

//OLD
// const path = require('path');
// const fs = require('fs');
// const sass = require('sass');

// const srcDir = path.resolve(__dirname, 'src/controls/scss');
// const distDir = path.resolve(__dirname, 'lib/css');

// const compileSass = (srcPath, distPath) => {
//   const result = sass.compile(srcPath);
//   fs.writeFileSync(distPath, result.css);
// };

// const copyScssFiles = (srcPath, destPath) => {
//   fs.copyFileSync(srcPath, destPath);
// };

// const processDirectory = (dir, subdir = '') => {
//   fs.readdirSync(dir).forEach((file) => {
//     const srcFile = path.join(dir, file);
//     const destFile = path.join(distDir, subdir, file.replace('.scss', '.css'));
//     const scssDestFile = path.join('lib/scss', subdir, file);
//     if (fs.statSync(srcFile).isDirectory()) {
//       fs.mkdirSync(path.join(distDir, subdir, file), { recursive: true });
//       fs.mkdirSync(path.join('lib/scss', subdir, file), { recursive: true });
//       processDirectory(srcFile, path.join(subdir, file));
//     } else if (file.endsWith('.scss')) {
//       compileSass(srcFile, destFile);
//       copyScssFiles(srcFile, scssDestFile);
//     }
//   });
// };

// fs.mkdirSync(distDir, { recursive: true });
// fs.mkdirSync('lib/scss', { recursive: true });
// processDirectory(srcDir);
