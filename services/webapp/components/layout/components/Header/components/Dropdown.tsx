import { isNil } from "lodash"
import Link from 'next/link'

const MenuIcon: React.FC = () => <i style={{ color: 'black' }} className="fa fa-angle-right" aria-hidden="true" />
interface IProps {
  data: string[]
  onClick: () => void
}

export const Dropdown: React.FC<IProps> = ({ data, onClick }) => {
  return (
    <ul className="main-category" style={{ display: null }}>
      <li>
        <Link href={`/product?page=1&size=8`}>
          <a onClick={onClick}>All Brands <MenuIcon /></a>
        </Link>
      </li>
      {data.map((brand: string) => !isNil(brand) && (
        <li key={brand}>
          <Link href={`/product?page=1&size=8&brand=${brand}`}>
            <a onClick={onClick}>{brand} <MenuIcon /></a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
