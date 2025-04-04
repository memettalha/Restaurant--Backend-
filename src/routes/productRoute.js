import express from 'express'
import {getProducts, getProductById, createProduct, updatedProduct, deletedProduct} from '../controller/productController.js'

const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProductById)
router.post('/', createProduct)
router.patch('/:id', updatedProduct)
router.delete('/:id', deletedProduct)

export default router