import React, {useState} from 'react'
import ProductList from './ProductList'
import Form from './Form'
import axios from 'axios'
import DisplayOne from './DisplayOne'
import Update from './UpdateProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Main = ({product, setProduct, productList, setProductList}) => {

  return (
    <div>
      <Form product={product} setProduct={setProduct} setProductList={setProductList} productList={productList} />
      <ProductList productList={productList} setProductList={setProductList} />
    </div>
  )
}

export default Main