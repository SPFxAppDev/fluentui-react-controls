import { create } from '@storybook/theming/create';
import logo from './logo.png';

export default create({
  base: 'dark',
  brandTitle: '@SPFxAppDev Fluent UI React Controls',
  brandUrl: 'https://spfx-app.dev/',
  brandImage: logo,
  brandTarget: '_self',

  // UI
  appBg: '#0f172ade',
  appContentBg: '#0f172ade',
  appPreviewBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  textColor: '#ffffff',
  textInverseColor: '#ffffff',
});
