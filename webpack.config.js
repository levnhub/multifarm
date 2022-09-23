const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const { mode } = argv;
  console.log('Running mode:', mode);

  const isDev = mode === 'development';
  const isProd = !isDev;
  const filename = (ext) =>
    isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

  return {
    context: path.resolve(__dirname, 'src'),
    mode,
    entry: {
      main: './index.tsx',
    },
    output: {
      filename: filename('js'),
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devServer: {
      port: 3000,
      hot: isDev,
      historyApiFallback: true, // will redirect 404s to /index.html
      static: './dist',
    },
    devtool: isDev ? 'source-map' : false,
    plugins: [
      new HtmlWebpackPlugin({
        template: '../public/index.html',
        minify: {
          collapseWhitespace: isProd,
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ['ts-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  };
};
