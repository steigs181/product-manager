import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'


const Update = (props) => {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    })
    const navigate = useNavigate();
    const {id} = useParams();

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    useEffect( () => {
        axios.get(`http://localhost:8000/api/findOneProduct/${id}`)
            .then( res => {
                console.log(res.data)
                setProduct(res.data.product)
            })
            .catch( err => {
                console.log(err)
            })
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/updateOneProduct/${id}`, product )
            .then( res => {
                console.log(res)
                navigate(`/product/edit/${id}`)
            })
            .catch(err => {
                console.log(err)
            })
    }


  return (
    <div>
        <h1>Product Manager</h1>
        <div>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Title: </label>
                    <input type="text" name="title" onChange={handleChange} value={product.title} />
                </div>
                <div>
                    <label>Price: </label>
                    <input type="text" name="price" onChange={handleChange} value={product.price} />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name="description" onChange={handleChange} value={product.description} />
                </div>
                <button>Create</button>
            </form>
        </div>
    </div>
  )
}

export default Update