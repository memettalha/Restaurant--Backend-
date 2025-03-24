import {Category} from '../models/categoryModel.js'

export const getCategories = async (req,res) =>{
    console.log(req.query)
    const categories =  await Category.getAll(req.query)
    res.json(categories)
}

export const getCategoryById = async (req,res) =>{
    try {
        const category = await Category.getById(req.params.id)
    if(!category){
         res.status(404).json({message:"no categories"})
    }
     res.json(category)
    } catch (error) {
        res.status(400).json()
    }
    
}

export const updadeCategory = async (req,res) => {
    try {
        const {name,description} =req.body
    await Category.update(req.params.id,{name,description})
    res.status(200).json('Category Updated')
    } catch (error) {
        res.status(400).json()
    }
    
}

export const deletedCategory = async (req,res) => {
    try {
        await Category.delete(req.params.id)
        res.status(202).json()
    } catch (error) {
        res.status(400).json()
    }
    
}