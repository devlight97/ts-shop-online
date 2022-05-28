import { IProduct } from 'interfaces/product.interface'
import React from 'react'

import { ProductItem } from './components'

interface IProps {
  products: IProduct[]
}

export const ProductView: React.FC<IProps> = ({ products }) => {
  return (
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="man" role="tabpanel">
        <div className="tab-single">
          <div className="row">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
