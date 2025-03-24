import express from 'express'
import {getCategories,getCategoryById, updadeCategory, deletedCategory} from '../controller/categoryController'

const router = express.Router()

router.get('/',getCategories)
router.get('/:id',getCategoryById)
router.put('/:id',updadeCategory)
router.delete('/:id',deletedCategory)


export default router