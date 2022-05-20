export interface Channel {
  name: string
  videoSessionId: string
  socketId: string
}

export interface User {
  name?: string
  socketId: string
}