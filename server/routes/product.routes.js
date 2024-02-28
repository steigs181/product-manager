const ProductController = require("../controllers/product.controller")

module.exports = (app) =>{
    app.get('/api/getAllProducts', ProductController.allMyProducts)
    app.get('/api/findOneProduct/:id', ProductController.findOneProduct)
    app.post('/api/createProduct', ProductController.createProduct)
    app.patch('/api/updateOneProduct/:id', ProductController.updateProduct)
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct)
}