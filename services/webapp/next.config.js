/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.+(ts|tsx)$/,
      loader: 'ts-loader',
      include: [path.resolve(__dirname, '../packages'), /packages/],
      exclude: [/node_modules/],
    })

    config.module.rules.push({
      test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      loader: 'url-loader',
      include: [/frontend/],
      exclude: [/node_modules/],
    })

    config.resolve.alias['@components'] = path.resolve(__dirname, './components')
    config.resolve.alias['@models'] = path.resolve(__dirname, './models')
    config.resolve.alias['@features'] = path.resolve(__dirname, './features')
    config.resolve.alias['@services'] = path.resolve(__dirname, './services')

    return config
  },
}

module.exports = nextConfig
