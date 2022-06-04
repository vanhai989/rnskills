module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          app: './app',
          '@/*': './app/*',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
