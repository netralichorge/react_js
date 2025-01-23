import React, { useEffect, useState } from 'react'
import { getProducts, getProductsHighToLow, getProductsLowToHigh, getProductsOrderByProductNameAsc, getProductsOrderByProductNameDesc } from '../../services/ProductService'
import ProductItem from './ProductItem'
import ProductForm from './ProductForm'


function Product({queryFromNavbar}) {
  let [products, setProducts] = useState([]) // useState used to store products
  let [selectedProduct, setSelectedProduct] = useState(null);

  // for search
  let [searchQuery, setSearchQuery] = useState('');



  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);

      })
      if(queryFromNavbar)
      {
        setSearchQuery(queryFromNavbar)
      }
  }, [queryFromNavbar])

  // To refresh all products when you add product
  const refreshProducts = () => {
    getProducts().then(data => {
      setProducts(data);
    })
  }

  //To set select Product
  const handleSelectProduct = (selectedProduct) => {

    setSelectedProduct(selectedProduct);
    console.log(selectedProduct)
  }

  // To sort data

  const sort = async (choice) => {
    switch (choice) {
      case 1:
        setProducts(await getProductsLowToHigh());
        break;

      case 2:
        setProducts(await getProductsHighToLow());
        break;

      case 3:
        setProducts(await getProductsOrderByProductNameAsc());
        break;

      case 4:
        setProducts(await getProductsOrderByProductNameDesc());
        break;
    }

  }

  // ========================================================

  return (
    <div>

      <div className="container mt-3">
        <div className="row">
          <div className="col">
            {/* Product Form Start */}
            <ProductForm onAddProduct={refreshProducts} selectedProduct={selectedProduct} onUpdateProduct={refreshProducts} setSelectedProduct={setSelectedProduct} />
            {/* Product Form End */}
          </div>

          <div className="col">
            {/* Showing number of products : Start */}

            <button type="button" className="btn btn-primary mb-3">
              Number of products <span className="badge bg-dark">{products.length}</span>
            </button>

            {/* Showing number of products : End */}

            {/* Sort :Start */}

            <ul className="list-group mb-3">
              <li className="list-group-item" onClick={() => { sort(1) }}>Low to High</li>
              <li className="list-group-item" onClick={() => { sort(2) }}>High to Low</li>
              <li className="list-group-item" onClick={() => { sort(3) }}>A-Z</li>
              <li className="list-group-item" onClick={() => { sort(4) }}>Z-A</li>
            </ul>

            {/* Sort :End */}
            <hr />

            {/*========================== Search ======================================*/}

            <div class="mb-3">
              
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setSearchQuery(e.target.value)}}/>
              <div id="emailHelp" class="form-text">Enter search query</div>
            </div>

            {/* =====================(search End)====================================== */}

            {/* Displaying Products : Start */}

            <div className="row row-cols-1 row-cols-md-2 g-4">
              {products.filter(p=>{

                return p.productName.toLowerCase()
                .includes(searchQuery.toLowerCase())
              }).map((p) => {
                return (
                  <ProductItem
                    productName={p.productName}
                    productDescription={p.productDescription}
                    productPrice={p.productPrice}
                    product_link={p._links.self.href}
                    onSelectProduct={handleSelectProduct}
                    onDeleteProduct={refreshProducts}
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