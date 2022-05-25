import * as React from 'react'
import { PageNumber } from './components'
import { useRouter } from 'next/router'
import { isNil } from 'lodash'

interface IProps {
  pageQuantity: number
}

const renderPageNumberList = ({ total, currentPage }: { total: number; currentPage: number }) => {
  const items: number[] = []

  for (let i = 1; i <= total; i++) {
    items.push(i)
  }

  return (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      {items.map((num: number) => (
        <PageNumber active={num === currentPage ? true : false} num={num} />
      ))}
    </ul>
  )
}

export const PaginationBar: React.FC<IProps> = ({ pageQuantity = 1 }) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = React.useState(0)

  React.useEffect(() => {
    if (!router.isReady) {
      return
    }

    const { page } = router.query
    if (isNil(page)) {
      router.push(`${router.asPath}?page=1`)
      return
    }

    setCurrentPage(parseInt(page as string))
  }, [router.isReady])

  return (
    <div className="row">
      <div className="col-12">
        <div className="product-info">
          <div className="nav-main">{renderPageNumberList({ total: pageQuantity, currentPage })}</div>
        </div>
      </div>
    </div>
  )
}
