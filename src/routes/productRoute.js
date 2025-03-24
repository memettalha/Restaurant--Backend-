import express from 'express'
import {getProducts,getProductById,updatedProduct,deletedProduct} from '../controller/productController'

const router = express.Router()

router.get('/',getProducts)
router.get(':/id',getProductById)
router.patch(':/id',updatedProduct)
router.delete(':/id',deletedProduct)

export default router