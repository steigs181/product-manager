const Product = require("../models/author.model")

module.exports = {
    //GET
    allMyProducts: (req, res) => {
        Product.find({})
            .then((products) => {
                res.json(products)
            })
            .catch(err => {
                res.json({message: "Something went wrong find all controllers", error: err})
            })
    },
    findOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then(oneProduct => {
                res.status(200).json({product: oneProduct})
            })
            .catch(err => {
                res.status(500).json({message: "Something went wrong in find one Controllers", error: err})
            })
    },
    //CREATE
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newlyCreatedProduct => {
                res.json({ product: newlyCreatedProduct })
            })
            .catch(err => {
                res.json({message:"Something went wrong in create Controllers", error: err})
            })
    },
    //UPDATE
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then(updateProduct => {
                res.status(200).json({product: updateProduct})
            })
            .catch(err => {
                res.status(500).json({message: "something went wrong in update controller", error: err})
            })
    },
    //DELETE
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then(deleted => {
                res.status(200).json(deleted)
            })
            .catch(err => {
                res.status(500).json({message: "something went wrong in delete controller", error: err})
            })
    }
}