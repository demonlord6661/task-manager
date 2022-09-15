const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const TaskSchema = new mongoose.Schema({
    //the name is not an object but it contains the properties for name to follow 
    Item:{
        type: 'string',
        required: [true, 'Must Provide Item Name'],
        trim: true,
        maxLength:[20, 'Name must less than 20 characters'] 
    },
    Designer:{
        type: 'string',
        required: [true, 'Must Provide Designer'],
        trim: true,
        maxLength:[20, 'Name must less than 20 characters'] 
    },
    Stock:{
        type: Number,
        required: [true, 'Must Provide Stock Number'],
        maxLength:[300]
    },
    Value:{
        type: Number,
        required: [true, 'Must Provide Value Number'],
        maxLength:[2.50]
    },
    //{}
    //when they come onto the task manger this is one of the things that will be visable
})
//from this point we are exporting it and it has a way to confrim finding

module.exports = mongoose.model("Task", TaskSchema)
//Model.find({completed: true})