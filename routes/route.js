const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllerNote')

//route = /note-app
router
    .route('/')
    .get(controller.getAllNotes)

//route = /note-app/new-note
router
    .route('/new-note')
    .post(controller.addNewNote)

// route = /note-app/:title
router
    .route('/:title')
    .get(controller.getOneNote)
    .post(controller.updateNote)

module.exports = router