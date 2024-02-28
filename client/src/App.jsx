import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Main from './components/Main'
import './App.css'
import DisplayOne from './components/DisplayOne'
import Update from './components/UpdateProduct'

function App() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: ""
})

const [productList, setProductList] = useState([])

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={ <Main product={product} setProduct={setProduct} productList={productList} setProductList={setProductList}/> }/>
        <Route path="/product/:id" element={ <DisplayOne product={product} setProduct={setProduct} /> } />
        <Route path="/product/edit/:id" element={ <Update product={product} setProduct={setProduct} />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
