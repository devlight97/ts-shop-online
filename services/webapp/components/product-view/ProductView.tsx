import { ProductItem } from './components'
import {} from '@components'

const data = [
  {
    id: '1',
    name: 'Lenovo Gaming 2020',
    price: 100,
  },
  {
    id: '2',
    name: 'MacBook Pro 2017 99%',
    price: 100,
  },
  {
    id: '3',
    name: 'MacBook Air M1 2019',
    price: 100,
  },
  {
    id: '4',
    name: 'ThinkPad T420',
    price: 100,
  },
  {
    id: '5',
    name: 'Toshiba R1',
    price: 100,
  },
  {
    id: '6',
    name: 'HP EliteBook 4.0',
    price: 100,
  },
  {
    id: '7',
    name: 'MacBook Pro 2020',
    price: 100,
  },
  {
    id: '8',
    name: 'ThinkPad X280',
    price: 100,
  },
]

export const ProductView: React.FC = () => {
  return (
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="man" role="tabpanel">
        <div className="tab-single">
          <div className="row">
            {data.map((item) => (
              <ProductItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
