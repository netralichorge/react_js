import React from 'react'
import { addProduct } from '../../services/ProductService'

function ProductForm() {

    // Function to be called when form will be submitted

    const submitHandler=(e)=>{

        addProduct({
            // left side eclipse variables or right side form variables  
            
            productId:e.target.productId.value,
            productName:e.target.productName.value,
            productDescription:e.target.productDescription.value,
            productPrice:e.target.productPrice.value
        })
        .then(data=>data)


    }

    //==================================================
    return (

        <div className='container border border-primary border-3 p-3 my-3'>

            <form onSubmit={submitHandler}>
                
                <h1 className='bg-primary p-3 text-white text-center'>Add Product</h1>

                {/* Product Id */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Id</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='productId' />
                </div>

                {/* Product Name */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productName' />
                </div>

                {/* Product Description */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productDescription' />
                </div>

                {/* Product Price*/}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Price</
                    label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productPrice' />
                </div>

                   {/* Button to submit form */}
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

export default ProductForm