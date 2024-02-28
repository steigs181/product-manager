import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Update from './UpdateProduct';
import DisplayOne from './DisplayOne';

const ProductList = (props) => {
    const { productList , setProductList} = props;
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${productId}`)
            .then( res => {
                console.log(res)
                removeFromDom(productId)
            })
            .catch( err => {
                console.log(err)
            })
    }
    const removeFromDom = (productId) => {
        setProductList(productList.filter(product => product._id !== productId))
    }

    useEffect( () => {
        axios.get('http://localhost:8000/api/getAllProducts')
        .then( res => {
            console.log(res.data)
            setProductList(res.data)
        })
        .catch( err => {
            console.log(err)
        })
    }, [])


  return (
    <div>
        {
            productList.map((product, idx) => (
                <div key={idx}>
                    <Link to={`/product/${product._id}`}><h2>{product.title}</h2></Link>
                    <button onClick={(e) => {deleteProduct(product._id)}}>DELETE</button>
                    <Link to={`/product/edit/${product._id}`}>
                        <button>
                            Update
                        </button>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default ProductList