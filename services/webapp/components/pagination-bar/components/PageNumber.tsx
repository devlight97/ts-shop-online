import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'
import { isNil } from 'lodash'

interface IProps {
  num: number
  active: boolean
}

export const PageNumber: React.FC<IProps> = ({ num, active }) => {
  const router = useRouter()
  const [size, setSize] = React.useState(4)
  const [brand, setBrand] = React.useState('')

  React.useEffect(() => {
    if (!router.isReady) {
      return
    }

    setSize(parseInt(router.query.size as string) || 4)
    setBrand(router.query.brand as string || '')
  }, [router.isReady])
  const pageUrl = router.asPath.split('?')[0] + `?page=${num}&size=${size}${isNil(brand) ? '' : '&brand=' + brand}`

  return (
    <li className="nav-item">
      <Link href={pageUrl}>
        <a className={`nav-link ${active ? 'active' : ''}`} data-toggle="tab" href={pageUrl} role="tab">
          {num}
        </a>
      </Link>
    </li>
  )
}
