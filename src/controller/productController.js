import { Product } from '../models/productModel.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.getAll(req.query);
        res.json(products);
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.getById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Ürün bulunamadı" });
        }
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, category_id } = req.body;
        await Product.create({ name, description, price, category_id });
        res.status(201).json({ message: "Ürün oluşturuldu" });
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};

export const updatedProduct = async (req, res) => {
    try {
        const { name, description, price, category_id } = req.body;
        await Product.update(req.params.id, { name, description, price, category_id });
        res.status(200).json({ message: "Ürün güncellendi" });
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};

export const deletedProduct = async (req, res) => {
    try {
        await Product.delete(req.params.id);
        res.status(202).json({ message: "Ürün silindi" });
    } catch (error) {
        res.status(400).json({ message: "Bir hata oluştu.", error: error.message });
    }
};


