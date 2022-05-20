import * as React from 'react'
import type { NextPage } from 'next'
import { observer } from 'mobx-react-lite'

import { Channel } from 'features/channel/Channel'

const ChannelsPage: NextPage = observer((props: any) => {
  return (
    <div>
      <h2>Channels Page</h2>
      <Channel />
    </div>
  )
})

export default ChannelsPage
