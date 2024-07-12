const path = require('path');
const fs = require('fs');

const srcDir = path.resolve(__dirname, '..', 'storybook-static');

const replaceTitleAndFavicon = () => {
  const indexFilePath = path.resolve(srcDir, 'index.html');
  let content = fs.readFileSync(indexFilePath, 'utf8');

  const titlePattern = /<title[^>]*>([^<]*)<\/title>/i;

  content = content.replace(titlePattern, `<title>@spfxappdev/fluentui-react-controls</title>`);

  const faviconPattern = /<link[^>]*\brel\s*=\s*["']icon["'][^>]*>/i;

  content = content.replace(
    faviconPattern,
    `<link rel="icon" type="image/png" href="./favicon.png" />`
  );

  fs.writeFileSync(indexFilePath, content);
};

const copyFavicon = () => {
  const favIconPath = path.resolve(__dirname, '..', '.storybook/favicon.png');
  const favIconDestPath = path.resolve(srcDir, 'favicon.png');

  console.log('SSC', favIconPath, favIconDestPath);
  fs.copyFileSync(favIconPath, favIconDestPath);
  //fs.copyFile(favIconPath, srcDir);
};

copyFavicon();
replaceTitleAndFavicon();
