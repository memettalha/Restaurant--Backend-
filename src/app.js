import express from 'express'
import dotenv from 'dotenv'
import categoryRoute from './routes/categoryRoute.js'
import productRoutes from './routes/productRoute.js'
import ingredientRoute from './routes/ingredientRoute.js'

dotenv.config()
const app = express()

const port = process.env.PORT || 3001

app.use(express.json())
app.use('/categories', categoryRoute)
app.use('/products', productRoutes)
app.use('/ingredients', ingredientRoute)

app.listen(port, () => {
    console.log('Sunucu Ayakta')
})