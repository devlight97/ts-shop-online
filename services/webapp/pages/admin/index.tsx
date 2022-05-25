import type { NextPage } from 'next'

import { HeadTag, MainLayout } from '@components'

const AdminPage: NextPage = () => {
  const Main: React.FC = () => <div>Admin Page</div>

  return (
    <div>
      <HeadTag title="Cart Page" />
      <MainLayout render={() => <Main />} />
    </div>
  )
}

export default AdminPage
