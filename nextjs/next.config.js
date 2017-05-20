var webpack = require('webpack');

module.exports = {
  webpack: (cfg) => {
    cfg.node = {
      fs: 'empty',
    };
    cfg.plugins.push(
      new webpack.DefinePlugin({
        'process.env.mongoUrl': JSON.stringify(process.env.mongoUrl),
        'process.env.serverUrl': JSON.stringify(process.env.serverUrl),
      })
    );
    return cfg;
  },
};
