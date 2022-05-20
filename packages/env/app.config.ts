export const PORTS = {
  WEB_APP: 3000,
  IDENTITY_SERVICE: 8008,
  NOTIFICATION_SERVICE: 8009,
  SHOP_CORE_SERVICE: 8000,
  VIDEO_STREAM: 8005,
}
export const WEB_APP_HOST = process.env.WEB_APP_HOST || `http://localhost:${PORTS.WEB_APP}`
export const IDENTITY_SERVICE_HOST = process.env.IDENTITY_SERVICE_HOST || `http://localhost:${PORTS.IDENTITY_SERVICE}`
export const NOTIFICATION_SERVICE_HOST =
  process.env.NOTIFICATION_SERVICE_HOST || `http://localhost:${PORTS.NOTIFICATION_SERVICE}`
export const SHOP_CORE_SERVICE_HOST =
  process.env.SHOP_CORE_SERVICE_HOST || `http://localhost:${PORTS.SHOP_CORE_SERVICE}`
export const VIDEO_STREAM_SERVICE_HOST = process.env.VIDEO_STREAM_SERVICE_HOST || `http://localhost:${PORTS.VIDEO_STREAM}`
export const STREAMMING_HOST = process.env.VIDEO_STREAM_HOST || `http://localhost:${PORTS.VIDEO_STREAM}/streaming`
export const CHATTING_HOST = process.env.VIDEO_STREAM_HOST || `http://localhost:${PORTS.VIDEO_STREAM}/chatting`
