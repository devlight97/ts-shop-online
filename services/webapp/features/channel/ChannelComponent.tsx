import { observer } from 'mobx-react-lite'
import { useModelProvider } from 'models/model.provider'
import { useRouter } from 'next/router'
import * as React from 'react'

import { socket } from '@services/event.service'

export const ChannelComponent = observer((props: any) => {
  const [channelName, setChannelName] = React.useState('')
  const [isDisplayCreateForm, setDisplayCreateForm] = React.useState(false)
  const router = useRouter()
  const { channelModel } = useModelProvider()
  const { loadChannels, createChannel, channels } = channelModel

  React.useEffect(() => {
    if (channels.length !== 0) {
      return
    }
    loadChannels()
  }, [])

  return (
    <div>
      <div>
        Current Channels:
        {channels.map((chl, idx) => (
          <p key={idx}>{chl.name}</p>
        ))}
      </div>
      <button onClick={() => setDisplayCreateForm(true)}>Create My Channel</button>
      {isDisplayCreateForm ? (
        <div style={{ paddingTop: 50 }}>
          FORM
          <div>
            <label htmlFor="">Channel's name: </label>
            <input type="text" onChange={(evt) => setChannelName(evt.target.value)} />
            <button
              onClick={async () => {
                createChannel({ name: channelName, socketId: socket.id }, () => router.push(`/video-stream?name=${channelName}`))
              }}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
})
