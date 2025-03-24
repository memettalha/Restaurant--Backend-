import express from 'express'
import dotenv from 'dotenv'
import  categoryRoute from './routes/categoryRoute'
import productRoutes from './routes/productRoute'
import ingredientRoute from './routes/ingredientRoute'

dotenv.config()
const app = express()

const port = process.env.PORT || 3001

app.use(express.json())
app.use('/categories',categoryRoute)
app.use('product',productRoutes)
app.use('/ingredient',ingredientRoute)

app.listen(port,()=>{
    console.log('Sunucu Ayakta')
})