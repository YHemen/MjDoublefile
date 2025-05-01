const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

<<<<<<< HEAD
=======
/**  const {
     wrapWithReanimatedMetroConfig,
   } = require('react-native-reanimated/metro-config'); */
>>>>>>> 8007156 (may first commit)
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
<<<<<<< HEAD
 * @type {import('metro-config').MetroConfig}
 */
const config = {};
=======
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {resetCache: true};
>>>>>>> 8007156 (may first commit)

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
