export const PORTS = {
  WEB_APP: 3000,
  IDENTITY_SERVICE: 8008,
  NOTIFICATION_SERVICE: 8009,
  API_GATEWAY: 8000,
  VIDEO_STREAM: 8005,
  PRODUCT_SERVICE: 8003,
}
export const WEB_APP_HOST = process.env.WEB_APP_HOST || `http://localhost:${PORTS.WEB_APP}`
export const IDENTITY_SERVICE_HOST = process.env.IDENTITY_SERVICE_HOST || `http://localhost:${PORTS.IDENTITY_SERVICE}`
export const NOTIFICATION_SERVICE_HOST =
  process.env.NOTIFICATION_SERVICE_HOST || `http://localhost:${PORTS.NOTIFICATION_SERVICE}`
export const API_GATEWAY_HOST =
  process.env.API_GATEWAY_HOST || `http://localhost:${PORTS.API_GATEWAY}`
export const PRODUCT_SERVICE_HOST = process.env.PRODUCT_SERVICE_HOST || `http://localhost:${PORTS.PRODUCT_SERVICE}`
export const VIDEO_STREAM_SERVICE_HOST = process.env.VIDEO_STREAM_SERVICE_HOST || `http://localhost:${PORTS.VIDEO_STREAM}`
export const STREAMMING_HOST = process.env.VIDEO_STREAM_HOST || `http://localhost:${PORTS.VIDEO_STREAM}/streaming`
export const CHATTING_HOST = process.env.VIDEO_STREAM_HOST || `http://localhost:${PORTS.VIDEO_STREAM}/chatting`
