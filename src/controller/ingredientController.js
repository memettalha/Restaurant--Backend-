import { Ingredient } from "../models/ingredientModel.js";

export const getIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.getAll(req.query);
        res.json(ingredients);
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};

export const getIngredientById = async (req, res) => {
    try {
        const ingredient = await Ingredient.getById(req.params.id);
        if (!ingredient) {
            return res.status(404).json({ message: "Malzeme bulunamadı" });
        }
        res.json(ingredient);
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};

export const createIngredient = async (req, res) => {
    try {
        const { name, is_allergen } = req.body;
        await Ingredient.create({ name, is_allergen });
        res.status(201).json({ message: "Malzeme oluşturuldu" });
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};

export const updateIngredient = async (req, res) => {
    try {
        const { name, is_allergen } = req.body;
        await Ingredient.update(req.params.id, { name, is_allergen });
        res.status(200).json({ message: "Malzeme güncellendi" });
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};

export const deleteIngredient = async (req, res) => {
    try {
        await Ingredient.delete(req.params.id);
        res.status(202).json({ message: "Malzeme silindi" });
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};