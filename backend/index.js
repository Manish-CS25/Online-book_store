import express from 'express'
import dotenv from 'dotenv' 
import mongoose from 'mongoose' 
const app = express()
import bookRoutes from './routes/book_routes.js'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 3000

// Connect to MongoDB
const db_URL = process.env.MONGO_URI
try {
  mongoose.connect(db_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  console.log('MongoDB Connected...')
} catch (error) {
    console.error(error.message)
    process.exit(1)
    }
 
app.use(cors())

app.use('/books', bookRoutes)


app.get('/', (req, res) => {
  res.send('Hello kaise ho!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})