const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const TaskSchema = new mongoose.Schema({
    //the name is not an object but it contains the properties for name to follow 
    name:{
        type: 'string',
        required: [true, 'Must Provide Name'],
        trim: true,
        maxLength:[20, 'Name must less than 20 characters'] 
    },
    //when they come onto the task manger this is one of the things that will be visable
    completed:{
        type: boolean,
        default: false,
    }
})
//from this point we are exporting it and it has a way to confrim finding

module.exports = mongoose.model("Task", TaskSchema)
Model.find({completed: true})