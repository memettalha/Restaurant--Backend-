import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
import categoryRoutes from './routes/categoryRoutes.js';
app.use('/api/categories', categoryRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 