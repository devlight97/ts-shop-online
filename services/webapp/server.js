const express = require('express')
const next = require('next')
const proxyMiddleware = require('http-proxy-middleware')
const { parse } = require('url')
const { join } = require('path')

function localProxy(service, port) {
  const path = `/api/${service}`

  return {
    [path]: {
      target: `http://localhost:${port}/`,
      pathRewrite: {
        [`^${path}`]: '',
      },
      changeOrigin: true,
    },
  }
}

const PROXIES = {
  // ...localProxy('business-object', 9002),
  // ...localProxy('grove-core', 9005),
  // ...localProxy('identity', 8008),
  // ...localProxy('grove-access-controls', 8080),
  // ...localProxy('tenant-management', 9023),
  // ...localProxy('grove-time-off', 9007),
  // ...localProxy('storage', 9022),
  '/api': {
    target: process.env.NEXT_APP_PROXY || 'http://localhost:8000',
    changeOrigin: true,
  },
}

const PORT = parseInt(process.env.NEXT_APP_PORT, 10) || 3000
const ENV = process.env.NODE_ENV || 'development'
const dev = ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    if (dev) {
      Object.entries(PROXIES).forEach(([path, config]) => {
        server.use(proxyMiddleware(path, config))
      })
    }

    server.use('/health', (req, res) => {
      res.end('Healthy')
    })

    server.use('/favicon.ico', (req, res) => res.status(200).sendFile('favicon.ico', { root: __dirname + '/static/' }))

    server.all('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl
      res.setHeader('X-Frame-Options', 'SAMEORIGIN')
      if (pathname === '/sw.js' || pathname.startsWith('/precache.')) {
        const filePath = join(__dirname, '.next', pathname)
        app.serveStatic(req, res, filePath)
      } else {
        handle(req, res, parsedUrl)
      }
    })

    server.listen(PORT, (err) => {
      if (err) {
        throw err
      }

      console.log(`> Ready on port ${PORT} [${ENV}]`)
    })
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server, please try again', err)
  })
