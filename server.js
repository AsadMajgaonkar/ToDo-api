
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const taskRoutes = require('./routes/task')
const cors = require('cors')

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log('DB connected'))
    .catch((err)=>console.log(err.message))

app.use(express.json())
app.use(cors())
app.use('/api/tasks', taskRoutes)

const port = process.env.port || 3000;
app.listen(port, ()=>console.log('listening on ' + port))