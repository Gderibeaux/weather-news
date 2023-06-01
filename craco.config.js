const path = require('path');

module.exports = {
  webpack: {
    resolve: {
      fallback: {
        os: require.resolve('os-browserify/browser'),
      },
    },
  },
};