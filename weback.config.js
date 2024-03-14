// const path = require('path');

// module.exports = {
//   entry: './src/index.tsx', // Annahme: Deine Einstiegspunktdatei
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'lib'), // Ausgabeordner
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(scss|css)$/, // Nur für SCSS- und CSS-Dateien
//         use: [
//           'style-loader', // Fügt CSS zu DOM hinzu
//           'css-loader', // Wandelt CSS in JavaScript um
//           'sass-loader' // Kompiliert SCSS zu CSS
//         ],
//       },
//       {
//         test: /\.(ts|tsx)$/, // TypeScript-Dateien
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
// };
