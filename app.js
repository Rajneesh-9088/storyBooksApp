const express = require('express')
const dotenv  = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
dotenv.config({ path: './config/config.env' })
const connectDB = require('./config/db')
const path = require('path')

connectDB()
// logging
const app = express()
if(process.env.NODE_ENV==='development') {
    app.use(morgan('dev'))
}

// Handlebars 
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view',path.join(__dirname,'./views'))
app.set('view engine', '.hbs');


// Routes 
app.use('/', require('./routes/index'))


const PORT = process.env.PORT || 3000


app.listen(PORT,console.log(`Server running in http://localhost:${PORT} ${process.env.NODE_ENV} mode on port ${PORT}`))