import { io } from 'socket.io-client'
import { VIDEO_STREAM_SERVICE_HOST } from '@packages/env'

export const socket = io(VIDEO_STREAM_SERVICE_HOST)
