require('dotenv').config()
const express = require('express')
const database = require('./configure/dbConfig')
const path = require('path')
const app = express()
database();
app.use(express.json())
// app.use(express.urlencoded({extended: false}))


app.use('/note-app',require('./routes/route'));

app.use(express.static(path.join(__dirname,"./note/build")))
app.get("*",function(_,res){
    res.sendFile(
        path.join(__dirname,"./note/build/index.html"),
        function(err){
            res.status(500).send(err);
        }
    )
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})