const express = require('express')
const dotenv  = require('dotenv')

dotenv.config({ path: './config/config.env' })
const connectDB = require('./config/db')

connectDB()

const app = express()

const PORT = process.env.PORT || 3000


app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))