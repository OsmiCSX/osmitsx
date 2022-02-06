module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        // root: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@config': './src/config',
          '@translate': './src/i18n',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@api': './src/services/api',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
