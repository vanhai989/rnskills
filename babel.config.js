module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.svg', '.jpg'],
        alias: {
          '@': './app',
          '@components': './app/components',
          '@assets': './app/assets',
          '@common': './app/common',
          '@constants': './app/constants',
          '@screens': './app/screens',
          '@services': './app/services',
          '@store': './app/store',
          '@routers': './app/navigator/routers',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
