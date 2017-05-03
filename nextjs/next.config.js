var webpack = require('webpack');

module.exports = {
  webpack: (cfg) => {
    cfg.plugins.push(
      new webpack.DefinePlugin({
        'process.env.accessKey': JSON.stringify(process.env.accessKey),
        'process.env.secretKey': JSON.stringify(process.env.secretKey),
      })
    );

    return cfg;
  },
};
