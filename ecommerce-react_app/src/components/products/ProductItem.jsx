import React, { useEffect, useState } from 'react'
import { deleteProduct, getProductById, uploadProductImage } from '../../services/ProductService'
import { getCategories, setCategory } from '../../services/CategoryService'


function ProductItem({ productName, productDescription, productPrice, product_link, onSelectProduct, onDeleteProduct }) {


    let [categories, setCategories] = useState([])

  //  useEffect(() => {
      //  getCategories()
      //      .then(data => {
       //         setCategories(data);
       //     })

    //}, [])

       const fetchCategories = async ()=>{
        setCategories(await getCategories())

       }

       useEffect(()=>{
        fetchCategories();
       },[])

    


    // =================================================================
    const onSelectUpdate = async (link) => {
        // console.log(link) // for printing link on console

        let product = await getProductById(link);
        onSelectProduct(product)  //onSelectProduct is a function

    }
    // ============================================================
    // function to delete product

    const onSelectDelete = async (product_id_link) => {
        const deletedProduct = await deleteProduct(product_id_link)
        onDeleteProduct();

    }

    // ==========================================================


    const handleCategory=(category_link,product_link)=>{

        setCategory(product_link+"/category",category_link)

    }


//========================================================================================
    return (
        <div>
            <div className='col'>
                <div class="card">
                    <div class="card-body">
                        <img src={product_link + "/image"} class="card-img-top" alt="..." />
                        <h5 class="card-title">{productName}</h5>
                        <p class="card-text">{productDescription}</p>
                        <p class="card-text">Price: {productPrice}</p>

                        {/* Showing categories */}

                        <div class="dropdown mb-3">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Category
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                               

                                {categories.map((category) => {

                                    return (
                                        <li><button class="dropdown-item" type="button" 
                                        onClick={()=>{handleCategory(category._links.self.href,product_link)}}
                                        >{category.categoryName}</button></li>
                                        
                                    )
                                })}
                            </ul>
                        </div>


                        {/* ==================================================================== */}

                        {/* Update Button */}
                        <button className='btn btn-success' onClick={() => { onSelectUpdate(product_link) }}>Update</button>

                        {/* Delete Button */}
                        <button className='btn btn-danger' onClick={() => { onSelectDelete(product_link) }}>Delete</button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductItem