var webpack = require('webpack');

module.exports = {
  webpack: (cfg) => {
    cfg.node = {
      fs: 'empty',
    };
    return cfg;
  },
};
