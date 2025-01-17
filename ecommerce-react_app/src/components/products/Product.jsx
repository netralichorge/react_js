import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/ProductService'
import ProductItem from './ProductItem'
import ProductForm from './ProductForm'


function Product() {
  let [products, setProducts] = useState([]) // useState used to store products
  let [selectedProduct, setSelectedProduct] = useState(null)

  // for search
  let[searchQuery,setSearchQuery] = useState(" ")
const handleChange=(event)=>{
    setSearchQuery(event.target.value);
}

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);

      })
  }, [])

  // To refresh all products when you add product
  const refreshProducts=()=>{
    getProducts().then(data=>{
      setProducts(data);
    })
  }

  //To set select Product
  const handleSelectProduct=(selectedProduct)=>{

    setSelectedProduct(selectedProduct);
    console.log(selectedProduct)
  }

  return (
    <div>

      <div class="container mt-3">
        <div class="row">
          <div class="col">
            {/* Product Form Start */}
            <ProductForm onAddProduct={refreshProducts} selectedProduct={selectedProduct} />
            {/* Product Form End */}
          </div>

          <div class="col">
            {/* Displaying Products : Start */}
            <div class="row row-cols-1 row-cols-md-2 g-4">
              {products.map((p) => {
                return (
                  <ProductItem
                    productName={p.productName}
                    productDescription={p.productDescription}
                    productPrice={p.productPrice}
                    product_link={p._links.self.href}
                    onSelectProduct={handleSelectProduct}
                     
                    
                  />
                )
              })}
            </div>
            {/* Displaying Products : End */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Product