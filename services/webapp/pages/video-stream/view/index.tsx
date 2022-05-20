import * as React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { isNil } from 'lodash'

import { socket } from '@services/event.service'

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

  const config = {
    iceServers: [
      {
        urls: ['stun:stun.l.google.com:19302'],
      },
    ],
  }

  React.useEffect(() => {
    if (isNil(remoteVideoEl)) {
      return
    }

    if (!router.isReady) {
      return
    }

    const initViewer = async () => {
      const { name } = router.query
      const peerConnection = new RTCPeerConnection(config)

      socket.emit('watcher-subscribe', name)

      socket.on('streamer-description', async (id: string, description: RTCSessionDescriptionInit) => {
        await peerConnection.setRemoteDescription(new RTCSessionDescription(description))
        const answer = await peerConnection.createAnswer()
        await peerConnection.setLocalDescription(new RTCSessionDescription(answer))
        socket.emit('watcher-description', id, answer)

        peerConnection.onicecandidate = (event) => {
          if (isNil(event.candidate)) {
            return
          }
          socket.emit('candidate', id, { watcherId: socket.id, candidate: event.candidate })
        }
        socket.on('candidate', (data) => {
          console.log(data.candidate)
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
