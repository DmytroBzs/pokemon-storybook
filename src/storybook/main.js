export const stories = ['../src/**/*.stories.tsx'];
export const addons = ['@storybook/addon-links', '@storybook/addon-essentials'];
export async function webpackFinal(config) {
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  });
  return config;
}
