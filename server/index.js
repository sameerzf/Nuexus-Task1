const express = require('express');
const cors = require('cors');
const {connect} = require('mongoose')

const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors({credentials:true,origin:"http://localhost:5173"}));
app.use('/api/users',userRoutes)

connect('mongodb+srv://venomfire_2525:sameer123@cluster0.neida3j.mongodb.net/mern-blog-app').then(
    app.listen(5000,()=>{
        console.log("Server is running on port 5000")

    })
).catch(error=>console.log(error))