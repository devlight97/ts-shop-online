import { Breadcrumb, Footer, Header } from './components'

interface IProps {
  render: () => any
  breadcrumb?: string
}

export const MainLayout: React.FC<IProps> = ({ render = () => null, breadcrumb = '' }: IProps) => {
  return (
    <div>
      <Header />
      <Breadcrumb breadcrumb={breadcrumb} />
      {render()}
      <Footer />
    </div>
  )
}
