import React from 'react'
import { deleteProduct, getProductById } from '../../services/ProductService'

function ProductItem({ productName, productDescription, productPrice,product_link,onSelectProduct,onDeleteProduct }) {

    const onSelectUpdate=async(link)=>{
       // console.log(link) // for printing link on console

       let product = await getProductById(link);
       onSelectProduct(product)  //onSelectProduct is a function

    }
    // ============================================================
    // function to delete product

    const onSelectDelete=async(product_id_link)=>{
        const deletedProduct = await deleteProduct(product_id_link)
        onDeleteProduct();

  }

    // ==========================================================

    return (
        <div>
            <div className='col'>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{productName}</h5>
                        <p class="card-text">{productDescription}</p>
                        <p class="card-text">Price: {productPrice}</p>

                        {/* Update Button */}
                        <button className='btn btn-success' onClick={()=>{onSelectUpdate(product_link)}}>Update</button>

                        {/* Delete Button */}
                        <button className='btn btn-danger' onClick={()=>{onSelectDelete(product_link)}}>Delete</button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductItem