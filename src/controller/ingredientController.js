import { Ingredients } from "../models/ingredientModel";

export const  getIngredients = async (req,res) => {
    try {
        const ingredient = await Ingredients.getAll()
        res.json(ingredient)
    } catch (error) {
        res.status(400).json({message : 'Hata oldu'})
    }
}

export const getIngredientById = async (req,res) => {
    try {
        const ingredient = await Ingredients.getById(req.params.id)
        if(!ingredient){
            res.status(404).json({message:'Hata oldu'})
        }
        res.status(200).json(ingredient)
    } catch (error) {
        res.status(400).json({message : 'Hata oldu'})
    }
}


export const updateIngredient =  async (req, res) => {
    try {
        await Ingredients.update(req.params.id,req.body)
        res.status(202).json({message:'Malzeme güncellendi'})
    } catch (error) {
        res.status(400).json({message : 'Hata oldu'})
    }
}

export const deleteIngredient =  async (req, res) => {
    try {
        await Ingredients.delete(req.params.id)
        res.status(201).json({message:'Malzeme silindi'})
    } catch (error) {
        res.status(400).json({message : 'Hata oldu'})
    }
}