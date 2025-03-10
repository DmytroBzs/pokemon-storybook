import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Luna Edge UI',
    brandUrl: 'https://yourcompany.com',
    brandImage: '/assets/luna-edge-logo.png',
    colorPrimary: '#2563eb',
    colorSecondary: '#f472b6',
  },
});
