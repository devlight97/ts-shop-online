import * as React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { isNil } from 'lodash'

import { STREAMING, iceServerConfig } from '@packages/socket'
import { socket } from '@services/event.service'

const VideoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`

const LocalVideoContainer = styled.div`
  /* position: absolute; */
  left: 0;
  top: 0;
  width: 200px;
  height: 200px;
  border: 1px solid black;
`

export const VideoStreamPage: NextPage = () => {
  const [localVideoEl, setLoaclVideoEl] = React.useState(null)

  const router = useRouter()

  React.useEffect(() => {
    if (isNil(localVideoEl)) {
      return
    }

    if (!router.isReady) {
      return
    }

    const initConnection = async () => {
      const peerConnections: Record<string, RTCPeerConnection> = {}

      socket.on(STREAMING.WATCHER__SUBSCRIBE, async (watcherId: string) => {
        const peerConnection = new RTCPeerConnection(iceServerConfig)

        const stream = localVideoEl.srcObject
        stream.getTracks().forEach((track: any) => {
          peerConnection.addTrack(track, stream)
        })

        const offer = await peerConnection.createOffer()
        await peerConnection.setLocalDescription(new RTCSessionDescription(offer))
        peerConnections[watcherId] = peerConnection
        socket.emit(STREAMING.STREAMER_SEND_DESCRIPTION, watcherId, offer)
      })

      socket.on(STREAMING.WATCHER_SEND_DESCRIPTION, (watcherId: string, description: RTCSessionDescriptionInit) => {
        peerConnections[watcherId].setRemoteDescription(new RTCSessionDescription(description))

        peerConnections[watcherId].onicecandidate = (event) => {
          if (isNil(event.candidate)) {
            return
          }
          socket.emit(STREAMING.ADD_CANDIDATE, watcherId, { candidate: event.candidate, watcherId })
        }
        socket.on(STREAMING.ADD_CANDIDATE, (data) => {
          peerConnections[watcherId].addIceCandidate(new RTCIceCandidate(data.candidate))
        })
      })
    }

    const initVideoEl = async () => {
      socket.emit(STREAMING.STREAMER_INITIATE, router.query.name)
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        localVideoEl.srcObject = stream

        initConnection()
      } catch (error) {
        router.push('/error')
      }
    }

    initVideoEl()
  }, [localVideoEl, router.isReady])

  return (
    <div>
      <h2>Streaming Page</h2>
      <VideoContainer>
        <LocalVideoContainer>
          <video
            ref={(node) => setLoaclVideoEl(node)}
            style={{ width: '100%', height: '100%' }}
            autoPlay
            muted
            className="remote-video"
            id="remote-video"
          ></video>
        </LocalVideoContainer>
      </VideoContainer>
    </div>
  )
}

export default VideoStreamPage
