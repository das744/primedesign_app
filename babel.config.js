// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [
//       require.resolve('expo-router/babel'),
//       'react-native-reanimated/plugin',
//     ],
//     plugins: [
//       ['module:react-native-dotenv', {
//         moduleName: '@env',
//         path: '.env',
//       }]
//     ]
    
//   };
// };


module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      require.resolve('expo-router/babel'),
      'react-native-reanimated/plugin',
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
      }]
    ]
  };
};
