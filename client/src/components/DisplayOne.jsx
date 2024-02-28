import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'


const DisplayOne = (props) => {
  const {id} = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/api/findOneProduct/${id}`)
      .then(res => {
        console.log(res.data.product)
        setProduct(res.data.product)
      })
      .catch(err => {
        console.log(err)
    })
  }, [])

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p> 
    </div>
  )
}

export default DisplayOne