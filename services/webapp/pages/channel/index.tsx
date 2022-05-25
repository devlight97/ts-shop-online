import * as React from 'react'
import type { NextPage } from 'next'
import { observer } from 'mobx-react-lite'

import { ChannelComponent } from 'features/channel/ChannelComponent'

const ChannelsPage: NextPage = observer((props: any) => {
  return (
    <div>
      <h2>Channels Page</h2>
      <ChannelComponent />
    </div>
  )
})

export default ChannelsPage
