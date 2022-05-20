export interface Channel {
  name: string
  socketId: string
  localDescription?: { type: string; sdp: string }
}
