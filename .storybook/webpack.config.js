const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('react-docgen-typescript-loader')
      },
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx', '.js');
  config.resolve.plugins = [new TsconfigPathsPlugin()];
  return config;
};
