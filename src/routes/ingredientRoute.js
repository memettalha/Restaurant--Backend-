import express from 'express'
import { getIngredients,getIngredientById,updateIngredient,deleteIngredient } from '../controller/ingredientController'

const router = express.Router()

router.get('/',getIngredients)
router.get('/:id',getIngredientById)
router.patch('/:id',updateIngredient)
router.delete('/:id',deleteIngredient)


export default router