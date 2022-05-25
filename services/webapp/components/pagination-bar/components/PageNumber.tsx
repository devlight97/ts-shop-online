import { useRouter } from 'next/router'
import Link from 'next/link'

interface IProps {
  num: number
  active: boolean
}

export const PageNumber: React.FC<IProps> = ({ num, active }) => {
  const router = useRouter()
  const pageUrl = router.asPath.split('?')[0] + `?page=${num}`

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
