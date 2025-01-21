import React, { useEffect, useState } from 'react'
import { addProduct, updateProduct } from '../../services/ProductService'

function ProductForm({onAddProduct,selectedProduct,onUpdateProduct}) {

    // Function to be called when form will be submitted

    let[product,setProduct] = useState({productId:'',productName:'',productDescription:'',productPrice:''});

    const submitHandler=(e)=>{
        e.preventDefault(); // used for stop refreshing webpage

        addProduct({
            // left side eclipse variables or right side form variables  
            
            productId:e.target.productId.value,
            productName:e.target.productName.value,
            productDescription:e.target.productDescription.value,
            productPrice:e.target.productPrice.value
        })
        .then(data=>{
            onAddProduct();
            return data;
        })
    }
    

    //==================================================
    // useEffect run atleast one time

    useEffect(()=>{
        if(selectedProduct)
            setProduct(selectedProduct)

    },[selectedProduct])

    //==================================================
    // To Control change in input box

    const handleChange=(e)=>{
         
       // console.log(e.target)
        let {name,value}=e.target;
        console.log(name+" "+value);
       
       setProduct((prevProduct)=>{
           console.log(prevProduct)
            return {...prevProduct,[name]:value};

        })
    
    }

    //==================================================
    // To handle update

    const updateHandler=(e)=>{
        e.preventDefault();

        console.log("Update Handler called");
        updateProduct(selectedProduct._links.self.href,{
        productName:e.target.productName.value,
        productDescription:e.target.productDescription.value,
        productPrice:e.target.productPrice.value
       })   
       .then(data=>{
        onAddProduct();
       setProduct({productId:'',productName:'',productDescription:'',productPrice:''});
       })

    }

    //===================================================
    return (

        <div className='container border border-primary border-3 p-3 my-3'>

            <form onSubmit={selectedProduct?updateHandler:submitHandler}>
                
                <h1 className='bg-primary p-3 text-white text-center'>Add Product</h1>

                {/* Product Id */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Id</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='productId'
                    value={product.productId} onChange={handleChange} />
                </div>

                {/* Product Name */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productName'
                        value={product.productName} onChange={handleChange} />
                </div>

                {/* Product Description */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productDescription'
                        value={product.productDescription} onChange={handleChange} />
                </div>

                {/* Product Price*/}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Price</
                    label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='productPrice'
                        value={product.productPrice} onChange={handleChange} />
                </div>

                   {/* Button to submit form */}
                <button type="submit" className="btn btn-primary">{selectedProduct?"Update":"Submit"}</button>

            </form>
        </div>
    )
}

export default ProductForm