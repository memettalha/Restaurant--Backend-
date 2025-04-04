import express from 'express'
import {getCategories, getCategoryById, createCategory, updateCategory, deletedCategory} from '../controller/categoryController.js'

const router = express.Router();

// Tüm kategorileri getir
router.get('/', getCategories);

// ID ile kategori getir
router.get('/:id', getCategoryById);

// Yeni kategori oluştur
router.post('/', createCategory);

// ID ile kategori güncelle
router.patch('/:id', updateCategory);

// ID ile kategori sil (soft delete)
router.delete('/:id', deletedCategory);

export default router;



