import path = require('path')
import nodeExternals = require('webpack-node-externals')
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

export const webpackBaseConfig = {
  target: 'node',
  bail: true,
  externals: [
    nodeExternals({
      whitelist: [/@services/, /@packages/, /rxjs/, /env/, /^lodash/],
      modulesFromFile: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              experimentalWatchApi: true,
              transpileOnly: true,
            },
          },
        ],
        include: [/services/, /env/, /packages/],
        exclude: [/node_modules/, /nestjs/],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: { configFile: '../../tsconfig.json', },
    }),
  ],
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'index.js',
  },
}
