import React, { useState } from 'react'
import axios from 'axios'


const Form = (props) => {
    const {product, setProduct} = props;
    const { productList, setProductList } = props;

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/createProduct', product )
            .then( res => {
                console.log(res)
                setProduct(res.data, {
                    title: "",
                    price: 0,
                    description: ""
                })
                setProductList([...productList, product])
            })
            .catch(err => {
                console.log(err)
            })
    }


  return (
    <div>
        <h1>Product Manager</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input type="text" name="title" onChange={handleChange}/>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="text" name="price" onChange={handleChange}/>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name="description" onChange={handleChange}/>
                </div>
                <button>Create</button>
            </form>
        </div>
    </div>
  )
}

export default Form