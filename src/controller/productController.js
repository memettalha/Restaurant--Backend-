import { Product } from "../models/productModel";

export const getProducts = async (req,res) => {
    const products = await Product.getAll()
    res.json(products)
}

export const getProductById = async  (req,res) => {
    try {
        const product = await Product.getById(req.params.id)
        if(!product){
            res.status(404).json({message:'no_product'})
        }
        res.json(product)
    } catch (error) {
        res.status(404).json({message:''})
    }
    
}

export const updatedProduct = async (req,res) => {
    try {
        const product = await Product.update(req.params.id)
        res.status(200).json({message:'Ürün güncellendi'})
    } catch (error) {
        res.status(404).json({error})
    }
}

export const deletedProduct = async (req,res) => {
    try {
         const product = await Product.delete(req.params.id, req.body)
         res.status(200).json({message:'Ürün Silindi'})
    } catch (error) {
        res.status(404).json({error})
    }
}


