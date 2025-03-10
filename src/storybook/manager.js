import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import logo from '../../public/LunaEdgeLogo.svg';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Luna Edge UI',
    brandUrl: 'https://luna-edge-new-landing-page.vercel.app/',
    brandImage: logo,
    colorPrimary: '#2563eb',
    colorSecondary: '#f472b6',
  },
});
