import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/ProductService'
import ProductItem from './ProductItem'


function Product() {
  let [products, setProducts] = useState([]) // useState used to store products

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);
      })
  }, [])

  return (
    <div>

      {/* Displaying Products : Start */}
      <div class="row row-cols-1 row-cols-md-2 g-4">

        {products.map((p) => {
          return (
            <ProductItem
              productName={p.productName}
              productDescription={p.productDescription}
              productPrice={p.productPrice}
            />
          )
        })}
      </div>
      {/* Displaying Products : End */}

    </div>
  )
}

export default Product