const Note = require('../models/model')

exports.getAllNotes = async (req,res,next) => {
    const data = await Note.find()

    res.json({
        sucess: true,
        data: data
    })
}

exports.updateNote =async (req,res,next) =>{
    
    await Note.updateOne(req.params,req.body)
    const data = await Note.find(req.params)

    return res.status(201).json({
        sucess: true,
        body: data
    })

}

exports.getOneNote = async(req,res,next) => {

    const data = await Note.find(req.params)
    
    res.json({
        sucess: true,
        data: data
    })
}

exports.addNewNote = async (req,res,next) =>{
    const data = await Note.create(req.body)

    return res.status(201).json({
        sucess: true,
        data: data
    })
}
