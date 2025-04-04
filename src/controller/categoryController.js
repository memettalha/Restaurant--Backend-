import Category from '../models/categoryModel.js'

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.getAll(req.query);
        res.json(categories);
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.getById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Kategori bulunamadı" });
        }
        res.json(category);
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};

export const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        await Category.create({ name, description });
        res.status(201).json({ message: "Kategori oluşturuldu" });
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        await Category.update(req.params.id, { name, description });
        res.status(200).json({ message: "Kategori güncellendi" });
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};

export const deletedCategory = async (req, res) => {
    try {
        await Category.delete(req.params.id);
        res.status(202).json({ message: "Kategori silindi" });
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};