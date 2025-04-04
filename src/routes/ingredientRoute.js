import express from 'express'
import { getIngredients, getIngredientById, createIngredient, updateIngredient, deleteIngredient } from '../controller/ingredientController.js'

const router = express.Router()

router.get('/', getIngredients)
router.get('/:id', getIngredientById)
router.post('/', createIngredient)
router.patch('/:id', updateIngredient)
router.delete('/:id', deleteIngredient)

export default router