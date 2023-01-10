const mongoose = require('mongoose')

const modelSchema = new mongoose.Schema({
    title:{
        unique: true,
        type: String
    },
    description:{
        type: String
    }
})

const Note = mongoose.model("Note",modelSchema)


module.exports = Note