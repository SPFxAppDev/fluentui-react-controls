import type { Preview } from "@storybook/react";
import spfxappdevTheme from './spfxappdevTheme';
import './storybookstyles.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: spfxappdevTheme,
    },
  },
};

export default preview;
