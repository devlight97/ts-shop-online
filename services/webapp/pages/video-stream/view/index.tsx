import * as React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { isNil } from 'lodash'

import { socket } from '@services/event.service'
import { STREAMING, iceServerConfig } from '@packages/socket'

const VideoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`

const RemoteVideoContainer = styled.div`
  width: 700px;
  height: 400px;
  border: 1px solid black;
`

export const VideoStreamViewPage: NextPage = () => {
  const [remoteVideoEl, setRemoteVideoEl] = React.useState(null)

  const router = useRouter()

  React.useEffect(() => {
    if (isNil(remoteVideoEl)) {
      return
    }

    if (!router.isReady) {
      return
    }

    const initViewer = async () => {
      const { name } = router.query
      const peerConnection = new RTCPeerConnection(iceServerConfig)

      socket.emit(STREAMING.WATCHER__SUBSCRIBE, name)

      socket.on(STREAMING.STREAMER_SEND_DESCRIPTION, async (id: string, description: RTCSessionDescriptionInit) => {
        await peerConnection.setRemoteDescription(new RTCSessionDescription(description))
        const answer = await peerConnection.createAnswer()
        await peerConnection.setLocalDescription(new RTCSessionDescription(answer))
        socket.emit(STREAMING.WATCHER_SEND_DESCRIPTION, id, answer)

        peerConnection.onicecandidate = (event) => {
          if (isNil(event.candidate)) {
            return
          }
          socket.emit(STREAMING.ADD_CANDIDATE, id, { watcherId: socket.id, candidate: event.candidate })
        }
        socket.on(STREAMING.ADD_CANDIDATE, (data) => {
          peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate))
        })
      })

      peerConnection.ontrack = ({ streams: [stream] }) => {
        if (remoteVideoEl) {
          remoteVideoEl.srcObject = stream
        }
      }
    }

    initViewer()
  }, [remoteVideoEl, router.isReady])

  return (
    <div>
      <h2>View Page</h2>
      <VideoContainer>
        <RemoteVideoContainer>
          <video
            ref={(node) => setRemoteVideoEl(node)}
            style={{ width: '100%', height: '100%' }}
            autoPlay
            muted
            className="local-video"
            id="local-video"
          ></video>
        </RemoteVideoContainer>
      </VideoContainer>
    </div>
  )
}

export default VideoStreamViewPage
